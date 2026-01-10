import { Button } from 'primereact/button';

import { scrollToId } from '../utils/scrollToId';
import LinkedInButton from '../components/LinkedInButton.jsx';

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="app-container">
        <div className="grid">
          <div className="col-12 md:col-6 flex flex-column gap-3">
            <button
              type="button"
              className="p-0 border-none bg-transparent cursor-pointer"
              onClick={() => scrollToId('home')}
              aria-label="Back to top"
            >
              <img
                src="/assets/images/logo/logo_transparent.png"
                alt="NIBO logo"
                className="footer__logo"
                loading="lazy"
              />
            </button>
            <div className="opacity-80">Web sites and Web Applications</div>
          </div>

          <div className="col-12 md:col-6 flex flex-column gap-2">
            <LinkedInButton />
            <div className="mt-3">
              <Button
                label="Back to top"
                icon="pi pi-arrow-up"
                severity="secondary"
                outlined
                onClick={() => scrollToId('home')}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top-1 surface-border flex justify-content-between flex-wrap gap-2">
          <div className="opacity-80">&copy; Nibo {year}.</div>
          <div className="opacity-80">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
