import "bootstrap/dist/css/bootstrap.min.css";
import { CameraVideoFill, LockFill, Display } from "react-bootstrap-icons";
import "./Security.css";
import {useNavigate} from "react-router-dom"

function Security() {
   const navigate = useNavigate();
  return (
    <section className="security-section">

      <div className="container text-center">

        <h1 className="section-title">CCTV & Security Solutions</h1>

        <p className="section-subtitle">
          Protect what matters most with our advanced surveillance systems
          designed for homes, businesses, and industrial environments.
        </p>

        <div className="row mt-5 g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="icon-box">
                <CameraVideoFill />
              </div>
              <h4>HD CCTV Cameras</h4>
              <p>
                Ultra HD cameras with night vision and wide-angle coverage
                for complete property protection.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="icon-box">
                <LockFill />
              </div>
              <h4>Access Control</h4>
              <p>
                Secure your building with biometric systems and smart
                access control technology.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <div className="icon-box">
                <Display />
              </div>
              <h4>24/7 Monitoring</h4>
              <p>
                Real-time monitoring and instant alerts directly to
                your mobile devices.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Second Section */}

      <div className="container why-section">

        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827"
              className="img-fluid security-image"
              alt="security"
            />
          </div>

          <div className="col-md-6">

            <h2 className="why-title">Why Choose Our Security Systems?</h2>

            <ul className="why-list">
              <li>✔ Professional Installation</li>
              <li>✔ Remote Mobile Monitoring</li>
              <li>✔ Weatherproof Cameras</li>
              <li>✔ Secure Cloud Storage</li>
              <li>✔ 24/7 Technical Support</li>
            </ul>

            <button className="btn btn-primary btn-lg rounded-pill mt-3" onClick={() => navigate("/contact")}>
              Get Free Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Security;