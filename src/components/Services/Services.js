import styles from './Services.module.css';

const Services = () => {
  return (
    <div id="about" className={styles.gridContainer}>
      <img
        src="/images/mobile/image-transform.jpg"
        alt="Transform"
        className={styles.transformImg}
      />
      <div className={styles.transformText}>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="#about">LEARN MORE</a>
      </div>
      <img
        src="/images/mobile/image-stand-out.jpg"
        alt="Stand-out"
        className={styles.standOutImg}
      />
      <div className={styles.standOutText}>
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a href="#about">LEARN MORE</a>
      </div>
      <div id="services" className={styles.graphicDesign}>
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className={styles.photography}>
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Services;
