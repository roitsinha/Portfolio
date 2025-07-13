import classes from './Home.module.scss';
import photo from '../../assets/rohit.webp'; 
import { MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';
function Home() {
  

  const socialData = [
    {
      id: 1,
      icon: <FaTwitter size={18} color="#fff" />,
      backColor: '#1DA1F2',
      link: 'https://x.com/roit_sinha',
    },
    {
      id: 2,
      icon: <FaLinkedin size={18} color="#fff" />,
      backColor: '#0077B5',
      link: 'https://www.linkedin.com/in/rohit-sinha-a781772b1/',
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
      link: 'https://github.com/roitsinha',
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
        <div className={classes.infoConatiner}>
          <div className={classes.photoWrapper}>
            <img src={photo} alt="Rohit Sinha" className={classes.photo} />
          </div>
          <p className={classes.name}>Rohit Sinha</p>
          <div className={classes.location}>
            <MdLocationOn height={14} width={14} fill="#EE4047" />
            <span className={classes.locationInfo}>Ranchi, Jharkhand, India</span>
          </div>
        </div>

        <div className={classes.headerTextBlock}>
          <p className={classes.headerTxt}>
            Crafting scalable apps,  
            <span className={classes.headerSpan}>mastering cloud infrastructure, and streamlining DevOps pipelines.</span>
          </p>
        </div>
      </header>

      <section className={classes.infos}>
      <p>
  Hello! I’m Rohit Sinha, a Computer Science and Engineering student.
  Passionate about <strong>web development</strong> and <strong>DevOps</strong>, I’m eager to
  contribute and grow in these fields.
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
