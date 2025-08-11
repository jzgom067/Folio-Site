// data
import projects from '../../data/projects.js';

// components
import DevIcon from '../common/DevIcon.js';
import Icon from '../common/Icon.js';
import SlideFadeIn from '../common/SlideFadeIn.js';
import ImageModal from '../common/ImageModal.js';
import PlaceholderImage from '../common/PlaceholderImage.js';
import HomeButton from '../common/HomeButton.js';

// react stuff
import React from 'react';

// router
import { useParams } from 'react-router-dom';

// styling
import styles from './ProjectPage.module.css';
import CommitList from './CommitList.js';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function Project() {
  let { slug } = useParams();
  let data = null;
  data = getProj(slug);

  return (
    <div className={styles.section}>
      <div className={styles.titleBar}>
        <SlideFadeIn>
          <div className={styles.logoContainer}>
            <PlaceholderImage
              className={styles.logo}
              src={data.logo}
              alt="logo"
              width="4.75rem"
              aspectRatio="1"
            />
          </div>
        </SlideFadeIn>
        <div className={styles.titleBarLeft}>
          <SlideFadeIn>
            <h1 className={styles.title}>
              {data.name}
            </h1>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.links}>
              {data.links.map((link, i) => (
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
              {data.date_start} - {data.date_end}
            </span>
          </SlideFadeIn>
          <SlideFadeIn>
            <div className={styles.tech}>
              {data.tech_stack.map((tech, i) => (
                <DevIcon tech={tech} size="3rem" key={i} />
              ))}
            </div>
          </SlideFadeIn>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <SlideFadeIn className={styles.text}>
            {data.description}
          </SlideFadeIn>
        </div>
        {data.images.length > 0 &&
          <div className={styles.previewContainer}>
            <SlideFadeIn>
              <div className={styles.previewHover}>
                <span>View Media &#40;{data.images.length}&#41;</span>
              </div>
              <ImageModal images={data.images} />
              <PlaceholderImage
                className={styles.preview2}
                src={data.images[1].img}
                alt={data.images[1].title}
                aspectRatio="16 / 9"
              />
              <PlaceholderImage
                className={styles.preview1}
                src={data.images[0].img}
                alt={data.images[0].title}
                aspectRatio="16 / 9"
                tempStyle={{ left: "5%" }}
              />
            </SlideFadeIn>
          </div>
        }
        {data.iframe_link &&
          <div className={styles.previewContainer}>
            <SlideFadeIn>
              <iframe
                src={data.iframe_link}
                title={data.name}
                className={styles.iframe}
                allowFullScreen
              ></iframe>
            </SlideFadeIn>
          </div>
        }
      </div>
      {data.github &&
        <SlideFadeIn>
          <CommitList type={data.github.type} owner={data.github.owner} repo={data.github.repo} />
        </SlideFadeIn>
      }
      <SlideFadeIn>
        <HomeButton />
      </SlideFadeIn>
    </div>
  );
};

export default Project;
