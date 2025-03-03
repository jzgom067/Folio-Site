// data
import projects from '../data/projects.js';
import jobs from '../data/jobs.js';

// components
import DevIcon from './DevIcon.js';
import Icon from './Icon.js';
import SlideFadeIn from './SlideFadeIn.js';
import ImageModal from './ImageModal.js';
import PlaceholderImage from './PlaceholderImage.js';
import HomeButton from './HomeButton.js';

// react stuff
import React, { useState, useEffect } from 'react';

// router
import { useParams } from 'react-router-dom';

// styling
import styles from './Project.module.css';

function getProj(slug) {
  return projects.find((proj) => proj.slug === slug);
}

function getJob(slug) {
  return jobs.find((job) => job.slug === slug);
}

function Project() {
  let { type, slug } = useParams();
  let data = null;
  if (type === "project") {
    data = getProj(slug);
  } else if (type === "experience") {
    data = getJob(slug);
  }

  let tempElem = document.createElement('div');
  tempElem.style.fontSize = 'initial';
  document.body.appendChild(tempElem);
  const rem = parseFloat(getComputedStyle(tempElem).fontSize);
  document.body.removeChild(tempElem);

  function checkSingleColumn() {
    return window.innerWidth <= 55 * rem;
  }

  const [isSingleColumn, setsingleColumn] = useState(checkSingleColumn());

  const updateVariable = () => {
    // don't need to check if the value is changed, since React won't rerender unless
    // the value has changed
    setsingleColumn(checkSingleColumn());
  };

  useEffect(() => {
    window.addEventListener('resize', updateVariable);
  })

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
      {isSingleColumn &&
        <div className={styles.singleCol}>
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
                  className={styles.preview}
                  src={data.images[0].img}
                  alt={data.images[0].title}
                  aspectRatio="16 / 9"
                  tempStyle={{ left: "5%" }}
                />
              </SlideFadeIn>
            </div>
          }
          {data.text.map((dict, i) => {
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
      }
      {!isSingleColumn &&
        <div className={styles.content}>
          <div className={styles.leftCol}>
            {data.text.map((dict, i) => {
              if (i > data.text.length / 2) {
                return <></>;
              }
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
          <div className={styles.rightCol}>
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
                    className={styles.preview}
                    src={data.images[0].img}
                    alt={data.images[0].title}
                    aspectRatio="16 / 9"
                    tempStyle={{ left: "5%" }}
                  />
                </SlideFadeIn>
              </div>
            }
            {data.text.map((dict, i) => {
              if (i <= data.text.length / 2) {
                return <></>;
              }
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
      }
      <SlideFadeIn>
        <HomeButton />
      </SlideFadeIn>
    </div>
  );
};

export default Project;
