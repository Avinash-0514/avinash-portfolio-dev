import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { blogPosts } from "../data/blogPost";

function Blog() {
  return (
    <PageContainer>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "12px" }}>Blog</h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Notes from my learning journey in software development, machine
          learning, computer vision, and research-driven engineering.
        </p>

        <div style={{ display: "grid", gap: "20px" }}>
          {blogPosts.map((post) => (
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

              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "24px",
                  lineHeight: 1.3,
                }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "#111827",
                  }}
                >
                  {post.title}
                </Link>
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: 1.7,
                  marginBottom: "18px",
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
      </div>
    </PageContainer>
  );
}

export default Blog;