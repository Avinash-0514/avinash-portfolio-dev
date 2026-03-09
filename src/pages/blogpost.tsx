import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PageContainer from "../components/PageContainer";
import { blogPosts } from "../data/blogPost";
import { blogContentStyle, markdownComponents } from "../styles/blogStyles";

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    if (!post) return;

    fetch(`/posts/${post.fileName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => {
        console.error("Error loading markdown:", error);
        setContent("Failed to load post content.");
      });
  }, [post]);

  if (!post) {
    return (
      <PageContainer>
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <Link
          to="/blog"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            textDecoration: "none",
            color: "#2563eb",
          }}
        >
          ← Back to Blog
        </Link>

        <h1 style={{ fontSize: "42px", marginBottom: "12px", lineHeight: 1.2 }}>
          {post.title}
        </h1>

        <p style={{ color: "#6b7280", marginBottom: "32px" }}>{post.date}</p>

        <article style={blogContentStyle}>
          <ReactMarkdown components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </PageContainer>
  );
}

export default BlogPost;