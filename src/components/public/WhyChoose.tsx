import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const cards = [
  'Experienced Teachers',
  'Smart Classes',
  'Weekly Tests',
  'Affordable Fees',
  'Personal Guidance',
  'Doubt Sessions',
];

export default function WhyChoose() {
  return (
    <Box component="section" id="about" py={8}>
      <Typography variant="h4" textAlign="center" mb={4} fontWeight={700}>
        Why Choose Us
      </Typography>
      <Grid container spacing={3}>
        {cards.map((title) => (
          <Grid item xs={12} sm={6} md={4} key={title}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {title}
                </Typography>
                <Typography color="text.secondary">Reliable support for every student journey.</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
