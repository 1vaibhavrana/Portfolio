const About = () => {
  return (
    <section className="col-xxl-8 px-4 py-5" id="about">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {/* Video with background + shadow */}
        <div className="col-10 col-sm-8 col-lg-6">
          <div className="bg-white rounded-3 shadow-lg p-2">
            <video
              className="w-full img-fluid rounded-3"
              autoPlay
              muted
              loop
              playsInline
              // controls
            >
              <source src="about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            About Me
          </h1>
          <p className="lead">
            Hi! I'm <strong>Vaibhav Rana</strong>, a dedicated and enthusiastic
            web developer from India, currently pursuing my Bachelor of Computer
            Science and Engineering (CSE) at{" "}
            <strong>Chitkara University (2022-2026)</strong>.
            <br />
            <br />I specialize in building{" "}
            <strong>dynamic and robust web applications</strong> using the MERN
            stack. My passion lies in turning ideas into reality through clean,
            efficient, and scalable code.
            <br />
            <br />
            Turning ideas into cutting-edge web solutions—your go-to{" "}
            <strong>WEB developer.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
