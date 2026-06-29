import { Box, Grid, Paper, Typography } from '@mui/material';

const cards = [
  { label: "Today's Leads", value: '24' },
  { label: 'Admissions', value: '12' },
  { label: 'Pending Followups', value: '8' },
  { label: 'Total Students', value: '310' },
];

export default function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.label}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="subtitle2" color="text.secondary">
                {card.label}
              </Typography>
              <Typography variant="h4" fontWeight={700} mt={1}>
                {card.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
