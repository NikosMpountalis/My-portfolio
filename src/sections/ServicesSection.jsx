import { TabPanel, TabView } from 'primereact/tabview';

export default function ServicesSection() {
  return (
    <div className="app-container">
      <h2 className="app-section-title">My Services</h2>

      <TabView>
        <TabPanel header="Web Design">
          <div className="grid">
            <div className="col-12 lg:col-4">
              <blockquote className="app-quote m-0">
                Web Design is not just what it looks like &amp; feels like.
                Design is how it works.
              </blockquote>
            </div>
            <div className="col-12 lg:col-4">
              <p className="m-0">
                Web design focuses on aesthetics like layout, UI, visual imagery
                and usability to make the website more visually appealing and
                easy to use.
              </p>
            </div>
            <div className="col-12 lg:col-4">
              <p className="m-0">
                It uses tools like Photoshop and many others. I always think
                about the purpose of the website and the visual appeal of the
                design.
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Web Development">
          <div className="grid">
            <div className="col-12 lg:col-4">
              <blockquote className="app-quote m-0">
                Web Development - this procedure makes a living organism to
                turn caffeine into a Web Site or a Web Application.
              </blockquote>
            </div>
            <div className="col-12 lg:col-4">
              <p className="m-0">
                Web development refers to tasks involved in building sites for
                intranet or internet: web design, content development,
                client/server scripting and network security configuration.
              </p>
            </div>
            <div className="col-12 lg:col-4">
              <p className="m-0">
                From requirements to deployment, I focus on building reliable,
                maintainable web applications that feel fast and intuitive.
              </p>
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}
