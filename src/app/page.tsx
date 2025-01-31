import Head from 'next/head';
import Image from 'next/image';
import NavigationBarComponent from './components/navigation-bar/navigation-bar';
import CollaborationComponent from './components/collaboration/collaboration';
import MapComponent from './components/map/map';
import FaqCardComponent from './components/faq-card/faq-card';
import ContactComponent from './components/contact/contact';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { EmblaOptionsType } from 'embla-carousel';
import './home.css';

const OPTIONS: EmblaOptionsType = { loop: true };

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
      </header>
      <main className="body" id="home">
        <section className="home" aria-labelledby="home-title">
          <div className="home-filter"></div>
          <iframe
            className="home-preview absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/4-5Bgf-dQew?autoplay=1&mute=1&loop=1&playlist=4-5Bgf-dQew&controls=0&showinfo=0&modestbranding=1&vq=hd1080"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          <aside className="home-content">
            <div className="font-thin">
              I&rsquo;m Pacito2, I have been creating maps for the Flyff game
              for over 10 years. I started with Beast software and now I&rsquo;m
              using my own version of the WorldEditor software. I use many self
              import assets to enhance my creations and offer a better version
              of Flyff game.
            </div>
            <div className="font-thin">
              <Image
                className="logo object-contain self-start"
                src="/logo.webp"
                alt="Logo"
                loading="lazy"
                width={80}
                height={0}
              />
            </div>
          </aside>
        </section>
        <section id="collaboration" aria-labelledby="collaboration-title">
          <h2 className="title title-1 font-black">They trusted me_</h2>
          <CollaborationComponent
            slides={Array.from(Array(5).keys())}
            options={OPTIONS}
          />
          <div className="title-2 text-center font-thin mt-3 mb-20">
            Will you be next?
          </div>
        </section>
        <section id="map" aria-labelledby="maps-title">
          <h2 className="title title-1 font-black">Maps_</h2>
          <div className="map">
            <MapComponent
              prefix="rocreen"
              name="Dungeon Jungle Temple"
              description="A jungle-temple dungeon map with lush vegetation and ancient ruins, designed for 3 to 6 bosses."
              price={150}
              count={0}
              maxCount={3}
              slides={Array.from(Array(12).keys())}
              videos={['99zfiyq0Qh0']}
              options={OPTIONS}
            />
          </div>
        </section>
        <section id="faq" aria-labelledby="faq-title">
          <h2 className="title title-1 font-black">FAQ</h2>
          <div className="faq">
            <FaqCardComponent
              question="How can I purchase?"
              answer="You can access the contact section of this website to get in touch with me and proceed with the purchase."
            />
            <FaqCardComponent
              question="Can I get the exclusivity of a map?"
              answer="You can get the exclusivity of a map by purchasing it twice, if no one already paid for it."
            />
            <FaqCardComponent
              question="Can I get a special price?"
              answer="Sorry, but no. The price is the same for everyone to ensure fairness."
            />
            <FaqCardComponent
              question="Can I ask for a custom order?"
              answer="Of course! However, if you don&rsquo;t pay for exclusivity, the map will also be available for sale on this website."
            />
            <FaqCardComponent
              question="How many customers can buy a map?"
              answer="The number of times each map is sold is displayed above it. A single map cannot be sold more than three times."
            />
          </div>
        </section>
        <div className="image-transition"></div>
        <section id="contact" aria-labelledby="contact-title">
          <ContactComponent />
        </section>
        <footer className="footer">
          <div className="footer-detail">
            <div className="footer-detail-item">
              <Image
                className="logo object-contain self-start"
                src="/logo.webp"
                alt="Logo"
                loading="lazy"
                width={40}
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
                  Servers
                </a>
                <a href="#map" className="font-regular">
                  Maps
                </a>
                <a href="#faq" className="font-regular">
                  FAQ
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
