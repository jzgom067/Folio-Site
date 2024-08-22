// data
import jobs from '../data/jobs.js';

// router
import { useParams } from 'react-router-dom';

// styling
import styles from './Project.module.css'; // TEMPORARY
import SlideFadeIn from './SlideFadeIn.js';
import ImageModal from './ImageModal.js';
import PlaceholderImage from './PlaceholderImage.js';
import Icon from './Icon.js';
import DevIcon from './DevIcon.js';

function getJob(slug) {
  return jobs.find((job) => job.slug === slug);
}

function Job() {
  let { job } = useParams();
  job = getJob(job);

  return (
    <div className={styles.section}>
      <div className={styles.titleBar}>
        <SlideFadeIn>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={job.logo} alt="logo" />
          </div>
        </SlideFadeIn>
        <div className={styles.titleBarLeft}>
          <SlideFadeIn>
            <h1 className={styles.title}>
              {job.name}
            </h1>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.links}>
              {job.links.map((link, i) => (
                <a
                  key={i}
                  className={styles.link}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{link.name}</span>
                  <Icon name="External Link" stroke="gray" size="1em"></Icon>
                </a>
              ))}
            </div>
          </SlideFadeIn>
        </div>
        <div className={styles.titleBarRight}>
          <SlideFadeIn>
            <span className={styles.date}>
              {job.date_start} - {job.date_end}
            </span>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.tech}>
              {job.tech_stack.map((tech, i) => (
                <DevIcon tech={tech} size="3rem" key={i} />
              ))}
            </div>
          </SlideFadeIn>
        </div>
      </div>
      <div className={styles.content}>
        {job.images.length > 0 &&
          <div className={styles.previewContainer}>
            <SlideFadeIn>
              <div className={styles.previewHover}>
                <span>View Images &#40;{job.images.length}&#41;</span>
              </div>
              <ImageModal images={job.images} />
              <PlaceholderImage
                className={styles.preview2}
                src={job.images[1].img}
                alt={job.images[1].title}
                aspectRatio="16 / 9"
              />
              <PlaceholderImage
                className={styles.preview}
                src={job.images[0].img}
                alt={job.images[0].title}
                aspectRatio="16 / 9"
              />
            </SlideFadeIn>
          </div>
        }
        {job.text.map((dict, i) => {
          return (
            <div className={styles.textSection} key={i}>
              <SlideFadeIn>
                <h2>{dict.title}</h2>
              </SlideFadeIn>
              <SlideFadeIn>
                <div className={styles.text}>
                  {dict.text}
                </div>
              </SlideFadeIn>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;