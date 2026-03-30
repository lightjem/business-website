import "bootstrap/dist/css/bootstrap.min.css";
import "./DigitalMarketing.css";
import {useNavigate} from "react-router-dom"

function DigitalMarketing() {
   const navigate = useNavigate();
  return (
    <div className="marketing-page">

      {/* Hero Section */}
      <div className="marketing-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Digital Marketing Solutions</h1>
          <p className="lead">
            Grow your business online with powerful marketing strategies.
          </p>

          <button className="btn btn-warning btn-lg rounded-pill mt-3" onClick={() => navigate("/contact")}>
           Start Your Campaign
          </button>
        </div>
      </div>


      {/* Services Section */}

      <div className="container py-5">

        <h2 className="text-center mb-5">Our Marketing Services</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="marketing-card">
              <h4>🔎 SEO Optimization</h4>
              <p>
                Improve your Google ranking and drive organic traffic
                with advanced SEO .
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="marketing-card">
              <h4>📱 Social Media Marketing</h4>
              <p>
                Build brand awareness and connect with customers
                across all social platforms.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="marketing-card">
              <h4>💰 Google Ads</h4>
              <p>
                Run targeted ad campaigns that convert visitors
                into paying customers.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* Why Choose Us */}

      <div className="container pb-5">

        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              className="img-fluid marketing-img"
              alt="marketing"
            />
          </div>

          <div className="col-md-6">

            <h2>Why Choose Our Marketing Experts?</h2>

            <ul className="marketing-list">
              <li>✔ Data-Driven Marketing Strategies</li>
              <li>✔ Proven SEO Results</li>
              <li>✔ Creative Social Media Campaigns</li>
              <li>✔ ROI Focused Advertising</li>
              <li>✔ 24/7 Marketing Support</li>
            </ul>

            <button className="btn btn-primary rounded-pill mt-3" onClick={() => navigate("/contact")}>
              Start Your Campaign
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DigitalMarketing;