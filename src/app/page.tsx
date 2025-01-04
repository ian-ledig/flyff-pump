import Head from 'next/head';
import Image from 'next/image';
import NavigationBarComponent from './components/navigation-bar/navigation-bar';
import RandomTextComponent from './components/random-text/random-text';
import InkImageComponent from './components/ink-image/ink-image';
import CollaborationComponent from './components/collaboration/collaboration';
import ProjectCardComponent from './components/project-card/project-card';
import ContactComponent from './components/contact/contact';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './home.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacito2&apos;s Flyff Maps</title>
        <meta
          name="description"
          content="Showcasing my Flyff Maps for sale."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <NavigationBarComponent />
        <div className="random-text title-1 font-black">
          <RandomTextComponent />
        </div>
      </header>
      <main className="body" id="home">
        <section className="home" aria-labelledby="home-title">
          <div className="home-picture">
            <InkImageComponent src="/picture0.webp" alt="Sakurajima picture" />
          </div>
          <aside className="profile-card">
            <div className="profile-card-picture">
              <Image
                src="/profile.webp"
                alt="Pacito2 profile picture"
                width={300}
                height={0}
                priority
              />
            </div>
            <div className="profile-card-bio">
              <div className="title-1 font-black">Pacito2</div>
              <div className="subtitle-1 info-text font-regular">
                Flyff Map Maker
              </div>
              <div className="flex items-center info-text justify-center">
                <FaMapMarkerAlt
                  size={12}
                  className="mb-3.5 mr-1"
                  style={{ color: 'var(--secondary)' }}
                />
                <div className="subtitle-3 mb-3 font-regular">
                  France
                </div>
              </div>
            </div>
          </aside>
        </section>
        <section id="collaboration" aria-labelledby="collaboration-title">
          <h2 className="title title-1 font-black">They trusted me_</h2>
          <CollaborationComponent />
          <div className="title-2 text-center font-thin mt-3 mb-20">
            Will you be next?
          </div>
        </section>
        <section id="map" aria-labelledby="maps-title">
          <h2 className="title title-1 font-black">Maps_</h2>
          <div className="map">
            <ProjectCardComponent
              src="/project/airfrance.webp"
              title="Airport Flight Consultation"
              description="Development of a flight, passenger, baggage consultation application for airport agents. Including architecture, development, testing, deployment and production release on the cloud."
              technologies={['Angular', 'Java', 'Spring', 'SQL', 'Azure']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/moncompteretraite.webp"
              title="French Retirement Application"
              description="Development of “Mon Compte Retraite” mobile application for iOS and Android, ensured communication security, production monitoring and designed batch processes."
              technologies={['Angular', 'Ionic', 'Java', 'Spring', 'SQL']}
              links={[
                {
                  href: 'https://play.google.com/store/apps/details?id=fr.agircarrco.smartretraite',
                  image: '/project/icon/android.webp',
                },
                {
                  href: 'https://apps.apple.com/fr/app/mon-compte-retraite/id1176066236',
                  image: '/project/icon/apple.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/cawe.webp"
              title="CAWE Stock Traceability"
              description="Development of a stock traceability mobile application for Android platforms."
              technologies={['C#', 'Xamarin', 'SQL']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/kanjitest.webp"
              title="日本語 Vocabulary Test"
              description="Interactive app designed to help users to learn and memorize Japanese vocabulary."
              technologies={['Electron', 'JavaScript']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/kanji-test',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/dynamx.webp"
              title="3D Model converter"
              description="Contains two programs that allow converting Toolbox .java models designed for Minecraft Flan's mod to work with the DynamX mod."
              technologies={['Python', 'Java']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/FlanToDynamX',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/portfoliopump.webp"
              title="Pump Portfolio"
              description="Portfolio website to showcase my skills and projects."
              technologies={['React', 'Next.js']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/portfolio-pump',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/alysiaonline.webp"
              title="Alysia Online MMORPG"
              description="Modernizing a older open-source multiplayer game by incorporating current industry gameplay standards, mechanics and optimized the codebase to align with contemporary user expectations and performance benchmarks."
              technologies={['C++', 'SQL']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/grooveai.webp"
              title="Groove AI Music recognizer"
              description="Development of a music theme recognition application using AI and machine learning."
              technologies={['Python']}
              links={[]}
            />
            <ProjectCardComponent
              src="/project/inforetraite.webp"
              title="Info Retraite Website"
              description="Improving and monitoring of the Info Retraite website, including the development of new features and the correction of bugs."
              technologies={['Angular', 'Java', 'Spring', 'SQL']}
              links={[
                {
                  href: 'https://info-retraite.fr/',
                  image: '/project/icon/link.webp',
                },
              ]}
            />
            <ProjectCardComponent
              src="/project/archeroes.webp"
              title="Serious Archeology Game"
              description="Archeroes is a serious game designed to introduce players to the basics and principles of archaeology."
              technologies={['Java', 'JavaFX']}
              links={[
                {
                  href: 'https://github.com/ian-ledig/ekip-serious-game-archeros',
                  image: '/project/icon/github.webp',
                },
              ]}
            />
          </div>
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <ContactComponent />
        </section>
        <footer className="footer">
          <div className="footer-detail">
            <div className="footer-detail-item">
              <Image
                className="logo object-contain self-start"
                src="/logofull.webp"
                alt="Ian LEDIG logo"
                loading="lazy"
                width={100}
                height={0}
              />
            </div>
            <div className="footer-detail-item">
              <div className="footer-detail-item-column">
                <div className="font-heavy">Social</div>
                <a href="#discord" className="font-regular">
                  Discord
                </a>
                <a
                  href="mailto:maxthibpamahopa@gmail.com"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Email
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Navigation</div>
                <a href="#home" className="font-regular">
                  Home
                </a>
                <a href="#collaboration" className="font-regular">
                  About
                </a>
                <a href="#map" className="font-regular">
                  Maps
                </a>
                <a href="#contact" className="font-regular">
                  Contact
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Usage</div>
                <a
                  href="https://github.com/ian-ledig/flyff-pump/blob/master/LICENSE"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  MIT
                </a>
              </div>
              <div className="footer-detail-item-column">
                <div className="font-heavy">Other</div>
                <a
                  href="https://github.com/ian-ledig/flyff-pump"
                  target="_blank"
                  className="font-regular"
                  rel="noreferrer"
                >
                  Project source
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="separator mb-3"></div>
            <div className="text-end opacity-80">
              Copyright © 2025 Pacito2
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
