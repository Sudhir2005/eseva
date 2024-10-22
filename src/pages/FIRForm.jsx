import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

const FIRForm = () => {
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`FIR Registered: ${details}`);
    setDetails('');  // Clear form after submission
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center">Register FIR</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="FIR Details"
          fullWidth
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FIRForm;
