import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { projects } from "../data/project";
import { blogPosts } from "../data/blogPost";

function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <PageContainer>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <section style={{ paddingTop: "32px", paddingBottom: "48px" }}>
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
              fontSize: "44px",
              lineHeight: 1.2,
              marginBottom: "16px",
              color: "#111827",
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
              lineHeight: 1.8,
              maxWidth: "760px",
              color: "#4b5563",
              marginBottom: "28px",
            }}
          >
            I build software systems, explore machine learning and computer
            vision, and document my learning through projects, experiments, and
            technical writing.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
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

            <Link to="/contact">
              <button
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
              >
                Contact Me
              </button>
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ margin: 0 }}>Featured Projects</h2>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#2563eb", fontWeight: 600 }}
            >
              View all projects →
            </Link>
          </div>

          <div style={{ display: "grid", gap: "20px" }}>
            {featuredProjects.map((project, index) => (
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

                <h3 style={{ marginTop: 0, marginBottom: "12px" }}>{project.title}</h3>

                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ margin: 0 }}>Latest Writing</h2>
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "#2563eb", fontWeight: 600 }}
            >
              View all posts →
            </Link>
          </div>

          <div style={{ display: "grid", gap: "20px" }}>
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
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
                    {post.category}
                  </span>

                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 style={{ marginTop: 0, marginBottom: "12px" }}>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "#111827" }}
                  >
                    {post.title}
                  </Link>
                </h3>

                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: 1.7,
                    marginBottom: "16px",
                  }}
                >
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "#2563eb",
                    fontWeight: 600,
                  }}
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
}

export default Home;