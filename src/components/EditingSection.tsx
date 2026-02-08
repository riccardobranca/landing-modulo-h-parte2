'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface EditingTool {
  id: string;
  title: string;
  description: string;
  tools: string[];
  whenToUse: string;
  icon: React.ReactNode;
}

const editingTools: EditingTool[] = [
  {
    id: 'bg-removal',
    title: 'Rimozione sfondo',
    description:
      'Isola il soggetto rimuovendo automaticamente lo sfondo. Funziona con foto di persone, prodotti e oggetti. Risultati professionali in pochi secondi.',
    tools: ['remove.bg', 'Canva Background Remover', 'PhotoRoom'],
    whenToUse:
      'Foto prodotto per e-commerce, immagini profilo, composizioni grafiche, presentazioni.',
    icon: <BgRemovalIcon />,
  },
  {
    id: 'inpainting',
    title: 'Inpainting',
    description:
      'Modifica porzioni specifiche di un\'immagine selezionando l\'area da cambiare. Rimuovi oggetti indesiderati, cambia colori, correggi difetti o aggiungi elementi.',
    tools: ['cleanup.pictures', 'Adobe Firefly', 'ChatGPT (DALL-E)'],
    whenToUse:
      'Rimuovere oggetti, cambiare colori di vestiti o arredi, correggere foto danneggiate, sostituire elementi.',
    icon: <InpaintingIcon />,
  },
  {
    id: 'outpainting',
    title: 'Outpainting',
    description:
      'Espande l\'immagine oltre i bordi originali, generando contenuto coerente con la scena esistente. L\'AI "immagina" cosa c\'e fuori dall\'inquadratura.',
    tools: ['ChatGPT', 'Canva Magic Expand', 'Adobe Firefly'],
    whenToUse:
      'Cambiare formato (da verticale a orizzontale), aggiungere spazio per testo, adattare immagini a layout diversi.',
    icon: <OutpaintingIcon />,
  },
  {
    id: 'upscaling',
    title: 'Upscaling',
    description:
      'Aumenta la risoluzione di un\'immagine mantenendo (o migliorando) la nitidezza. L\'AI ricostruisce i dettagli mancanti nei pixel aggiunti.',
    tools: ['Upscayl (gratuito, open source, locale)', 'Topaz Gigapixel AI', 'Krea Enhancer'],
    whenToUse:
      'Foto piccole da stampare in grande formato, vecchie foto a bassa risoluzione, immagini da web da usare in stampa.',
    icon: <UpscalingIcon />,
  },
  {
    id: 'style-transfer',
    title: 'Style Transfer',
    description:
      'Applica lo stile visivo di un\'immagine o di un artista a un\'altra foto. Trasforma una foto ordinaria in un\'opera con l\'estetica desiderata.',
    tools: ['ChatGPT (GPT-4o)', 'Canva Magic Design', 'DeepArt'],
    whenToUse:
      'Creare varianti artistiche di foto reali, uniformare lo stile di un set di immagini, sperimentare estetiche diverse.',
    icon: <StyleTransferIcon />,
  },
];

/* ------------------------------------------------------------------ */
/*  Icons (SVG, no emoji)                                              */
/* ------------------------------------------------------------------ */

function BgRemovalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Person silhouette */}
      <circle cx="12" cy="8" r="3" />
      <path d="M6 21v-2a6 6 0 0112 0v2" />
      {/* Dashed background rectangle */}
      <rect x="1" y="1" width="22" height="22" rx="3" strokeDasharray="4 3" opacity="0.4" />
      {/* Scissors / cut line */}
      <line x1="1" y1="1" x2="5" y2="5" opacity="0.6" />
    </svg>
  );
}

function InpaintingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Paintbrush */}
      <path d="M18.37 2.63a2.12 2.12 0 013 3L14 13l-4 1 1-4z" />
      {/* Selection area */}
      <rect x="3" y="13" width="8" height="8" rx="1" strokeDasharray="3 2" opacity="0.5" />
      {/* Frame */}
      <path d="M3 7V3h4" opacity="0.4" />
      <path d="M21 7V3h-4" opacity="0.4" />
    </svg>
  );
}

function OutpaintingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Inner frame (original image) */}
      <rect x="6" y="6" width="12" height="12" rx="1" />
      {/* Expansion arrows */}
      <polyline points="3,6 3,3 6,3" />
      <polyline points="18,3 21,3 21,6" />
      <polyline points="21,18 21,21 18,21" />
      <polyline points="6,21 3,21 3,18" />
      {/* Arrow lines outward */}
      <line x1="6" y1="6" x2="3" y2="3" />
      <line x1="18" y1="6" x2="21" y2="3" />
      <line x1="18" y1="18" x2="21" y2="21" />
      <line x1="6" y1="18" x2="3" y2="21" />
    </svg>
  );
}

function UpscalingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Small image */}
      <rect x="2" y="10" width="8" height="8" rx="1" opacity="0.5" />
      {/* Large image */}
      <rect x="8" y="2" width="14" height="14" rx="2" />
      {/* Arrow from small to large */}
      <line x1="6" y1="10" x2="12" y2="4" />
      <polyline points="8,4 12,4 12,8" />
      {/* Resolution dots inside large */}
      <circle cx="12" cy="8" r="0.5" fill="currentColor" />
      <circle cx="15" cy="8" r="0.5" fill="currentColor" />
      <circle cx="18" cy="8" r="0.5" fill="currentColor" />
      <circle cx="12" cy="11" r="0.5" fill="currentColor" />
      <circle cx="15" cy="11" r="0.5" fill="currentColor" />
      <circle cx="18" cy="11" r="0.5" fill="currentColor" />
    </svg>
  );
}

function StyleTransferIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Palette / layers */}
      <rect x="2" y="4" width="10" height="10" rx="2" />
      <rect x="12" y="10" width="10" height="10" rx="2" />
      {/* Arrow transferring style */}
      <path d="M12 9l3-3" />
      <polyline points="12,6 15,6 15,9" />
      {/* Wavy style lines */}
      <path d="M4 8c1-1 2 1 3 0s2 1 3 0" opacity="0.5" />
      <path d="M14 14c1-1 2 1 3 0s2 1 3 0" opacity="0.5" />
    </svg>
  );
}

function ToolBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-md text-xs font-medium"
      style={{
        background: 'var(--bg-elevated)',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      {name}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function EditingSection() {
  return (
    <AnimatedSection>
      <div className="space-y-10">
        {/* Section heading */}
        <div className="text-center space-y-3">
          <h2
            className="heading-subsection"
            style={{ color: 'var(--text-primary)' }}
          >
            Editing con AI: oltre la generazione
          </h2>
          <p
            className="body-large"
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '44rem',
              margin: '0 auto',
            }}
          >
            L&apos;AI non serve solo a creare immagini da zero. Questi strumenti
            permettono di modificare, migliorare e trasformare foto esistenti
            con risultati professionali.
          </p>
        </div>

        {/* Tool cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editingTools.map((tool) => (
            <StaggerItem key={tool.id}>
              <div className="glass-card p-6 h-full flex flex-col gap-4">
                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(249, 115, 22, 0.08)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(249, 115, 22, 0.15)',
                    }}
                  >
                    {tool.icon}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tool.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {tool.description}
                </p>

                {/* Recommended tools */}
                <div className="space-y-2">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Strumenti consigliati
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tools.map((t) => (
                      <ToolBadge key={t} name={t} />
                    ))}
                  </div>
                </div>

                {/* When to use */}
                <div
                  className="rounded-lg p-3 space-y-1"
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <p
                    className="text-xs font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Quando usarlo
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {tool.whenToUse}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Summary callout */}
        <AnimatedSection delay={0.2}>
          <div className="success-card max-w-3xl mx-auto flex gap-4 items-start">
            <span
              className="shrink-0 mt-0.5"
              style={{ color: 'var(--color-success)' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </span>
            <div className="space-y-1">
              <p
                className="font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Consiglio pratico
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Non serve imparare tutti gli strumenti: parti da
                quello che ti serve di piu. Per la maggior parte degli
                usi,{' '}
                <strong style={{ color: 'var(--text-primary)' }}>
                  ChatGPT
                </strong>{' '}
                copre gia inpainting, outpainting e style transfer.
                Aggiungi{' '}
                <strong style={{ color: 'var(--text-primary)' }}>
                  remove.bg
                </strong>{' '}
                per lo sfondo e{' '}
                <strong style={{ color: 'var(--text-primary)' }}>
                  Upscayl
                </strong>{' '}
                per la risoluzione, e hai un kit completo e gratuito.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
