import "./About.css"
import image from "./img/R.jpeg"
import imgae_two from "./img/r2.jpg"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
function About(){
  const nav=useNavigate();
  const handleGetStart=()=>{
    nav("/login");
  }
return <>
  <header>
    <nav className="navbarA">
      <div className="menu-iconA">
        <button>Menu</button>
      </div>
      <div className="logoA">
        <span>AgriCure</span>
      </div>
      <div className="contact-linkA">
        <a href="#">Contact</a>
      </div>
    </nav>
  </header>
  <main>
    <section className="heroA">
      <div className="containerA">
        <div className="hero-contentA">
          <h1>Revolutionizing Agriculture Through Technology</h1>
          <p>
            Discover cutting-edge solutions to enhance productivity,
            sustainability, and efficiency in farming practices.
          </p>
          <button className="btnA" onClick={handleGetStart}>Get Started</button>
        </div>
        <div className="hero-imageA">
          <img src={imgae_two} alt="Farm Image" />
        </div>
      </div>
      <div className="rightA">
        <img src={image} alt="Irrigation system in a field" />
        {/* Menu buttons here */}
        <div className="menu-buttonsA">
          <button
            className="buttonA"
            onclick="window.location.href='https://en.wikipedia.org/wiki/Agriculture'"
          >
            Agriculture
          </button>
          <button
            className="buttonA"
            onclick="window.location.href='https://en.wikipedia.org/wiki/Agricultural_technology'"
          >
            Technology
          </button>
          <button
            className="buttonA"
            onclick="window.location.href='https://en.wikipedia.org/wiki/Digital_agriculture#:~:text=Digital%20agriculture%2C%20sometimes%20known%20as%20smart%20farming%20or,of%20agriculture%20as%20the%20digital%20agricultural%20revolution.%20'"
          >
            Innovations
          </button>
          <button
            className="buttonA"
            onclick="window.location.href='https://en.wikipedia.org/wiki/Agricultural_technology'"
          >
            Future
          </button>
          <button
            className="buttonA"
            onclick="window.location.href='https://theconversation.com/3-ways-ai-can-help-farmers-tackle-the-challenges-of-modern-agriculture-213210'"
          >
            AI
          </button>
        </div>
      </div>
    </section>
    <section className="featuresA">
      <div className="containerA">
        <h2>Our Services</h2>
        <div className="featureA">
          <img
            src="https://www.leaddigital.com/wp-content/uploads/2023/04/Untitled-design-2023-04-24T161715.065.jpg"
            alt="Feature 1"
          />
          <h3>Streamlining Farm Operations</h3>
          <p>
            Streamlining farm operations in agriculture involves optimizing
            processes such as planting, harvesting, and resource management.
            This can be achieved through automation, precision farming, data
            analytics, and improved machinery. By enhancing efficiency, reducing
            labor costs, and conserving resources, farmers can increase
            productivity, lower expenses, and support sustainable farming
            practices.
          </p>
        </div>
        <div className="featureA">
          <img
            src="https://www.qualityequip.com/webres/File/Header-PrecisionAg(1).jpg"
            alt="Feature 2"
          />
          <h3>Precision Farming Solutions</h3>
          <p>
            Precision farming solutions use technology like GPS, sensors, and
            data analytics to optimize agricultural practices. These tools help
            farmers monitor crop conditions, manage resources efficiently, and
            increase yields while minimizing environmental impact. By applying
            precise amounts of water, fertilizer, and pesticides, farmers can
            improve sustainability and profitability.
          </p>
        </div>
        <div className="featureA">
          <img
            src="https://thedatascientist.com/wp-content/uploads/2023/12/image-12.png"
            alt="Feature 3"
          />
          <h3>Data-Driven Insights</h3>
          <p>
            Data-driven insights in agriculture involve using technology, such
            as sensors, drones, and AI, to analyze vast amounts of data on
            weather, soil health, and crop performance. These insights help
            optimize farming practices, improve crop yields, reduce resource
            use, and enhance sustainability, leading to more efficient and
            profitable agricultural operations.
          </p>
        </div>
      </div>
    </section>
    <section className="call-to-actionA">
      <div className="containerA">
        <p>Ready to transform your farm? Contact us today!</p>
        <button className="btnA">Get Started</button>
      </div>
    </section>
  </main>
  <footer>
    <div className="containerA">
      
    </div>
  </footer>

  <Navbar></Navbar>
</>
}


export default About;