import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { projects } from "../data/project";

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 960, mx: "auto" }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 1.5 }}>
            Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              maxWidth: 760,
            }}
          >
            A selection of my work across machine learning, software
            engineering, research, and product ideas.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {projects.map((project, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mb: 2 }}
                >
                  <Chip label={project.type} size="small" color="secondary" />
                  <Chip
                    label={project.status}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Stack>

                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ mb: 2.5 }}
                >
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  alignItems={{ xs: "stretch", sm: "center" }}
                >
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="contained"
                    >
                      View GitHub
                    </Button>
                  )}

                  <Button variant="text">Project Details</Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default Projects;