import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const FIRList = () => {
  const firs = [
    { id: 1, description: 'Theft at Sector 5' },
    { id: 2, description: 'Accident on Highway 7' },
    { id: 3, description: 'Vandalism in Park Area' },
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center">FIR List</Typography>
      <List>
        {firs.map((fir) => (
          <ListItem key={fir.id}>
            <ListItemText primary={`FIR #${fir.id}`} secondary={fir.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FIRList;
