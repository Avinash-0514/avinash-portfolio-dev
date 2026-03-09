import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

function Home() {
  return (
    <PageContainer>
      <section style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <p
          style={{
            marginBottom: "12px",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          Portfolio
        </p>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Hi, I’m Avinash D
        </h1>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: "20px",
            color: "#374151",
          }}
        >
          Software Developer | AI/ML Enthusiast
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            maxWidth: "760px",
            color: "#4b5563",
          }}
        >
          I am a software developer with a background in .NET and a growing
          focus on AI, machine learning, and intelligent systems. I enjoy
          building practical software, exploring research-driven solutions, and
          documenting my learning journey through projects and technical writing.
        </p>

        <div style={{ display: "flex", gap: "16px", marginTop: "28px" }}>
          <Link to="/projects">
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              View Projects
            </button>
          </Link>

          <Link to="/blog">
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              Read Blog
            </button>
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button
            style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                backgroundColor: "#fff",
                cursor: "pointer",
            }}
            >
            View Resume
            </button>
        </a>
        </div>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h3 style={{ marginBottom: "16px" }}>Featured Areas</h3>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Machine Learning and Computer Vision</h4>
            <p style={{ marginBottom: 0, color: "#4b5563" }}>
              Exploring deep learning, object detection, and research-driven AI
              projects.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>.NET and React Development</h4>
            <p style={{ marginBottom: 0, color: "#4b5563" }}>
              Building structured, practical web applications with modern
              frontend and backend technologies.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <h4 style={{ marginTop: 0 }}>Technical Writing and Documentation</h4>
            <p style={{ marginBottom: 0, color: "#4b5563" }}>
              Turning project work and experiments into clear, story-driven
              engineering blog posts.
            </p>

          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default Home;