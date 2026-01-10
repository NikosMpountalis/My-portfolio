import { Card } from 'primereact/card';

const items = [
  {
    title: 'Creativity',
    icon: 'pi pi-flag',
    text: 'Every project has its own unique perspective; I aim to deliver solutions that are distinctive and tailored.',
  },
  {
    title: 'Timely Delivery',
    icon: 'pi pi-clock',
    text: 'I value deadlines and deliver work on schedule.',
  },
  {
    title: 'User Experience',
    icon: 'pi pi-star',
    text: 'I focus on building attractive, easy-to-navigate, and interactive experiences.',
  },
  {
    title: 'Simplicity',
    icon: 'pi pi-heart',
    text: 'I prefer clean, minimal solutions, while remaining comfortable with more complex requirements when needed.',
  },
  {
    title: 'Accountability',
    icon: 'pi pi-chart-line',
    text: 'I take ownership of my work and follow through on commitments.',
  },
  {
    title: 'Professional Communication',
    icon: 'pi pi-comments',
    text: 'I communicate clearly and collaborate effectively throughout the project lifecycle.',
  },
];

export default function WhyChooseMeSection() {
  return (
    <div className="app-container">
      <h2 className="app-section-title">Why Choose Me?</h2>

      <div className="grid why-choose-me-grid">
        {items.map((item) => (
          <div key={item.title} className="col-12 md:col-6 lg:col-4">
            <Card>
              <div className="flex flex-column align-items-center text-center gap-3">
                <i className={`${item.icon} text-4xl`} />
                <div className="text-xl font-semibold">{item.title}</div>
                <p className="m-0">{item.text}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
