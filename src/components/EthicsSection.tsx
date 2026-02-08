'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const copyrightPoints = [
  {
    question: 'Chi possiede le immagini generate?',
    answer:
      'Dipende dal servizio. La maggior parte delle piattaforme (Midjourney, DALL-E, Leonardo) concede diritti commerciali sulle immagini generate, ma con condizioni diverse. Leggete sempre i Terms of Service prima di usare un\'immagine in contesti commerciali importanti.',
  },
  {
    question: 'Da dove vengono le immagini di addestramento?',
    answer:
      'I modelli sono addestrati su miliardi di immagini raccolte da internet, incluse foto di fotografi professionisti, illustrazioni di artisti, e opere protette da copyright. Ci sono cause legali in corso (es. Getty Images vs Stability AI). La questione legale non e ancora risolta.',
  },
  {
    question: 'Consiglio pratico per uso commerciale importante',
    answer:
      'Per progetti commerciali dove il rischio legale conta (pubblicita, packaging, branding), preferite Adobe Firefly: e addestrato esclusivamente su immagini Adobe Stock con licenza e su contenuti di pubblico dominio. Questo riduce significativamente il rischio di violazione copyright.',
  },
];

const declarationRequired = [
  'Post social che potrebbero sembrare foto reali',
  'Contenuti professionali e aziendali (presentazioni, report, sito web)',
  'Qualsiasi contesto dove un inganno potrebbe causare danno',
  'Immagini usate come "prova" di qualcosa (eventi, risultati, testimonianze)',
  'Foto profilo che non rappresentano il vostro aspetto reale',
];

const declarationNotRequired = [
  'Illustrazioni chiaramente artistiche e stilizzate',
  'Immagini palesemente generate (stili surreali, impossibili)',
  'Uso personale e privato senza condivisione pubblica',
  'Placeholder e bozze interne durante la progettazione',
  'Sfondi astratti e decorativi dove nessuno si aspetta realismo',
];

const situationsToAvoid = [
  {
    situation: 'Foto profilo LinkedIn',
    risk: 'Se scoperta, distrugge la credibilita professionale.',
  },
  {
    situation: 'Foto di eventi mai avvenuti',
    risk: 'Disinformazione. Potenziali conseguenze legali.',
  },
  {
    situation: 'Immagini "prova" di risultati',
    risk: 'Frode se usate per ottenere benefici (finanziamenti, assunzioni).',
  },
  {
    situation: 'Foto di persone reali in contesti falsi',
    risk: 'Diffamazione, violazione della privacy, conseguenze penali.',
  },
];

const declarationExamples = [
  {
    context: 'Caption social',
    example: 'Immagine generata con AI (Midjourney)',
    placement: 'In fondo al testo del post',
  },
  {
    context: 'Documento / presentazione',
    example: 'Visual creato con assistenza AI',
    placement: 'Nel footer della slide o nella caption dell\'immagine',
  },
  {
    context: 'Sito web / blog',
    example: 'Illustrazione: generata con AI | Crediti: DALL-E / Leonardo.AI',
    placement: 'Nel tag alt dell\'immagine e/o in un credits visibile',
  },
  {
    context: 'Portfolio creativo',
    example: 'Concept realizzato con [tool AI] + post-produzione manuale',
    placement: 'Nella descrizione del progetto',
  },
];

const c2paInfo = [
  'Molte piattaforme aggiungono automaticamente metadati C2PA alle immagini generate.',
  'Lo standard C2PA (Coalition for Content Provenance and Authenticity) sta diventando diffuso: Adobe, Microsoft, Google lo supportano.',
  'Anche se non dichiarate esplicitamente, le immagini AI possono essere identificate attraverso questi metadati.',
  'Strumenti come Content Credentials (contentcredentials.org) permettono a chiunque di verificare la provenienza di un\'immagine.',
  'In futuro, i social network potrebbero mostrare automaticamente un\'etichetta "generata con AI" se i metadati sono presenti.',
];

const deepfakeExamples = [
  {
    type: 'Video',
    desc: 'Mostrare persone reali dire cose che non hanno detto.',
  },
  {
    type: 'Immagini',
    desc: 'Inserire persone reali in situazioni inventate o compromettenti.',
  },
  {
    type: 'Audio',
    desc: 'Imitare la voce di qualcuno per telefonate o messaggi falsi.',
  },
];

export function EthicsSection() {
  return (
    <div className="space-y-12">
      {/* Copyright */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Copyright delle immagini generate</h3>
          <p className="text-[var(--text-secondary)]">
            Chi possiede un&apos;immagine generata con l&apos;AI? Da dove vengono le immagini
            usate per addestrare i modelli? Sono domande ancora aperte, ma ecco cosa
            sappiamo oggi.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4">
          {copyrightPoints.map((point) => (
            <StaggerItem key={point.question}>
              <div className="glass-card p-5">
                <p className="font-semibold text-[var(--text-primary)] mb-2">{point.question}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{point.answer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-4">
          <div className="success-card">
            <p className="text-sm">
              <strong>Consiglio pratico:</strong> Per la maggior parte degli usi quotidiani
              (presentazioni, social, prototipi) non ci sono problemi. Il rischio legale
              e rilevante solo per usi commerciali significativi dove i ricavi dipendono
              direttamente dall&apos;immagine (pubblicita, prodotti in vendita).
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Non fingere che sia reale */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Non fingere che sia reale</h3>
          <p className="text-[var(--text-secondary)]">
            La regola piu importante dell&apos;etica AI: se qualcuno potrebbe ragionevolmente
            pensare che un&apos;immagine sia una foto reale, e non lo e, dichiaratelo.
            Soprattutto in questi contesti:
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="warning-card">
            <p className="font-semibold mb-4">Situazioni dove la trasparenza e fondamentale</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {situationsToAvoid.map((item) => (
                <div key={item.situation} className="p-3 rounded-lg bg-[var(--bg-surface)]">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{item.situation}</p>
                  <p className="text-xs text-[var(--color-error)] mt-1">{item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Deepfake */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Deepfake: cosa sono e perche evitarli</h3>
          <p className="text-[var(--text-secondary)]">
            I deepfake sono video, immagini o audio che mostrano persone reali fare o dire
            cose che non hanno fatto. La tecnologia e sempre piu accessibile, ma le
            conseguenze possono essere gravi.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="error-card">
            <p className="font-semibold mb-4 text-[var(--color-error)]">
              Regola assoluta: non create mai deepfake di persone reali senza consenso esplicito
            </p>
            <StaggerContainer className="grid sm:grid-cols-3 gap-4 mb-4">
              {deepfakeExamples.map((ex) => (
                <StaggerItem key={ex.type}>
                  <div className="p-3 rounded-lg bg-[var(--bg-surface)]">
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{ex.type}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{ex.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-sm text-[var(--text-secondary)]">
              Le conseguenze possono essere <strong>legali</strong> (diffamazione,
              violazione della privacy) oltre che etiche. In Italia e in EU, il
              regolamento AI Act classifica i deepfake tra i sistemi ad alto rischio
              e richiede trasparenza obbligatoria.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Quando dichiarare - due colonne */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Quando dichiarare</h3>
          <p className="text-[var(--text-secondary)]">
            Non tutto richiede una dichiarazione. Ecco una guida pratica per orientarsi.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Dichiarare */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.06)', border: '1px solid rgba(249, 115, 22, 0.2)' }}
            >
              <p className="font-bold text-[var(--accent-primary)] mb-4 text-lg">
                Dichiarare
              </p>
              <ul className="space-y-3">
                {declarationRequired.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent-primary)] shrink-0 font-bold">*</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Non necessario */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
            >
              <p className="font-bold text-[var(--color-success)] mb-4 text-lg">
                Non necessario
              </p>
              <ul className="space-y-3">
                {declarationNotRequired.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--color-success)] shrink-0 font-bold">~</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Come dichiarare */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Come dichiarare</h3>
          <p className="text-[var(--text-secondary)]">
            Non serve un disclaimer lungo e formale. Basta una frase chiara nel punto giusto.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-1 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                    Contesto
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                    Esempio di dichiarazione
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                    Dove inserirla
                  </th>
                </tr>
              </thead>
              <tbody>
                {declarationExamples.map((row, idx) => (
                  <tr key={idx} className="border-b border-[var(--border-subtle)]">
                    <td className="py-3 px-4 font-medium text-[var(--accent-primary)]">
                      {row.context}
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-xs bg-[var(--bg-elevated)] px-2 py-1 rounded font-mono">
                        {row.example}
                      </code>
                    </td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">
                      {row.placement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>

      {/* Metadati C2PA */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Metadati C2PA: la firma digitale delle immagini AI</h3>
          <p className="text-[var(--text-secondary)]">
            Anche se non dichiarate nulla, le immagini generate con AI spesso portano
            con se una &quot;firma digitale&quot; che ne rivela l&apos;origine.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="glass-card p-6">
            <ul className="space-y-3">
              {c2paInfo.map((info, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-6 h-6 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-muted)] text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>In pratica:</strong> meglio dichiarare volontariamente piuttosto che
                essere &quot;scoperti&quot; dai metadati. La trasparenza proattiva costruisce
                fiducia; l&apos;opacita la distrugge.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Summary */}
      <AnimatedSection>
        <div className="quote-block">
          <strong>In sintesi</strong> — Il principio e semplice: siate trasparenti. Se un&apos;immagine
          potrebbe ingannare qualcuno, dichiaratela. Se la usate per scopi commerciali importanti,
          scegliete piattaforme con licenze chiare (Adobe Firefly). Il regolamento EU AI Act sta
          introducendo obblighi specifici sulla trasparenza dei contenuti AI-generated.
          E ricordate: la tecnologia per identificare i contenuti AI migliora ogni giorno.
        </div>
      </AnimatedSection>
    </div>
  );
}
