import PageContainer from "../components/PageContainer";
import { projects } from "../data/project";

function Projects() {
  return (
    <PageContainer>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "12px" }}>Projects</h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          A selection of my work across machine learning, software engineering,
          research, and product ideas.
        </p>

        <div style={{ display: "grid", gap: "20px" }}>
          {projects.map((project, index) => (
            <article
              key={index}
              style={{
                padding: "24px",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "14px",
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#f3f4f6",
                    color: "#374151",
                    fontWeight: 500,
                  }}
                >
                  {project.type}
                </span>

                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    backgroundColor: "#ecfeff",
                    color: "#155e75",
                    fontWeight: 500,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "24px",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "999px",
                      backgroundColor: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#2563eb",
                    fontWeight: 600,
                  }}
                >
                  View on GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Projects;