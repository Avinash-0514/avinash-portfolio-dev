import PageContainer from "../components/PageContainer";

function Contact() {
  return (
    <PageContainer>
      <h1>Contact</h1>

      <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
        I’m always interested in discussing software development, AI/ML
        projects, research ideas, and engineering opportunities.
      </p>

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gap: "16px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Email</h3>
          <p style={{ marginBottom: 0, color: "#4b5563" }}>
            your-email@example.com
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>LinkedIn</h3>
          <p style={{ marginBottom: 0, color: "#4b5563" }}>
            Add your LinkedIn profile link here
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>GitHub</h3>
          <p style={{ marginBottom: 0, color: "#4b5563" }}>
            Add your GitHub profile link here
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

export default Contact;