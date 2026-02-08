import { AnimatedSection } from '@/components/AnimatedSection';
import EditingSection from '@/components/EditingSection';
import VideoSection from '@/components/VideoSection';
import { AvatarSection } from '@/components/AvatarSection';
import { EthicsSection } from '@/components/EthicsSection';
import { ProfileWorkflow } from '@/components/ProfileWorkflow';

export default function ModuloHParte2() {
  return (
    <main className="gradient-mesh min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-4">MODULO H — PARTE 2</p>
            <h1 className="heading-hero mb-6">
              Editing, <span className="text-gradient">Video</span> e Etica
            </h1>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              Modificare immagini con AI, generare video, creare avatar parlanti,
              gestire copyright e trasparenza, e migliorare la vostra foto profilo LinkedIn.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="quote-block">
              <strong>TL;DR</strong> — L&apos;AI non serve solo a generare immagini da zero:
              rimuovete sfondi, espandete inquadrature, aumentate la risoluzione. Per i video,
              Kling 3.0 e Veo 3 sono oggi utilizzabili per clip professionali brevi. Gli avatar
              AI (Synthesia, HeyGen) creano video formativi in decine di lingue. Dichiarate sempre
              quando un contenuto e AI-generated. Per la foto profilo LinkedIn: migliorate la
              vostra foto reale, non generatene una falsa.
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider max-w-xl my-12" />

      {/* H.4 - Editing e manipolazione */}
      <section id="editing" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">H.4</p>
            <h2 className="heading-section mb-4">Editing con AI: oltre la generazione</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              L&apos;AI non serve solo a creare immagini da zero. Questi strumenti
              permettono di modificare, migliorare e trasformare foto esistenti
              con risultati professionali.
            </p>
          </AnimatedSection>

          <EditingSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* H.5 - Video AI */}
      <section id="video" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">H.5</p>
            <h2 className="heading-section mb-4">Video AI: dal testo al movimento</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Generare video con l&apos;AI e oggi accessibile a tutti. Due approcci
              principali, decine di strumenti, e possibilita che fino a un anno fa
              sembravano fantascienza.
            </p>
          </AnimatedSection>

          <VideoSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* H.5.6 - Avatar e Talking Head */}
      <section id="avatar" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">H.5.6</p>
            <h2 className="heading-section mb-4">Avatar AI e Talking Head</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Una categoria speciale di video AI: persone virtuali che parlano
              con lip-sync naturale. Applicazioni concrete nel training aziendale,
              contenuti multilingua e comunicazione.
            </p>
          </AnimatedSection>

          <AvatarSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* H.6 - Etica e copyright */}
      <section id="etica" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">H.6</p>
            <h2 className="heading-section mb-4">Etica, copyright e trasparenza</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              L&apos;AI generativa per immagini e video solleva questioni importanti.
              Vediamo le regole pratiche per usarla in modo responsabile.
            </p>
          </AnimatedSection>

          <EthicsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* H.7 - Esercizio: Foto profilo */}
      <section id="esercizio" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">H.7 — ESERCIZIO</p>
            <h2 className="heading-section mb-4">Foto profilo professionale</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              L&apos;esercizio principale del modulo: trasformare una vostra foto
              in una foto profilo LinkedIn professionale, usando solo strumenti
              gratuiti e la vostra foto reale.
            </p>
          </AnimatedSection>

          <ProfileWorkflow />
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-6">Per approfondire</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Editing immagini</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://remove.bg" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      remove.bg
                    </a>{' '}
                    — Rimozione sfondi, gratuito
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://cleanup.pictures" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      cleanup.pictures
                    </a>{' '}
                    — Pulizia foto, inpainting
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Canva
                    </a>{' '}
                    — Design e composizione
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://upscayl.org" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Upscayl
                    </a>{' '}
                    — Upscaling gratuito, desktop
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--color-success)]">Video AI</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://runwayml.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Runway
                    </a>{' '}
                    — Il piu professionale
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://klingai.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Kling
                    </a>{' '}
                    — Ottimo free tier, Motion Brush
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://pika.art" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Pika
                    </a>{' '}
                    — Semplice, effetti virali
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://flow.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Google Flow
                    </a>{' '}
                    — Suite filmmaking con Veo 3
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--text-primary)]">Avatar / Talking Head</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://heygen.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      HeyGen
                    </a>{' '}
                    — Buon rapporto qualita/prezzo
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://synthesia.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Synthesia
                    </a>{' '}
                    — Leader corporate
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://d-id.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      D-ID
                    </a>{' '}
                    — Anima foto esistenti
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--color-warning)]">Etica e copyright</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://contentcredentials.org" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Content Credentials
                    </a>{' '}
                    — Verifica provenienza immagini
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://firefly.adobe.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Adobe Firefly
                    </a>{' '}
                    — Addestrato su immagini con licenza
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://remove.bg" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      remove.bg
                    </a>{' '}
                    — Per l&apos;esercizio foto profilo
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">Fine Modulo H — Parte 2</p>
          <p className="text-[var(--text-secondary)]">
            Prossimo modulo: <strong>I — Excel e dati con l&apos;AI</strong>
          </p>
        </div>
      </footer>
    </main>
  );
}
