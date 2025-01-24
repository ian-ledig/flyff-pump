import Head from 'next/head';
import Image from 'next/image';
import NavigationBarComponent from './components/navigation-bar/navigation-bar';
import RandomTextComponent from './components/random-text/random-text';
import InkImageComponent from './components/ink-image/ink-image';
import CollaborationComponent from './components/collaboration/collaboration';
import MapComponent from './components/map/map';
import ContactComponent from './components/contact/contact';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { EmblaOptionsType } from 'embla-carousel';
import './home.css';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <Head>
        <title>Pacito2&apos;s Flyff Maps</title>
        <meta name="description" content="Showcasing my Flyff Maps for sale." />
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
                <div className="subtitle-3 mb-3 font-regular">France</div>
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
            <MapComponent 
              name="Dungeon Jungle Temple" 
              description='A jungle-temple dungeon map with lush vegetation and ancient ruins, designed for up to 6 boss.' 
              price={150} 
              count={0} 
              maxCount={3} 
              slides={SLIDES} 
              options={OPTIONS} 
            />
            <MapComponent 
              name="Dungeon Jungle Temple" 
              description='A jungle-temple dungeon map with lush vegetation and ancient ruins, designed for up to 6 boss.' 
              price={150} 
              count={0} 
              maxCount={3} 
              slides={SLIDES} 
              options={OPTIONS} 
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
            <div className="text-end opacity-80">Copyright © 2025 Pacito2</div>
          </div>
        </footer>
      </main>
    </>
  );
}
