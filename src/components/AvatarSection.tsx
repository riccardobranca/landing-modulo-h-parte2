'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const useCases = [
  {
    title: 'Video di formazione aziendale',
    desc: 'Creare corsi interni senza dover registrare ogni volta un presentatore davanti alla telecamera.',
  },
  {
    title: 'Contenuti multilingua',
    desc: 'Un singolo video tradotto e doppiato in decine di lingue, con lip-sync automatico.',
  },
  {
    title: 'Presentazioni corporate',
    desc: 'Video istituzionali, onboarding nuovi dipendenti, comunicazioni interne.',
  },
  {
    title: 'Prototipazione rapida',
    desc: 'Testare un\'idea di video prima di investire in produzione reale.',
  },
];

interface AvatarTool {
  name: string;
  url: string;
  pricingLabel: string;
  pricingDetail: string;
  pricingColor: string;
  pricingBg: string;
  bestFor: string;
  worstAt: string;
  whenToUse: string;
  features: string[];
}

const avatarTools: AvatarTool[] = [
  {
    name: 'Synthesia',
    url: 'https://www.synthesia.io',
    pricingLabel: 'Solo a pagamento',
    pricingDetail: 'Da ~$30/mese',
    pricingColor: 'var(--color-error)',
    pricingBg: 'rgba(239, 68, 68, 0.1)',
    bestFor: 'Qualita professionale, lip-sync migliore del mercato, 140+ lingue supportate.',
    worstAt: 'Nessun piano gratuito. Costo elevato per utilizzo occasionale. Avatar non personalizzabili nel piano base.',
    whenToUse: 'Quando dovete produrre video aziendali di alta qualita in modo continuativo e il budget lo consente.',
    features: [
      '140+ lingue con lip-sync nativo',
      'Avatar stock di alta qualita',
      'Avatar personalizzato (piani Enterprise)',
      'Editor video integrato con slide',
      'Leader di mercato per video corporate',
    ],
  },
  {
    name: 'HeyGen',
    url: 'https://www.heygen.com',
    pricingLabel: 'Free tier disponibile',
    pricingDetail: 'Free (limitato) / da $29/mese',
    pricingColor: 'var(--color-success)',
    pricingBg: 'rgba(34, 197, 94, 0.1)',
    bestFor: 'Avatar creato dalle vostre foto, voice cloning incluso, buon rapporto qualita/prezzo.',
    worstAt: 'Free tier molto limitato (pochi minuti). Qualita leggermente inferiore a Synthesia sui movimenti labiali.',
    whenToUse: 'Quando volete un avatar che vi somigli davvero, o quando il voice cloning e importante per il vostro progetto.',
    features: [
      'Avatar da foto personali (Instant Avatar)',
      'Voice cloning della vostra voce',
      'Free tier per provare',
      'Traduzione video automatica',
      'Buon rapporto qualita/prezzo',
    ],
  },
  {
    name: 'D-ID',
    url: 'https://www.d-id.com',
    pricingLabel: 'Free tier disponibile',
    pricingDetail: 'Free (limitato) / piani a pagamento',
    pricingColor: 'var(--color-success)',
    pricingBg: 'rgba(34, 197, 94, 0.1)',
    bestFor: 'Animare foto esistenti: ritratti storici, illustrazioni, foto di famiglia. Approccio creativo e originale.',
    worstAt: 'Movimenti limitati (principalmente testa e bocca). Non adatto a video lunghi o corporate di alto livello.',
    whenToUse: 'Per progetti creativi, educativi o personali dove volete animare una foto specifica piuttosto che usare un avatar generico.',
    features: [
      'Anima qualsiasi foto (anche storiche)',
      'Free tier per provare',
      'API disponibili per sviluppatori',
      'Ideale per progetti creativi',
      'Integrazione con ChatGPT',
    ],
  },
];

const deepfakeRisks = [
  'Non create mai avatar di persone reali senza il loro consenso esplicito e documentato.',
  'In molti paesi, creare deepfake di persone senza consenso puo avere conseguenze legali: diffamazione, violazione della privacy, frode.',
  'Anche con il consenso, dichiarate sempre che il video e stato generato con AI.',
  'I datori di lavoro e i recruiter sono sempre piu attenti a individuare contenuti deepfake: non rischiate la vostra reputazione.',
];

export function AvatarSection() {
  return (
    <div className="space-y-12">
      {/* H.5.6.1 - Quando servono */}
      <div>
        <AnimatedSection className="mb-6">
          <p className="text-[var(--text-secondary)] mb-4">
            Gli avatar AI e le talking head permettono di creare video con un presentatore
            virtuale che parla e muove le labbra in sincrono con l&apos;audio.
            Non servono sempre, ma in alcuni contesti sono la soluzione migliore.
          </p>
          <div className="quote-block text-sm">
            <strong>Esempio:</strong> Un&apos;azienda deve creare un video di onboarding in 5 lingue.
            Tradizionalmente servirebbero 5 attori e 5 sessioni di registrazione. Con un avatar AI, basta
            scrivere il testo in 5 lingue: l&apos;avatar parla ogni lingua con labiale sincronizzato.
            Costo: una frazione. Tempo: poche ore invece di settimane.
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {useCases.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card p-5 h-full">
                <p className="font-semibold text-[var(--accent-primary)] mb-2">{item.title}</p>
                <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* H.5.6.2 - Le tre piattaforme principali */}
      <div>
        <AnimatedSection className="mb-6">
          <h3 className="heading-subsection mb-3">Le tre piattaforme principali</h3>
          <p className="text-[var(--text-secondary)]">
            Ogni piattaforma ha un approccio diverso. Ecco un confronto per scegliere
            quella giusta per il vostro progetto.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid lg:grid-cols-3 gap-6">
          {avatarTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    {tool.name}
                  </a>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
                    style={{ color: tool.pricingColor, backgroundColor: tool.pricingBg }}
                  >
                    {tool.pricingLabel}
                  </span>
                </div>

                {/* Pricing detail */}
                <p className="text-xs text-[var(--text-muted)] mb-4">{tool.pricingDetail}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {tool.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--accent-primary)] shrink-0">--</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Best / Worst / When */}
                <div className="mt-auto space-y-3">
                  <div className="p-3 rounded-lg bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.15)]">
                    <p className="text-xs font-semibold text-[var(--color-success)] mb-1">Punto di forza</p>
                    <p className="text-xs text-[var(--text-secondary)]">{tool.bestFor}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)]">
                    <p className="text-xs font-semibold text-[var(--color-error)] mb-1">Punto debole</p>
                    <p className="text-xs text-[var(--text-secondary)]">{tool.worstAt}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[rgba(249,115,22,0.06)] border border-[rgba(249,115,22,0.15)]">
                    <p className="text-xs font-semibold text-[var(--accent-primary)] mb-1">Quando usarlo</p>
                    <p className="text-xs text-[var(--text-secondary)]">{tool.whenToUse}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* H.5.6.3 - Confronto visivo */}
      <div>
        <AnimatedSection>
          <div className="glass-card p-6">
            <p className="font-semibold mb-4 text-center">Confronto rapido: stessa frase, tre piattaforme</p>
            <div className="glass-card p-1 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-default)]">
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Aspetto</th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Synthesia</th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">HeyGen</th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">D-ID</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: 'Lip-sync', synthesia: 'Eccellente', heygen: 'Buono', did: 'Base' },
                    { aspect: 'Movimenti corpo', synthesia: 'Naturali', heygen: 'Buoni', did: 'Solo testa' },
                    { aspect: 'Espressivita', synthesia: 'Alta', heygen: 'Media-alta', did: 'Media' },
                    { aspect: 'Personalizzazione', synthesia: 'Enterprise', heygen: 'Da foto', did: 'Qualsiasi foto' },
                    { aspect: 'Velocita generazione', synthesia: 'Media', heygen: 'Veloce', did: 'Veloce' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[var(--border-subtle)]">
                      <td className="py-3 px-4 font-medium text-[var(--accent-primary)]">{row.aspect}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.synthesia}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.heygen}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.did}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-3 text-center">
              Provate ciascuna piattaforma con lo stesso testo breve (10-15 secondi) per
              valutare voi stessi le differenze di qualita.
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* H.5.6.4 - Avvertenza etica: deepfake */}
      <div>
        <AnimatedSection>
          <div
            className="p-6 rounded-2xl"
            style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)' }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-white text-lg"
                style={{ background: 'var(--color-error)' }}
              >
                !
              </div>
              <div>
                <p className="font-bold text-[var(--color-error)] text-lg">
                  Attenzione: deepfake e responsabilita legale
                </p>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  La stessa tecnologia che crea avatar utili puo essere usata per creare
                  deepfake dannosi. Ecco le regole fondamentali da rispettare sempre.
                </p>
              </div>
            </div>

            <ul className="space-y-3 ml-13">
              {deepfakeRisks.map((risk, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-error)] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 p-4 rounded-xl bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.12)]">
              <p className="text-sm font-medium text-[var(--text-primary)]">
                Regola d&apos;oro: se non vorreste che qualcuno creasse un vostro deepfake senza permesso,
                non fatelo voi ad altri.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
