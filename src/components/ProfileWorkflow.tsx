'use client';

import { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const linkedinFormats = [
  { type: 'Foto profilo', dimensions: '400 x 400 px', notes: 'Minimo consigliato. Viene mostrata come cerchio.' },
  { type: 'Banner / copertina', dimensions: '1584 x 396 px', notes: 'Rapporto 4:1. Attenzione al crop su mobile.' },
  { type: 'Post immagine', dimensions: '1200 x 1200 px', notes: 'Quadrato, massima visibilita nel feed.' },
  { type: 'Post landscape', dimensions: '1200 x 627 px', notes: 'Formato 1.91:1. Standard link preview.' },
  { type: 'Articolo cover', dimensions: '1200 x 644 px', notes: 'Immagine di copertina per articoli.' },
  { type: 'Logo azienda', dimensions: '300 x 300 px', notes: 'Quadrato. Mostrato piccolo nelle liste.' },
];

const whatYouCanDo = [
  {
    title: 'Migliorare la foto esistente (consigliato)',
    desc: 'Rimuovere lo sfondo, migliorare illuminazione e contrasto, aggiungere uno sfondo professionale pulito. E il vostro vero volto, solo presentato meglio.',
    recommended: true,
  },
  {
    title: 'Servizi AI headshot da vostre foto',
    desc: 'Piattaforme come Remini, Artguru o Headshot AI prendono le vostre foto reali e generano varianti professionali. Il risultato vi assomiglia, ma e "abbellito" dall\'AI. Costo: 5-30 euro.',
    recommended: false,
  },
  {
    title: 'Rimuovere sfondi e distrazioni',
    desc: 'Tool come remove.bg eliminano lo sfondo in un click. Potete poi aggiungere uno sfondo neutro professionale.',
    recommended: true,
  },
];

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  tool: string;
  hasImage: boolean;
  imageSrc?: string;
  placeholderText?: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: 'Scegliete la vostra foto migliore',
    description:
      'Cercate una foto dove il vostro viso e ben visibile, ben illuminato, e con un\'espressione professionale ma naturale. Non deve essere perfetta: la miglioreremo nei passi successivi.',
    tool: 'La vostra galleria foto',
    hasImage: true,
    imageSrc: '/modulo-h/workflow/workflow-step1-original.png',
  },
  {
    step: 2,
    title: 'Rimuovete lo sfondo',
    description:
      'Andate su remove.bg (gratuito), caricate la foto. In pochi secondi avrete il vostro volto e busto isolato su sfondo trasparente. Scaricate il PNG.',
    tool: 'remove.bg',
    hasImage: false,
    placeholderText: '[Foto senza sfondo — da generare]',
  },
  {
    step: 3,
    title: 'Aggiungete uno sfondo professionale',
    description:
      'Aprite Canva (gratuito), create un progetto 400x400 px. Aggiungete uno sfondo tinta unita (grigio chiaro, blu scuro, beige) o un gradiente sobrio. Inserite sopra la vostra foto senza sfondo.',
    tool: 'Canva / qualsiasi editor',
    hasImage: false,
    placeholderText: '[Foto con sfondo professionale — da generare]',
  },
  {
    step: 4,
    title: 'Regolate luminosita e contrasto',
    description:
      'Se il viso e scuro, aumentate leggermente la luminosita. Aggiungete un po\' di contrasto per "dare vita" all\'immagine. L\'obiettivo: viso chiaro e ben definito, non sovraesposto.',
    tool: 'Canva / editor foto del telefono',
    hasImage: false,
    placeholderText: '[Foto con luminosita corretta — da generare]',
  },
  {
    step: 5,
    title: 'Esportate PNG 400x400+',
    description:
      'Esportate come PNG (non JPG, per evitare artefatti di compressione). Dimensione minima 400x400 pixel, meglio 800x800: lasciate che LinkedIn comprima.',
    tool: 'Canva / editor di esportazione',
    hasImage: false,
    placeholderText: '[Foto finale esportata — da generare]',
  },
];

const evaluationPrompt = `Analizza questa foto come potenziale foto profilo LinkedIn.

Valuta su una scala da 1 a 10:
1. ILLUMINAZIONE: il viso e ben illuminato? Ci sono ombre dure?
2. COMPOSIZIONE: la testa e centrata? C'e abbastanza spazio intorno?
3. ESPRESSIONE: l'espressione e professionale ma accessibile?
4. SFONDO: lo sfondo e distraente o pulito?
5. QUALITA TECNICA: la foto e nitida? La risoluzione e sufficiente?

Per ogni punto, dimmi cosa funziona e cosa migliorare.
Poi dai un GIUDIZIO COMPLESSIVO e suggerisci i passi concreti per migliorarla.`;

const backgroundPrompt = `Devo creare uno sfondo per una foto profilo LinkedIn.
Il mio settore e [il vostro settore].
Il tono che voglio comunicare e [professionale/creativo/tech/corporate/altro].

Suggeriscimi:
1. 3 colori di sfondo appropriati (con codice esadecimale)
2. Sfondo solido o gradiente?
3. Devo aggiungere elementi grafici o meglio minimal?`;

const preWorkflowPrompt = `Guarda questa foto [allegate la foto]. Devo usarla per una foto profilo LinkedIn.
Dimmi:
1. La luminosita e adeguata?
2. Il contrasto e buono?
3. Il mio viso e ben visibile?
4. Consiglieresti modifiche prima di procedere?`;

const successCriteria = [
  'Lo sfondo e pulito e professionale (no camera da letto, no spiaggia)',
  'Il vostro viso occupa circa 60-70% dello spazio verticale',
  'L\'illuminazione e uniforme, senza ombre dure sul viso',
  'Siete riconoscibili — sembra effettivamente voi',
  'Il file e di buona qualita (non pixelato quando ingrandito)',
  'Il formato e corretto: minimo 400x400 pixel, meglio 800x800',
  'Guardate (piu o meno) verso l\'obiettivo',
];

const troubleshooting = [
  {
    problem: '"Remove.bg non funziona bene con il mio sfondo"',
    solution: 'Se lo sfondo e simile al colore dei capelli/vestiti, provate photoroom.com come alternativa. In Canva Pro c\'e Background Remover integrato.',
  },
  {
    problem: '"Il contrasto tra me e il nuovo sfondo e strano"',
    solution: 'Evitate sfondi dello stesso colore dei vestiti. Aggiungete una leggera ombra in Canva (Effects > Shadow) e riducete la luminosita dello sfondo.',
  },
  {
    problem: '"La foto sembra ritagliata male sui bordi"',
    solution: 'In remove.bg, cliccate "Edit" per rifinire i bordi. Per capelli ricci/mossi, accettate piccole imperfezioni — sono normali.',
  },
  {
    problem: '"Non ho una foto adatta"',
    solution: 'Fatene una con lo smartphone: luce naturale davanti a voi (vicino a una finestra), sfondo neutro. Ora migliore: meta mattina o tardo pomeriggio.',
  },
  {
    problem: '"La mia foto sembra un\'immagine stock/falsa"',
    solution: 'Lo sfondo e troppo "perfetto" rispetto alla foto. Aggiungete un leggerissimo blur allo sfondo e scegliete colori meno saturi.',
  },
];

export function ProfileWorkflow() {
  const [copiedEval, setCopiedEval] = useState(false);
  const [copiedBg, setCopiedBg] = useState(false);
  const [copiedPre, setCopiedPre] = useState(false);

  const copyText = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <AnimatedSection>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-sm font-medium">
            ESERCIZIO
          </span>
          <span className="text-sm text-[var(--text-muted)]">20-30 min</span>
        </div>
      </AnimatedSection>

      {/* H.7.1 - Perche la foto profilo conta */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Perche la foto profilo conta</h3>
          <p className="text-[var(--text-secondary)]">
            La foto profilo di LinkedIn e la vostra prima impressione digitale. I recruiter
            la vedono prima ancora di leggere il vostro nome. Profili con una foto professionale
            ricevono fino a 14 volte piu visualizzazioni rispetto a profili senza foto.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-5">
            <p className="text-sm text-[var(--text-secondary)]">
              Non servono studi fotografici costosi. Con gli strumenti giusti potete trasformare
              una buona foto scattata con lo smartphone in una foto profilo professionale e credibile.
              L&apos;importante e partire dalla <strong>vostra foto reale</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* H.7.2 - Formati LinkedIn */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Formati e dimensioni LinkedIn</h3>
          <p className="text-[var(--text-secondary)]">
            Conoscere le dimensioni esatte vi evita foto pixelate o tagliate male.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-1 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Tipo</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Dimensioni</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Note</th>
                </tr>
              </thead>
              <tbody>
                {linkedinFormats.map((row) => (
                  <tr key={row.type} className="border-b border-[var(--border-subtle)]">
                    <td className="py-3 px-4 font-medium text-[var(--accent-primary)]">{row.type}</td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-[var(--bg-elevated)] px-2 py-1 rounded font-mono">
                        {row.dimensions}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>

      {/* Warning: NON generare un volto artificiale */}
      <div>
        <AnimatedSection>
          <div
            className="p-6 rounded-2xl"
            style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)' }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-lg"
                style={{ background: 'var(--color-error)' }}
              >
                !
              </div>
              <div>
                <p className="font-bold text-[var(--color-error)] text-lg mb-2">
                  NON generate un volto completamente artificiale
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex gap-2">
                    <span className="text-[var(--color-error)] shrink-0 font-bold">1.</span>
                    <span><strong>E disonesto.</strong> Vi presentate con un aspetto che non avete. Al primo meeting la discrepanza sara evidente.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-error)] shrink-0 font-bold">2.</span>
                    <span><strong>Si nota.</strong> I recruiter esperti riconoscono le foto generate: sfondi troppo perfetti, simmetria innaturale, dettagli strani.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--color-error)] shrink-0 font-bold">3.</span>
                    <span><strong>Danneggia la credibilita.</strong> Se scoperto, il danno reputazionale e molto peggiore del beneficio di una foto &quot;perfetta&quot;.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Cosa potete fare con l'AI */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Cosa potete fare con l&apos;AI</h3>
          <p className="text-[var(--text-secondary)]">
            L&apos;AI puo migliorare la vostra foto reale in modi perfettamente legittimi e trasparenti.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4">
          {whatYouCanDo.map((item) => (
            <StaggerItem key={item.title}>
              <div
                className="glass-card p-5"
                style={item.recommended ? { borderLeft: '4px solid var(--color-success)' } : {}}
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
                      {item.recommended && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(34,197,94,0.1)] text-[var(--color-success)] font-medium">
                          consigliato
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Prompt pre-workflow */}
      <div>
        <AnimatedSection>
          <div className="glass-card p-5">
            <div className="flex justify-between items-start mb-3">
              <p className="font-semibold">Prompt: valutare la foto prima di iniziare</p>
              <button
                onClick={() => copyText(preWorkflowPrompt, setCopiedPre)}
                className="text-xs px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
              >
                {copiedPre ? 'Copiato!' : 'Copia'}
              </button>
            </div>
            <pre className="code-block text-sm whitespace-pre-wrap">{preWorkflowPrompt}</pre>
            <p className="text-xs text-[var(--text-muted)] mt-3">
              Caricate la foto su ChatGPT, Claude o Gemini insieme a questo prompt.
              L&apos;AI vi dira se la foto e adatta o se serve scattarne una nuova.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Il workflow in 5 passi */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Il workflow in 5 passi</h3>
          <p className="text-[var(--text-secondary)]">
            Seguite questi passi per trasformare una foto esistente in una foto profilo professionale.
            Tempo stimato: 15-20 minuti.
          </p>
        </AnimatedSection>

        {/* Horizontal step indicator */}
        <AnimatedSection className="mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap">
              {workflowSteps.map((ws, idx) => (
                <div key={ws.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg">
                      {ws.step}
                    </div>
                    <p className="text-[9px] md:text-[11px] text-[var(--text-muted)] text-center max-w-[80px] md:max-w-[100px] mt-2 leading-tight">
                      {ws.title}
                    </p>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="text-xl text-[var(--border-default)] mx-1 md:mx-3 mb-6">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed steps */}
        <StaggerContainer className="space-y-6">
          {workflowSteps.map((ws) => (
            <StaggerItem key={ws.step}>
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                    {ws.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-semibold text-[var(--text-primary)] text-lg">{ws.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] font-mono">
                        {ws.tool}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{ws.description}</p>

                    {ws.hasImage && ws.imageSrc ? (
                      <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                        <img
                          src={ws.imageSrc}
                          alt={`Step ${ws.step}: ${ws.title}`}
                          className="w-full max-w-md h-auto object-contain mx-auto"
                          loading="lazy"
                        />
                        <p className="text-xs text-[var(--text-muted)] text-center py-2 px-4">
                          Esempio: una foto di partenza prima dell&apos;elaborazione
                        </p>
                      </div>
                    ) : (
                      <div className="w-full aspect-[4/3] max-w-md bg-[var(--bg-elevated)] border-2 border-dashed border-[var(--border-default)] rounded-xl flex items-center justify-center">
                        <p className="text-[var(--text-muted)] text-sm text-center px-4">
                          {ws.placeholderText}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Prompt per scegliere lo sfondo */}
      <div>
        <AnimatedSection>
          <div className="glass-card p-5">
            <div className="flex justify-between items-start mb-3">
              <p className="font-semibold">Prompt: scegliere lo sfondo in Canva</p>
              <button
                onClick={() => copyText(backgroundPrompt, setCopiedBg)}
                className="text-xs px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
              >
                {copiedBg ? 'Copiato!' : 'Copia'}
              </button>
            </div>
            <pre className="code-block text-sm whitespace-pre-wrap">{backgroundPrompt}</pre>
            <p className="text-xs text-[var(--text-muted)] mt-3">
              Chiedete all&apos;AI di suggerirvi colori appropriati per il vostro settore.
              Personalizzate i campi tra parentesi quadre.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Prompt per valutazione finale */}
      <div>
        <AnimatedSection>
          <div className="glass-card p-5">
            <div className="flex justify-between items-start mb-3">
              <p className="font-semibold">Prompt: valutare il risultato finale</p>
              <button
                onClick={() => copyText(evaluationPrompt, setCopiedEval)}
                className="text-xs px-2 py-1 rounded bg-[var(--bg-elevated)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
              >
                {copiedEval ? 'Copiato!' : 'Copia'}
              </button>
            </div>
            <pre className="code-block text-sm whitespace-pre-wrap">{evaluationPrompt}</pre>
            <p className="text-xs text-[var(--text-muted)] mt-3">
              Caricate la foto finale insieme al prompt. L&apos;AI vi dara un feedback
              strutturato su cosa migliorare.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Criteri di successo */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Criteri di successo</h3>
          <p className="text-[var(--text-secondary)]">
            La vostra foto profilo e riuscita se soddisfa tutti questi criteri:
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-6">
            <ul className="space-y-3">
              {successCriteria.map((criterion, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span
                    className="w-5 h-5 rounded border-2 border-[var(--border-default)] shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: 'var(--bg-elevated)' }}
                  >
                    <span className="text-[10px] text-[var(--text-muted)]">&nbsp;</span>
                  </span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <p className="text-xs text-[var(--text-muted)]">
                <strong>Test rapido:</strong> Mostrate la foto a un amico o familiare. Se non vi
                riconosce immediatamente, c&apos;e qualcosa che non va.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Troubleshooting */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Troubleshooting</h3>
          <p className="text-[var(--text-secondary)]">
            Problemi comuni e come risolverli.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4">
          {troubleshooting.map((item) => (
            <StaggerItem key={item.problem}>
              <div className="glass-card p-5">
                <p className="font-semibold text-[var(--text-primary)] mb-2">{item.problem}</p>
                <p className="text-sm text-[var(--text-secondary)]">{item.solution}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Risultato atteso */}
      <AnimatedSection>
        <div className="success-card">
          <p className="font-medium mb-3">Risultato atteso</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Alla fine di questo esercizio avrete una foto profilo LinkedIn professionale,
            creata a partire dalla vostra foto reale, con sfondo pulito, illuminazione
            corretta, e dimensioni ottimali. Nessun volto artificiale, nessun inganno:
            solo la versione migliore di voi stessi.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
