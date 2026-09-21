import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");

    let hasError = false;

    // Check email
    if (email.trim() === "") {
      setEmailError("Email is required");
      hasError = true;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        setEmailError("Please enter a valid email");
        hasError = true;
      }
    }

    // Check password
    if (password.trim() === "") {
      setPasswordError("Password is required");
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
  }

  function handleGoogleLogin() {
    console.log("Google login clicked");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "white",
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 1 }}
        >
          Welcome Back
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Please enter your details to login
        </Typography>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="example@email.com"
            value={email}
            error={emailError !== ""}
            helperText={emailError}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailError("");
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            error={passwordError !== ""}
            helperText={passwordError}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError("");
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 1 }}
          />

          <Typography
            variant="body2"
            textAlign="right"
            sx={{
              mb: 3,
              cursor: "pointer",
              color: "primary.main",
            }}
          >
            Forgot password?
          </Typography>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.3,
              textTransform: "none",
              fontSize: 16,
            }}
          >
            Login
          </Button>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ my: 2 }}
          >
            or
          </Typography>

          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={handleGoogleLogin}
            sx={{
              py: 1.2,
              textTransform: "none",
            }}
          >
            Sign in with Google
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          sx={{ mt: 3 }}
        >
          Don't have an account?{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;