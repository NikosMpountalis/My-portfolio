import { Card } from 'primereact/card';

import LinkedInButton from '../components/LinkedInButton.jsx';

export default function AboutSection() {
  return (
    <div className="app-container">
      <h2 className="app-section-title">About Me</h2>

      <div className="grid about-cards-grid">
        <div className="col-12 md:col-6 lg:col-3">
          <Card title="Profile">
            <img
              src="/assets/images/team/profile.jpg"
              alt="Nick Bountalis"
              className="w-full border-round"
            />

            <div className="mt-3">
              <div className="text-xl font-semibold">Nikolaos Bountalis</div>
              <div className="opacity-80">Software Engineer</div>
              <p className="mt-3 mb-3">
                My name is Nikolaos Bountalis and i like to create tools that help people.
              </p>

              <LinkedInButton />
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title="Studies / Hobbies">
            <h3 className="mt-0">About</h3>
            <p className="mt-2">
              Front-end Software Engineer specialized in ReactJS SPA with a variety of technical
              and commercial skills acquired through involvement in Digital Banking, Telco,
              Booking and other various commercial projects.
            </p>

            <h3>Studies</h3>
            <ul className="pl-3 m-0">
              <li>Accounting at IEK Delta</li>
              <li>Web Development training courses by the National Kapodistrian University of Athens</li>
              <li>Continuing to learn in the finance and computer science world</li>
            </ul>

            <h3>Hobbies</h3>
            <ul className="pl-3 m-0">
              <li>Guitar Player</li>
              <li>Pro Fitness Athlete</li>
            </ul>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title="Experience">
            <div className="experience-list">
              <div className="experience-item">
                <div className="experience-logo" aria-hidden="true">
                  JPM
                </div>
                <div className="experience-content">
                  <div className="experience-role">Software Engineer</div>
                  <div className="experience-company">
                    J.P. Morgan <span className="experience-type">&nbsp;&middot; Full-time</span>
                  </div>
                  <div className="experience-meta">Jul 2024 - Present &middot; 1 yr 7 mos</div>
                  <div className="experience-meta">Attiki, Greece &middot; Hybrid</div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-logo" aria-hidden="true">
                  NET
                </div>
                <div className="experience-content">
                  <div className="experience-role">React Engineer</div>
                  <div className="experience-company">
                    INTRASOFT International
                    <span className="experience-type">&nbsp;&middot; Full-time</span>
                  </div>
                  <div className="experience-meta">Sep 2021 - Jun 2024 &middot; 2 yrs 10 mos</div>
                  <div className="experience-meta">Athens, Attiki, Greece</div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-logo" aria-hidden="true">
                  Z
                </div>
                <div className="experience-content">
                  <div className="experience-role">Full Stack Developer</div>
                  <div className="experience-company">
                    Zero to MVP, Inc <span className="experience-type">&nbsp;&middot; Full-time</span>
                  </div>
                  <div className="experience-meta">Aug 2020 - Aug 2021 &middot; 1 yr 1 mo</div>
                  <div className="experience-meta">Athens, Attiki, Greece</div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-logo" aria-hidden="true">
                  I
                </div>
                <div className="experience-content">
                  <div className="experience-role">Administrator at European Projects</div>
                  <div className="experience-company">
                    IASIS NGO <span className="experience-type">&nbsp;&middot; Full-time</span>
                  </div>
                  <div className="experience-meta">Nov 2018 - Jul 2020 &middot; 1 yr 9 mos</div>
                  <div className="experience-meta">Athens, Greece</div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-logo" aria-hidden="true">
                  FF
                </div>
                <div className="experience-content">
                  <div className="experience-company">Folli Follie Group</div>
                  <div className="experience-meta">Jul 2013 - Nov 2018 &middot; 5 yrs 5 mos</div>

                  <div className="experience-subrole">Off Price Channel - Junior Merchandiser</div>
                  <div className="experience-meta">May 2018 - Nov 2018 &middot; 7 mos</div>
                  <div className="experience-tags">
                    <span className="experience-tag">Stock Management</span>
                  </div>

                  <div className="experience-subrole">Sales</div>
                  <div className="experience-meta">Jul 2013 - May 2018 &middot; 4 yrs 11 mos</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <Card title="Skills">
            <ul className="pl-3 m-0">
              <li>HTML5</li>
              <li>JavaScript/Typescript</li>
              <li>CSS (SASS)</li>
              <li>ReactJS</li>
              <li>Vue</li>
              <li>MUI</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
              <li>NodeJs</li>
              <li>D3.js</li>
              <li>W3C &amp; ARIA Standards</li>
              <li>cross-browser compatibility</li>
              <li>responsive web design</li>
              <li>mobile first</li>
              <li>SEO</li>
              <li>REST APIs’</li>
              <li>GraphQL</li>
              <li>code refactoring and performance optimizations</li>
              <li>Github</li>
              <li>Lerna</li>
              <li>Webpack</li>
              <li>Jest and RTL</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
