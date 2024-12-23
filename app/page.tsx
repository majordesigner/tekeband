import Image from "next/image";
import styles from './styles.module.css'
import tekeLogo from "../public/Teke_Logo.png"
import spotifyIcon from '../public/spotify.svg'
import youtubeIcon from '../public/youtube.svg'
import facebookIcon from '../public/facebook.svg'
import instagramIcon from '../public/instagram.svg'
import bandcampIcon from '../public/bandcamp.svg'

export default function Home() {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.content}>
        <Image
          className={styles.logo}
          src={tekeLogo}
          alt="Teke Logo"
          width={600}
        />
        <p className={styles.coming}>COMING SOON</p>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="https://open.spotify.com/intl-tr/artist/1wAONsLCIpao3Lu494EqG2?si=FT2OsXZxRpyGd0a8I5s8LA&nd=1&dlsi=992d829170a540a7" target="_blank" title="Spotify">
                <Image
                  src={spotifyIcon}
                  alt="Spotify"
                  width={50}
                  height={50}
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@tekebandofficial" target="_blank" title="Youtube">
                <Image
                    src={youtubeIcon}
                    alt="Youtube"
                    width={50}
                    height={50}
                  />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/teke_official" target="_blank" title="Instagram">
                <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={50}
                    height={50}
                  />
              </a>
            </li>            
            <li>
              <a href="https://www.facebook.com/tekeofficial" target="_blank" title="Facebook">
                <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
              </a>
            </li>            
            <li>
              <a href="https://teke.bandcamp.com/releases" target="_blank" title="Bandcamp">
                <Image
                    src={bandcampIcon}
                    alt="Bandcamp"
                    width={50}
                    height={50}
                  />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
