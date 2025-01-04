import React from 'react';
import Image from 'next/image';
import './project-card.css';

type LinkProject = {
  image: string;
  href: string;
};

type ProtectCardComponentProps = {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  links: LinkProject[];
};

const ProjectCardComponent = ({
  src,
  title,
  description,
  technologies,
  links,
}: ProtectCardComponentProps) => {
  return (
    <article className="project-card">
      <div className="project-card-background">
        <Image src={src} alt={title} loading="lazy" width={500} height={500} />
      </div>
      <div className="project-card-detail">
        <h3 className="subtitle-1">{title}</h3>
        <div className="project-card-detail-container">
          {technologies.map((technology, index) => (
            <div key={`tech-${index}`} className="chip">
              {technology}
            </div>
          ))}
        </div>
        <div className="subtitle-2 text-justify">{description}</div>
        {links && links.length > 0 && (
          <>
            <div>Links</div>
            <div className="project-card-detail-container">
              {links.map((link, index) => (
                <a
                  key={`link-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={link.image}
                    alt={`${title} icon`}
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default ProjectCardComponent;
