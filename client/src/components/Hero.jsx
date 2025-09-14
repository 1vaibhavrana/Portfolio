import { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showIcon, setShowIcon] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Vaibhav_Rana.pdf";
    link.download = "Vaibhav_Rana_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 shadow border"
        src="/Vaibhav.jpg"
        alt="Vaibhav Rana"
        width={120}
        style={{ borderRadius: "50%" }}
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        <ReactTyped
          strings={["Hello, I am Vaibhav Rana"]}
          typeSpeed={50}
          showCursor={false}
        />
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          <ReactTyped
            strings={["Software Developer."]}
            typeSpeed={50}
            startDelay={2000} // waits until first line finishes
            showCursor={false}
            onComplete={() => setShowIcon(true)}
          />
          {showIcon && <FaCoffee className="text-yellow-700" />}
        </p>

        {/* Attractive Buttons */}
        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mt-4">
          {/* My Resume Button */}
          <button
            type="button"
            className="btn px-5 py-3 fw-bold rounded-pill border-0 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "white",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-3px)";
              e.target.style.boxShadow = "0 10px 20px rgba(79, 70, 229, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.boxShadow = "0 5px 10px rgba(79, 70, 229, 0.3)";
            }}
            onClick={downloadResume}
          >
            📄 My Resume
          </button>

          {/* Let's Connect Button */}
          <a
            href="#contact"
            type="button"
            className="btn px-5 py-3 fw-bold rounded-pill border-0 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #f43f5e, #e11d48)",
              color: "white",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-3px)";
              e.target.style.boxShadow = "0 10px 20px rgba(244, 63, 94, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.boxShadow = "0 5px 10px rgba(244, 63, 94, 0.3)";
            }}
          >
            🤝 Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
