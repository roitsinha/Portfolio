import classes from './Home.module.scss';
import photo from '../../assets/shubham.webp'; 
import { MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';

function Home() {
  const socialData = [
    {
      id: 1,
      icon: <FaTwitter size={18} color="#fff" />,
      backColor: '#1DA1F2',
      link: 'https://twitter.com/',
    },
    {
      id: 2,
      icon: <FaLinkedin size={18} color="#fff" />,
      backColor: '#0077B5',
      link: 'https://www.linkedin.com/',
    },
    {
      id: 3,
      icon: <FaUser size={18} color="#fff" />,
      backColor: '#6e5494',
      link: 'https://portfolio-two-pink-51.vercel.app/',
    },
    {
      id: 4,
      icon: <FaGithub size={18} color="#fff" />,
      backColor: '#333',
      link: 'https://github.com/',
    },
  ];

  const renderIcons = () =>
    socialData.map(({ id, icon, backColor, link }) => (
      <a
        key={id}
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          width: '2rem',
          height: '2rem',
          marginRight: '1rem',
          borderRadius: '50%',
          backgroundColor: backColor,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.29)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'transform 0.1s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {icon}
      </a>
    ));

  return (
    <div className={classes.container}>
      <header className={classes.headerContainer}>
        <div className={classes.infoContainer}>
          <div className={classes.photoWrapper}>
            <img src={photo} alt="Shubham Sinha" className={classes.photo} />
          </div>
          <p className={classes.name}>Shubham Sinha</p>
          <div className={classes.location}>
            <MdLocationOn height={14} width={14} fill="#EE4047" />
            <span className={classes.locationInfo}>Ranchi, Jharkhand, India</span>
          </div>
        </div>

        <div className={classes.headerTextBlock}>
        <p className={classes.headerTxt}>
  I’m Shubham Sinha, a passionate web developer,  
  <span className={classes.headerSpan}>currently learning and building projects to master modern web development.</span>
</p>

        </div>
      </header>

      <section className={classes.infos}>
        <p>
          Hello! I’m Shubham Sinha, a BCA student. I am a web developer and learning web developing.
        </p>
      </section>

      <footer className={classes.footerContainer}>
        <div className={classes.socials}>{renderIcons()}</div>
        <p className={classes.footerNote}>
          Connect with me through socials above. I’d love to collaborate!
        </p>
      </footer>
    </div>
  );
}

export default Home;

