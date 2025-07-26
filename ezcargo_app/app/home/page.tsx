import Head from 'next/head';
import "../home/home.css"
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <main>
        <header className="header">
          
            <Image src="/AmericanLogo.png" alt="EZCargo Logo" width={120} height={30} className='logo'/>

          <div className="container">
            <h1>EZCargo Logistics</h1>
            <nav>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          
        </header>

        <section className="hero">
          <h1>Your Partner in High‑RPM Freight Dispatch</h1>
          <p>Dry Van • Flatbed • Reefer • 24/7 Support</p>
          <a href="#contact" className="btn-primary">Get a Free Dispatch Quote</a>
        </section>

        <section className="services" id="services">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service">
              <h3>🧾 Rate Negotiation</h3>
              <p>Maximize your RPM on every lane.</p>
            </div>
            <div className="service">
              <h3>📍 Routing</h3>
              <p>Efficient routes with less deadhead.</p>
            </div>
            <div className="service">
              <h3>🤝 Broker Relations</h3>
              <p>Strong, trusted partnerships.</p>
            </div>
            <div className="service">
              <h3>📞 24/7 Dispatch</h3>
              <p>Always available, always reliable.</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <textarea placeholder="Comments"></textarea>
            <button type="submit">Request Your Free Quote</button>
          </form>
        </section>

        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} EZCargo Logistics</p>
            <p>Contact: 385-567-6354 | ezcargologistics@hotmail.com</p>
          </div>
        </footer>
      </main>
    </>
  );
}
