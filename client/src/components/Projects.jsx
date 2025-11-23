import { useState, useEffect } from "react";
import axios from "axios";



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const res = await axios.get(`${apiUrl}/api/projects`);
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <></>;

  return (
    <>
      <section className="text-center container" id="projects">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              My Projects
            </h1>

            <p className="lead text-body-secondary">
              Here are some of my projects.
            </p>
          </div>
        </div>

        {/* Added justify-content-center to auto-center cards */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
          {projects.map((project) => {
            return (
              <div className="col" key={project._id}>
                <div className="card bg-light shadow-lg overflow-hidden h-100">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      className="card-img-top"
                      alt={project.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <div
                    className="card-body d-flex flex-column"
                    style={{ height: "350px" }}
                  >
                    <h5 className="card-title text-start mb-3">
                      {project.title}
                    </h5>

                    <div
                      className="flex-grow-1 overflow-auto mb-3"
                      style={{ maxHeight: "200px" }}
                    >
                      <p
                        className="card-text text-start"
                        style={{ textAlign: "justify" }}
                      >
                        {project.description}
                      </p>

                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies?.map((tech, idx) => (
                          <span
                            className="badge bg-secondary fw-light"
                            key={idx}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.liveUrl}
                        className="btn btn-primary btn-sm px-3 py-2 d-flex align-items-center gap-2"
                        style={{ textDecoration: "none" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                          <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                        Live Demo
                      </a>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.githubUrl}
                        className="btn btn-outline-dark btn-sm px-3 py-2 d-flex align-items-center gap-2"
                        style={{ textDecoration: "none" }}
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
