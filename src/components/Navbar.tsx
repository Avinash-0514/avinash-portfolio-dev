import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0, sm: 0 }, justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 700,
            }}
          >
            Avinash D
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: "text.secondary",
                  "&.active": {
                    color: "text.primary",
                    backgroundColor: "action.hover",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;