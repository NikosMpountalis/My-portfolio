import { Button } from 'primereact/button';

import { scrollToId } from '../utils/scrollToId';

export default function HeroSection() {
  return (
    <div className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/video/Video.jpg"
      >
        <source src="/assets/video/video.webm" type="video/webm" />
        <source src="/assets/video/video.mp4" type="video/mp4" />
        <source src="/assets/video/video.ogg" type="video/ogg" />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content flex flex-column justify-content-center align-items-center text-center gap-4">
        <div>
          <h1 className="m-0">Nikolaos Bountalis - Software Engineer</h1>
          <p className="mt-3 mb-0 text-lg">
            Welcome to my site, I Create Web Pages and Web Applications
          </p>
        </div>

        <Button
          label="More"
          icon="pi pi-arrow-down"
          onClick={() => scrollToId('about')}
        />
      </div>

      <button
        type="button"
        className="hero__scroll-down"
        onClick={() => scrollToId('about')}
        aria-label="Scroll to About section"
      >
        <i className="pi pi-angle-down text-3xl" />
      </button>
    </div>
  );
}

