import { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      setOpenSnackbar(true);
      handleLogin();  // Set authentication state
      setTimeout(() => navigate('/'), 1000);  // Redirect to Home Page
    } else {
      setError(true);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center">Login</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <Alert severity="error" sx={{ mt: 2 }}>Invalid Credentials</Alert>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Login
        </Button>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={3000}>
        <Alert severity="success">Login Successful!</Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
