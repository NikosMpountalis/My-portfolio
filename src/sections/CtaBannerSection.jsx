import LinkedInButton from '../components/LinkedInButton.jsx';

export default function CtaBannerSection() {
  return (
    <div className="cta-banner">
      <div className="cta-banner__overlay" />
      <div className="cta-banner__content app-section">
        <div className="app-container">
          <div className="cta-banner__inner">
            <h2 className="m-0">Let's get in touch</h2>
            <p className="mt-3 mb-4">
              Please do not hesitate to contact me by clicking the button below:
            </p>
            <LinkedInButton />
          </div>
        </div>
      </div>
    </div>
  );
}
