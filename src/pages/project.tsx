import PageContainer from "../components/PageContainer";
import { projects } from "../data/project";

function Projects() {
  return (
    <PageContainer>
      <h1>Projects</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{project.title}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              {project.description}
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Projects;