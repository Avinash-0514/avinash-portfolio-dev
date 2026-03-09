import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Contact
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          If you'd like to discuss projects, research, or collaboration,
          feel free to reach out.
        </Typography>
      </Box>

      <Card
        elevation={0}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5">Get in Touch</Typography>

            <Stack spacing={2} alignItems="center">
              <Button
                variant="contained"
                href="mailto:your-email@example.com"
              >
                Email Me
              </Button>

              <Button
                variant="outlined"
                href="https://github.com/Avinash-0514"
                target="_blank"
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                href="https://linkedin.com"
                target="_blank"
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contact;