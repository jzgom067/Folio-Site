// data
import projects from '../data/projects.js';

// components
import DevIcon from './DevIcon.js';
import Icon from './Icon.js';
import SlideFadeIn from './SlideFadeIn.js';
import ImageModal from './ImageModal.js';
import PlaceholderImage from './PlaceholderImage.js';

// react stuff
import React from 'react';

// router
import { useParams } from 'react-router-dom';

// styling
import styles from './Project.module.css';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function Project() {
  let { proj } = useParams();
  proj = getProj(proj);

  return (
    <div className={styles.section}>
      <div className={styles.titleBar}>
        <SlideFadeIn>
          <div className={styles.logoContainer}>
            <PlaceholderImage
              className={styles.logo}
              src={proj.logo}
              alt="logo"
              width="4.75rem"
              aspectRatio="1"
            />
          </div>
        </SlideFadeIn>
        <div className={styles.titleBarLeft}>
          <SlideFadeIn>
            <h1 className={styles.title}>
              {proj.name}
            </h1>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.links}>
              {proj.links.map((link, i) => (
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
              {proj.date_start} - {proj.date_end}
            </span>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.tech}>
              {proj.tech_stack.map((tech, i) => (
                <DevIcon tech={tech} size="3rem" key={i} />
              ))}
            </div>
          </SlideFadeIn>
        </div>
      </div>
      <div className={styles.content}>
        {proj.images.length > 0 &&
          <div className={styles.previewContainer}>
            <SlideFadeIn>
              <div className={styles.previewHover}>
                <span>View Images &#40;{proj.images.length}&#41;</span>
              </div>
              <ImageModal images={proj.images} />
              <PlaceholderImage
                className={styles.preview2}
                src={proj.images[1].img}
                alt={proj.images[1].title}
                aspectRatio="16 / 9"
              />
              <PlaceholderImage
                className={styles.preview}
                src={proj.images[0].img}
                alt={proj.images[0].title}
                aspectRatio="16 / 9"
              />
            </SlideFadeIn>
          </div>
        }
        {proj.text.map((dict, i) => {
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

export default Project;
