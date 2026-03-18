import { Link as RouterLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { projects } from "../data/project";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    if (!project) return;

    fetch(`/posts/${project.reportFile}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => setContent(text))
      .catch((error) => {
        console.error("Error loading markdown:", error);
        setContent("Failed to load project content.");
      });
  }, [project]);

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Project not found
        </Typography>

        <Button component={RouterLink} to="/projects" variant="text" sx={{ px: 0 }}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        <Button
          component={RouterLink}
          to="/projects"
          variant="text"
          sx={{ px: 0, mb: 3 }}
        >
          ← Back to Projects
        </Button>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          <Chip label={project.type} size="small" color="secondary" />
          <Chip label={project.status} size="small" color="primary" variant="outlined" />
        </Stack>

        <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.2 }}>
          {project.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.05rem",
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 4 }}>
          {project.techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>

        {project.githubUrl && (
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{ mb: 4 }}
          >
            View GitHub
          </Button>
        )}

        <Box
          sx={{
            color: "text.primary",
            "& h1": {
              fontSize: "2.2rem",
              fontWeight: 700,
              lineHeight: 1.2,
              mt: 4,
              mb: 2,
            },
            "& h2": {
              fontSize: "1.7rem",
              fontWeight: 700,
              lineHeight: 1.3,
              mt: 4,
              mb: 2,
            },
            "& h3": {
              fontSize: "1.3rem",
              fontWeight: 600,
              lineHeight: 1.4,
              mt: 3,
              mb: 1.5,
            },
            "& p": {
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "text.secondary",
              mb: 2,
            },
            "& ul, & ol": {
              pl: 3,
              mb: 2,
              color: "text.secondary",
            },
            "& li": {
              mb: 1,
              lineHeight: 1.8,
            },
            "& code": {
              backgroundColor: "grey.100",
              px: 0.75,
              py: 0.25,
              borderRadius: 1,
              fontSize: "0.95rem",
              fontFamily: "monospace",
            },
            "& pre": {
              backgroundColor: "grey.100",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
              mb: 2,
            },
            "& pre code": {
              backgroundColor: "transparent",
              p: 0,
            },
            "& blockquote": {
              borderLeft: "4px solid",
              borderColor: "primary.main",
              pl: 2,
              ml: 0,
              color: "text.secondary",
              fontStyle: "italic",
            },
            "& img": {
              maxWidth: "100%",
              borderRadius: 2,
              my: 2,
            },
          }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectDetails;