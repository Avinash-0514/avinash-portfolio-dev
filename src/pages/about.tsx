import PageContainer from "../components/PageContainer";

function About() {
  return (
    <PageContainer>
      <h1>About Me</h1>

      <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
        I am Avinash, a developer with experience in .NET full stack
        development. I am currently exploring AI and ML more deeply through
        academic research and practical implementation.
      </p>

      <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
        My interests include software engineering, machine learning, computer
        vision, SaaS product architecture, and technical blogging.
      </p>
    </PageContainer>
  );
}

export default About;