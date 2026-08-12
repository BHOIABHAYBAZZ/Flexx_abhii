import "../styles/BrandSlider.css";

const brands = [
  {
    name: "Optimum Nutrition",
    logo: "https://static.cdnlogo.com/logos/o/47/optimum-nutrition.png",
  },
  {
    name: "MuscleBlaze",
    logo: "https://mir-s3-cdn-cf.behance.net/projects/404/19cd32217206921.Y3JvcCwxNTAwLDExNzMsMCwxNA.png",
  },
  {
    name: "AS-IT-IS",
    logo: "https://asitisnutrition.com/cdn/shop/files/AS-IT-IS_ATOM_Black_Text_Logo_Without_BG_1.png?v=1772435344&width=500",
  },
  {
    name: "Avvatar",
    logo: "https://www.avvatarindia.com/assets/images/new/loginBannerOTP-2.jpeg",
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    logo: "https://logodownload.org/wp-content/uploads/2014/07/puma-logo-1.png",
  },
];

export default function BrandSlider() {
  return (
    <section className="brand-section">
      <h2>Trusted Brands</h2>
      <h4 style={{fontWeight:"bold" ,textAlign:"center"}}>Shop premium products from the world's leading fitness and sports brands.</h4>

      <div className="brand-slider">
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}