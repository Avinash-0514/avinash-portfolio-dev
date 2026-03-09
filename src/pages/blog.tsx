import PageContainer from "../components/PageContainer";
import { blogPosts } from "../data/blogPost";

function Blog() {
  return (
    <PageContainer>
      <h1>Blog</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              padding: "24px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{post.title}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
              {post.description}
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Date:</strong> {post.date}
            </p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

export default Blog;