import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function login(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Login
      </Typography>

      <form onSubmit={login}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          error={!!error}
          helperText={error}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;