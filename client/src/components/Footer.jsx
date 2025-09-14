import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Heart,
  Code,
  Coffee,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer
        className="position-relative py-5"
        style={{
          background: "linear-gradient(135deg, #2c3e50 0%, #4b5563 100%)",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Particles */}
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{ zIndex: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="position-absolute rounded-circle"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                background: "rgba(255, 255, 255, 0.1)",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `floatParticle ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-4">
            {/* Left Side - Brand & Message */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(45deg, #ff6b6b, #ffa500)",
                    animation: "logoSpin 10s linear infinite",
                  }}
                >
                  <Code size={24} color="white" />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Vaibhav Rana</h5>
                  <p className="mb-0 small opacity-75">
                    Crafting digital experiences
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="me-2">Made with</span>
                <Heart
                  size={16}
                  className="text-danger me-2"
                  style={{ animation: "heartBeat 1.5s ease-in-out infinite" }}
                />
                <span className="me-2">and</span>
                <Coffee
                  size={16}
                  className="me-2"
                  style={{ animation: "coffeeShake 2s ease-in-out infinite" }}
                />
                <span>by a passionate developer</span>
              </div>

              <p className="small opacity-75 mb-0">
                © {new Date().getFullYear()} MyPortfolio. All rights reserved.
              </p>
            </div>

            {/* Right Side - Social Media */}
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div className="text-center">
                <p className="mb-3 fw-semibold">
                  Let's Connect & Build Together
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon instagram"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                      color: "white",
                      textDecoration: "none",
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      boxShadow: "0 4px 15px rgba(225, 48, 108, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(-5px) rotate(360deg) scale(1.1)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(225, 48, 108, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform =
                        "translateY(0) rotate(0deg) scale(1)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(225, 48, 108, 0.3)";
                    }}
                  >
                    <Instagram size={20} />
                  </a>

                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon facebook"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(45deg, #1877f2, #42a5f5)",
                      color: "white",
                      textDecoration: "none",
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      boxShadow: "0 4px 15px rgba(24, 119, 242, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(-5px) rotate(-360deg) scale(1.1)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(24, 119, 242, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform =
                        "translateY(0) rotate(0deg) scale(1)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(24, 119, 242, 0.3)";
                    }}
                  >
                    <Facebook size={20} />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon twitter"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(45deg, #14171a, #000000)",
                      color: "white",
                      textDecoration: "none",
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      boxShadow: "0 4px 15px rgba(20, 23, 26, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-5px) scale(1.1)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(20, 23, 26, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(20, 23, 26, 0.3)";
                    }}
                  >
                    <Twitter size={20} />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon github"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "linear-gradient(45deg, #333, #24292e)",
                      color: "white",
                      textDecoration: "none",
                      transition:
                        "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      boxShadow: "0 4px 15px rgba(51, 51, 51, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform =
                        "translateY(-5px) rotate(360deg) scale(1.1)";
                      e.target.style.boxShadow =
                        "0 8px 25px rgba(51, 51, 51, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform =
                        "translateY(0) rotate(0deg) scale(1)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(51, 51, 51, 0.3)";
                    }}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes floatParticle {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.1;
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
              opacity: 0.3;
            }
          }

          @keyframes logoSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes heartBeat {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }

          @keyframes coffeeShake {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(5deg);
            }
            75% {
              transform: rotate(-5deg);
            }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
