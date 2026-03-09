import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            About Me
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              mb: 2.5,
            }}
          >
            I’m Avinash D, a software developer with a background in .NET full
            stack development and a growing specialization in AI, machine
            learning, and computer vision.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              mb: 2.5,
            }}
          >
            I enjoy building practical software systems, learning how
            intelligent models work, and turning my experiments into structured
            technical writing. My work sits at the intersection of software
            engineering, machine learning, research, and problem solving.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.1rem",
              lineHeight: 1.9,
            }}
          >
            I am currently pursuing my Master’s studies in New Zealand, where my
            interests have expanded into research-driven AI/ML topics such as
            object detection, semi-supervised learning, evaluation metrics, and
            real-world intelligent systems.
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ mb: 2.5 }}>
            What I Work On
          </Typography>

          <Stack spacing={3}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  .NET and Web Development
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Building structured web applications and backend systems using
                  .NET, React, and modern software development practices.
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Machine Learning and Research
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Exploring CNNs, YOLO-based detection, semi-supervised
                  learning, performance evaluation, and research-oriented model
                  experimentation.
                </Typography>
              </CardContent>
            </Card>

            <Card
              elevation={0}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  Technical Writing and Documentation
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Turning project work, experiments, and learning experiences
                  into clear blog posts and engineering documentation that can
                  support both learning and career growth.
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Career Direction
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              lineHeight: 1.9,
            }}
          >
            I’m especially interested in roles that combine software
            engineering, backend systems, machine learning, computer vision, and
            applied AI. My long-term goal is to grow into a strong engineer who
            can build both scalable applications and meaningful intelligent
            systems.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;