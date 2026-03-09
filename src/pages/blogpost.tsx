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
import { blogPosts } from "../data/blogPost";

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
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Post not found
        </Typography>

        <Button component={RouterLink} to="/blog" variant="text" sx={{ px: 0 }}>
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        <Button
          component={RouterLink}
          to="/blog"
          variant="text"
          sx={{ px: 0, mb: 3 }}
        >
          ← Back to Blog
        </Button>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          sx={{ mb: 2 }}
        >
          <Chip label={post.category} size="small" />
          <Chip label={post.date} size="small" variant="outlined" />
          <Chip label={post.readingTime} size="small" variant="outlined" />
        </Stack>

        <Typography
          variant="h2"
          sx={{
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.05rem",
            mb: 4,
          }}
        >
          {post.description}
        </Typography>

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
          }}
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
      </Box>
    </Container>
  );
}

export default BlogPost;