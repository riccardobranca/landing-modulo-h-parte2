'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface VideoTool {
  name: string;
  description: string;
  access: string;
  accessColor: string;
  bestFor: string;
  badge?: string;
}

const videoTools: VideoTool[] = [
  {
    name: 'Runway Gen-4.5',
    description: 'Il numero 1 nei benchmark. Qualita cinematografica, fisica realistica, ottima character consistency.',
    access: 'Freemium (125 crediti)',
    accessColor: 'var(--color-success)',
    bestFor: 'Progetti dove la qualita conta, motion design',
  },
  {
    name: 'Kling 3.0',
    description: 'Molto popolare per il rapporto qualita/prezzo. Video fino a 15 secondi, multi-shot editing (fino a 6 tagli), audio nativo sincronizzato.',
    access: 'Freemium (66 crediti/giorno)',
    accessColor: 'var(--color-success)',
    bestFor: 'Controllo preciso (Motion Brush), budget limitato',
    badge: 'NEW',
  },
  {
    name: 'Pika 2.2',
    description: 'Specializzato in effetti creativi e virali: "melt", "explode", "crush", "cake-ify". Interfaccia semplice.',
    access: 'Freemium (150 crediti)',
    accessColor: 'var(--color-success)',
    bestFor: 'Contenuti social, effetti virali divertenti',
  },
  {
    name: 'Luma Ray2',
    description: 'Veloce e fotorealistico, buono per iterare rapidamente. Movimenti camera realistici e fisica naturale.',
    access: 'Freemium (30 video/mese)',
    accessColor: 'var(--color-success)',
    bestFor: 'Prototipazione rapida, scene naturali',
  },
  {
    name: 'Hailuo / MiniMax',
    description: 'Buona qualita con piano gratuito generoso. Generazione rapida, API disponibile per sviluppatori.',
    access: 'Freemium (generoso)',
    accessColor: 'var(--color-success)',
    bestFor: 'Provare senza spendere, prototipazione',
  },
  {
    name: 'Higgsfield DoP',
    description: 'Specializzato in movimenti camera cinematografici. Oltre 50 preset (dolly, crane, bullet time, drone shot).',
    access: 'Freemium / Pro',
    accessColor: 'var(--color-success)',
    bestFor: 'Animare foto con movimenti camera professionali',
  },
];

interface VeoAvailability {
  platform: string;
  access: string;
  cost: string;
}

const veoAvailability: VeoAvailability[] = [
  { platform: 'Gemini (AI Pro)', access: 'Abbonamento', cost: '$19.99/mese (~50 video/mese)' },
  { platform: 'Gemini (AI Ultra)', access: 'Abbonamento', cost: '$249.99/mese (~250 video/mese)' },
  { platform: 'Google Flow', access: 'Incluso in AI Pro/Ultra', cost: 'Suite filmmaking completa' },
  { platform: 'Canva', access: 'Canva Pro', cost: 'Incluso nel piano, clip 4 sec' },
  { platform: 'Krea', access: 'Crediti', cost: 'Pay-per-use, multi-modello' },
  { platform: 'Google AI Studio', access: 'API', cost: '$0.15-0.40/secondo' },
];

interface CameraMovement {
  name: string;
  description: string;
  whenToUse: string;
}

const cameraMovements: CameraMovement[] = [
  {
    name: 'Pan',
    description: 'Rotazione orizzontale della camera su asse fisso (sinistra/destra).',
    whenToUse: 'Rivelare un ambiente ampio, seguire un soggetto in movimento orizzontale.',
  },
  {
    name: 'Tilt',
    description: 'Rotazione verticale della camera su asse fisso (alto/basso).',
    whenToUse: 'Rivelare l\'altezza di un edificio, passare dal dettaglio al contesto.',
  },
  {
    name: 'Zoom',
    description: 'Avvicinamento o allontanamento ottico senza muovere la camera.',
    whenToUse: 'Focalizzare l\'attenzione su un dettaglio, creare tensione.',
  },
  {
    name: 'Dolly',
    description: 'Movimento fisico della camera avanti o indietro.',
    whenToUse: 'Entrare in una scena, creare profondita e immersione.',
  },
  {
    name: 'Tracking',
    description: 'La camera si muove lateralmente seguendo il soggetto.',
    whenToUse: 'Seguire un personaggio che cammina, scene dinamiche.',
  },
  {
    name: 'Drone',
    description: 'Ripresa aerea con movimento libero nello spazio tridimensionale.',
    whenToUse: 'Viste panoramiche, transizioni tra ambienti, aperture epiche.',
  },
  {
    name: 'Static',
    description: 'Camera completamente ferma, come un treppiede.',
    whenToUse: 'Dialoghi, interviste, scene contemplative.',
  },
];

const motionPresets = [
  { name: 'Pan Left', video: '/modulo-h/video/motion-pan-left.mp4' },
  { name: 'Tilt Up', video: '/modulo-h/video/motion-tilt-up.mp4' },
  { name: 'Zoom In', video: '/modulo-h/video/motion-zoom-in.mp4' },
  { name: 'Dolly In', video: '/modulo-h/video/motion-dolly-in.mp4' },
  { name: 'Drone', video: '/modulo-h/video/motion-drone.mp4' },
];

const useCasesGood = [
  'Teaser e hook (3-10 secondi) per social media',
  'Animazione di immagini con movimento sottile',
  'Effetti speciali semplici e creativi',
  'Mockup e concept per presentazioni',
  'Contenuti virali per TikTok/Reels',
];

const useCasesHard = [
  'Video aziendali completi oltre 60 secondi — possibile con Veo 3, ma richiede editing e assemblaggio',
  'Tutorial dettagliati con azioni precise — l\'AI fatica con la coerenza di gesti specifici',
  'Sostituzione completa della produzione video — per progetti articolati serve ancora un videomaker, ma l\'AI accelera pre-produzione e mockup',
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function TextToVideoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 8h4" />
      <path d="M7 12h6" />
      <path d="M7 16h2" />
      <polygon points="15,10 19,13 15,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ImageToVideoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <circle cx="8" cy="10" r="2" />
      <path d="M2 16l5-5 3 3 4-4 8 8" />
      <polygon points="16,8 20,11 16,14" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VideoSection() {
  return (
    <div className="space-y-12">
      {/* -------------------------------------------------------- */}
      {/*  1. Text-to-Video vs Image-to-Video                       */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Text-to-Video */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span style={{ color: 'var(--accent-primary)' }}>
                <TextToVideoIcon />
              </span>
              <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                Text-to-Video
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Descrivete una scena a parole, l&apos;AI genera un video da zero.
              Massima liberta creativa, ma meno controllo sul risultato esatto.
            </p>
            <div className="code-block text-xs" style={{ padding: '0.75rem 1rem' }}>
              &quot;A golden retriever running on a beach at sunset, slow motion, cinematic&quot;
            </div>
          </div>

          {/* Image-to-Video */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span style={{ color: 'var(--accent-primary)' }}>
                <ImageToVideoIcon />
              </span>
              <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                Image-to-Video
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Caricate un&apos;immagine (generata o reale), l&apos;AI la &quot;anima&quot;
              aggiungendo movimento. Piu controllabile perche partite da un&apos;immagine approvata.
            </p>
            <div className="code-block text-xs" style={{ padding: '0.75rem 1rem' }}>
              Immagine di partenza + &quot;gentle camera pan left, soft wind blowing hair&quot;
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              I video devono mantenere <strong>coerenza temporale</strong>: un oggetto non puo
              teletrasportarsi o cambiare forma da un frame all&apos;altro.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  2. Tool grid                                              */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.15}>
        <h3
          className="heading-subsection text-center mb-6"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
        >
          Strumenti accessibili dall&apos;Italia
        </h3>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="glass-card p-5 h-full flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {tool.name}
                  </h4>
                  {tool.badge && (
                    <span
                      className="shrink-0 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide"
                      style={{ background: 'var(--accent-primary)', color: '#fff' }}
                    >
                      {tool.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {tool.description}
                </p>

                {/* Access badge */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: tool.accessColor }}
                  />
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {tool.access}
                  </span>
                </div>

                {/* Best for */}
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    Ideale per:{' '}
                  </span>
                  {tool.bestFor}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  3. Sora + Veo box                                         */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-4xl mx-auto space-y-6">
          <h3
            className="heading-subsection text-center"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            Accesso variabile: Sora e Veo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sora */}
            <div
              className="glass-card p-5 space-y-3"
              style={{ borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.03)' }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--color-error)' }}>
                  <AlertIcon />
                </span>
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Sora (OpenAI)
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                La situazione e complessa. <strong>Sora Turbo</strong> e disponibile
                in EU da febbraio 2025 (versione piu veloce, qualita leggermente
                inferiore). <strong>Sora 2</strong> (la versione avanzata con video
                fino a 25 secondi e audio nativo) e <strong>bloccata in EU</strong> per
                questioni regolatorie.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)', border: '1px solid rgba(34, 197, 94, 0.25)' }}
                >
                  Sora Turbo: disponibile
                </span>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-error)', border: '1px solid rgba(239, 68, 68, 0.25)' }}
                >
                  Sora 2: bloccato in EU
                </span>
              </div>
            </div>

            {/* Veo 3 */}
            <div
              className="glass-card p-5 space-y-3"
              style={{ borderColor: 'rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.03)' }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: 'var(--color-success)' }}>
                  <PlayIcon />
                </span>
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Veo 3 / 3.1 (Google)
                </h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Disponibile in EU. Video fino a 60 secondi con audio nativo
                (dialoghi, musica, effetti sonori generati insieme al video).
                Qualita cinematografica accessibile su diverse piattaforme.
              </p>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-success)', border: '1px solid rgba(34, 197, 94, 0.25)' }}
              >
                Disponibile in EU
              </span>
            </div>
          </div>

          {/* Veo availability table */}
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
              <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Dove trovare Veo 3
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--bg-elevated)' }}>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Piattaforma
                    </th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Tipo di accesso
                    </th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Costo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {veoAvailability.map((row, i) => (
                    <tr
                      key={row.platform}
                      style={{
                        borderTop: '1px solid var(--border-subtle)',
                        background: i % 2 === 1 ? 'var(--bg-elevated)' : 'transparent',
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>
                        {row.platform}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>
                        {row.access}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                        {row.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Google Flow highlight */}
          <div className="glass-card p-5 space-y-3" style={{ borderLeft: '4px solid var(--accent-primary)' }}>
            <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
              Google Flow — Suite di filmmaking
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Non e solo &quot;Veo in un&apos;interfaccia diversa&quot; — e una suite completa per creare video:
            </p>
            <ul className="space-y-1.5">
              {[
                'Storyboard visivo: pianificate le scene prima di generarle',
                'Multi-shot editing: combinate piu clip con transizioni',
                'Ingredienti: caricate immagini di riferimento, personaggi, stili',
                'Audio nativo: dialoghi, musica, effetti sonori generati insieme al video',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-primary)] shrink-0">--</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Disponibile per abbonati Google AI Pro/Ultra. Gemini per generazione rapida,
              Flow per progetti video strutturati, Canva per video brevi integrati in design.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  4. Casi d'uso realistici (H.5.4)                         */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.22}>
        <div className="max-w-4xl mx-auto">
          <h3
            className="heading-subsection text-center mb-6"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            Casi d&apos;uso realistici oggi
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sensati oggi */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
            >
              <p className="font-bold text-[var(--color-success)] mb-4 text-lg">
                Funziona bene oggi
              </p>
              <ul className="space-y-2.5">
                {useCasesGood.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--color-success)] shrink-0 font-bold">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ancora difficile */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.06)', border: '1px solid rgba(249, 115, 22, 0.2)' }}
            >
              <p className="font-bold text-[var(--accent-primary)] mb-4 text-lg">
                Ancora difficile
              </p>
              <ul className="space-y-2.5">
                {useCasesHard.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent-primary)] shrink-0 font-bold">~</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  5. Camera movements glossary                              */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.25}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span style={{ color: 'var(--accent-primary)' }}>
                <CameraIcon />
              </span>
              <h3
                className="heading-subsection"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
              >
                Glossario movimenti camera
              </h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Usate questi termini nei prompt per controllare il movimento nei video generati.
            </p>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'var(--bg-elevated)' }}>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)', minWidth: '100px' }}>
                      Movimento
                    </th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      Descrizione
                    </th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: 'var(--text-secondary)', minWidth: '200px' }}>
                      Quando usarlo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cameraMovements.map((cm, i) => (
                    <tr
                      key={cm.name}
                      style={{
                        borderTop: '1px solid var(--border-subtle)',
                        background: i % 2 === 1 ? 'var(--bg-elevated)' : 'transparent',
                      }}
                    >
                      <td className="px-4 py-3">
                        <span className="font-mono font-semibold" style={{ color: 'var(--accent-primary)' }}>
                          {cm.name}
                        </span>
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-secondary)' }}>
                        {cm.description}
                      </td>
                      <td className="px-4 py-3" style={{ color: 'var(--text-muted)' }}>
                        {cm.whenToUse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  6. Video examples placeholder                             */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.3}>
        <div className="max-w-4xl mx-auto space-y-6">
          <h3
            className="heading-subsection text-center"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            Esempio: da immagine a video con movimenti camera
          </h3>

          <div className="glass-card overflow-hidden">
            {/* Source image */}
            <div className="relative" style={{ background: 'var(--bg-elevated)' }}>
              <img
                src="/modulo-h/video/video-base-landscape.png"
                alt="Immagine paesaggio di partenza per la generazione video"
                className="w-full h-auto max-h-80 object-cover"
                loading="lazy"
              />
              <span
                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{ background: 'rgba(0,0,0,0.7)', color: '#fff' }}
              >
                Immagine di partenza
              </span>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Da questa immagine, con i motion preset di Higgsfield DoP, si
                generano video con diversi movimenti camera. Ogni preset
                applica una traiettoria diversa mantenendo lo stesso punto di partenza.
              </p>

              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {motionPresets.map((preset) => (
                  <StaggerItem key={preset.name}>
                    <div
                      className="rounded-xl overflow-hidden"
                      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
                    >
                      <video
                        src={preset.video}
                        className="w-full aspect-video object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="px-3 py-2 text-center" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                        <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {preset.name}
                        </span>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                Video generati con Kling 2.1 da un&apos;unica immagine di partenza, variando solo il movimento camera.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Availability note */}
      <AnimatedSection delay={0.35}>
        <div className="max-w-3xl mx-auto">
          <div className="warning-card">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <strong>Nota importante:</strong> La disponibilita di questi strumenti cambia frequentemente.
              Verificate sempre lo stato attuale prima di pianificare un progetto. I prezzi e le
              funzionalita indicati sono aggiornati a febbraio 2026.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
