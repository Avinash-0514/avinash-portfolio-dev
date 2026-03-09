import { Link as RouterLink } from "react-router-dom";
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
import { blogPosts } from "../data/blogPost";

function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 1.5 }}>
            Blog
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              maxWidth: 760,
            }}
          >
            Notes from my learning journey in software development, machine
            learning, computer vision, and research-driven engineering.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
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
                  <Chip label={post.category} size="small" />
                  <Chip label={post.date} size="small" variant="outlined" />
                  <Chip
                    label={post.readingTime}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  {post.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {post.description}
                </Typography>

                <Button
                  component={RouterLink}
                  to={`/blog/${post.slug}`}
                  variant="text"
                  sx={{ px: 0 }}
                >
                  Read article
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default Blog;