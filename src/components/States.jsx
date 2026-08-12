import "../styles/Stats.css";

export default function Stats() {
  const data = [
    {
      number: "500+",
      title: "Products",
      icon: "🏋️",
    },
    {
      number: "10K+",
      title: "Happy Customers",
      icon: "😊",
    },
    {
      number: "5K+",
      title: "Orders Delivered",
      icon: "📦",
    },
    {
      number: "4.9★",
      title: "Customer Rating",
      icon: "⭐",
    },
  ];

  return (
    <section className="stats">
      <h2>Our Achievements</h2>
      <p>Trusted by thousands of fitness enthusiasts across India.</p>

      <div className="stats-container">
        {data.map((item, index) => (
          <div className="stats-card" key={index}>
            <span className="icon">{item.icon}</span>

            <h1>{item.number}</h1>

            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}