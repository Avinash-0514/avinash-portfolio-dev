import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Paper,
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
import { blogPosts } from "../data/blogPost";
import StorageIcon from "@mui/icons-material/Storage";
import LanguageIcon from "@mui/icons-material/Language";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HubIcon from "@mui/icons-material/Hub";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 1000, mx: "auto" }}>

        {/* HERO SECTION */}
        <Box
          sx={{
            pt: 6,
            pb: 6,
            px: { xs: 3, md: 5 },
            borderRadius: 4,
            mb: 6,
            background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            color: "white",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="overline" sx={{ opacity: 0.9 }}>
                Portfolio
              </Typography>

              <Typography variant="h1" sx={{ mt: 1, mb: 2, color: "white" }}>
                Hi, I’m Avinash D
              </Typography>

              <Typography
                variant="h5"
                sx={{ opacity: 0.9, mb: 2.5, fontWeight: 500, color: "white" }}
              >
                Software Developer | AI / ML Enthusiast
              </Typography>

              <Typography
                sx={{
                  maxWidth: 720,
                  opacity: 0.95,
                  mb: 4,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                I build software systems, explore machine learning and computer
                vision, and document my learning through projects, experiments,
                and technical writing.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "#2563eb",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                    },
                  }}
                >
                  View Projects
                </Button>

                <Button
                  component={RouterLink}
                  to="/blog"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  Read Blog
                </Button>

                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  About Me
                </Button>
              </Stack>
            </Box>

            {/* PROFILE CARD */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                minWidth: { xs: "100%", md: 260 },
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "rgba(255,255,255,0.2)",
                    color: "white",
                    fontSize: "2rem",
                  }}
                >
                  A
                </Avatar>

                <Typography variant="h6" sx={{ color: "white" }}>
                  Avinash D
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip
                    label=".NET"
                    size="small"
                    sx={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                  />
                  <Chip
                    label="React"
                    size="small"
                    sx={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                  />
                  <Chip
                    label="AI/ML"
                    size="small"
                    sx={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white" }}
                  />
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Box>

        {/* SKILLS / HIGHLIGHTS */}
        <Box sx={{ mb: 6 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: "primary.main", mb: 1 }}>
                  .NET
                </Typography>
                <Typography color="text.secondary">
                  Full stack development and structured backend systems.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: "secondary.main", mb: 1 }}>
                  AI / ML
                </Typography>
                <Typography color="text.secondary">
                  Computer vision, semi-supervised learning, and research.
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: "primary.dark", mb: 1 }}>
                  Writing
                </Typography>
                <Typography color="text.secondary">
                  Turning experiments and projects into blog posts.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
        <Box sx={{ mb: 6 }}>
  <Stack
    direction={{ xs: "column", sm: "row" }}
    justifyContent="space-between"
    alignItems={{ xs: "flex-start", sm: "center" }}
    sx={{ mb: 3 }}
    spacing={2}
  >
    <Typography variant="h2">Tech Stack</Typography>

    <Typography sx={{ color: "text.secondary" }}>
      Technologies I use across software and AI/ML projects
    </Typography>
  </Stack>

  <Box
    sx={{
      p: { xs: 3, md: 4 },
      borderRadius: 4,
      background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      border: "1px solid",
      borderColor: "divider",
    }}
  >
    <Stack
      direction="row"
      spacing={2}
      useFlexGap
      flexWrap="wrap"
    >
      <Chip
        icon={<DataObjectIcon />}
        label=".NET / C#"
        color="primary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
      <Chip
        icon={<LanguageIcon />}
        label="React / TypeScript"
        color="secondary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
      <Chip
        icon={<SmartToyIcon />}
        label="Python / ML"
        color="primary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
      <Chip
        icon={<StorageIcon />}
        label="PostgreSQL"
        color="secondary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
      <Chip
        icon={<HubIcon />}
        label="Computer Vision"
        color="primary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
      <Chip
        icon={<CloudQueueIcon />}
        label="Cloud / SaaS"
        color="secondary"
        variant="outlined"
        sx={{ px: 1, py: 2.5 }}
      />
    </Stack>
  </Box>
</Box>
        {/* FEATURED PROJECTS */}
        <Box sx={{ mb: 6 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            sx={{ mb: 3 }}
          >
            <Typography variant="h2">Featured Projects</Typography>

            <Button component={RouterLink} to="/projects">
              View all projects
            </Button>
          </Stack>

          <Stack spacing={3}>
            {featuredProjects.map((project, index) => (
              <Card key={index}>
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* BLOG POSTS */}
        <Box>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Latest Writing
          </Typography>

          <Stack spacing={3}>
            {featuredPosts.map((post) => (
              <Card key={post.slug}>
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography color="text.secondary">
                    {post.description}
                  </Typography>

                  <Button
                    component={RouterLink}
                    to={`/blog/${post.slug}`}
                    sx={{ mt: 1 }}
                  >
                    Read article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;