import { Card } from 'primereact/card';

import { projects } from '../data/projects';

export default function PortfolioSection() {
  return (
    <div className="app-container">
      <h2 className="app-section-title">Portfolio</h2>
      <p className="app-section-subtitle">
        Here below you can see some of my projects
      </p>

      <div className="grid">
        {projects.map((project) => {
          const header =
            project.type === 'embed' ? (
              <div className="responsive-iframe">
                <iframe
                  src={project.embedSrc}
                  title={`${project.title} embed`}
                  allow="geolocation; microphone; camera; midi; vr; encrypted-media"
                />
              </div>
            ) : (
              <img
                src={project.imageSrc}
                alt={project.title}
                className="portfolio-image"
                loading="lazy"
              />
            );

          return (
            <div key={project.id} className="col-12 md:col-6">
              <Card title={project.title} header={header}>
                <p className="m-0">{project.description}</p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
