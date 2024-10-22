import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h3" align="center">
          Welcome to ESeva FIR Management
        </Typography>
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Register and View FIRs Seamlessly!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
