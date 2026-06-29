import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const testimonials = [
  { name: 'Rita', quote: 'The mentors helped me improve my confidence and score significantly.', course: 'JEE' },
  { name: 'Karan', quote: 'A very supportive coaching environment with regular tests and feedback.', course: 'NEET' },
  { name: 'Anjali', quote: 'Clear doubt sessions and structured classes made all the difference.', course: 'CUET' },
];

export default function Testimonials() {
  return (
    <Box component="section" id="testimonials" py={8}>
      <Typography variant="h4" textAlign="center" mb={4} fontWeight={700}>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((item) => (
          <Grid item xs={12} md={4} key={item.name}>
            <Card>
              <CardContent>
                <Typography variant="body1" mb={2}>
                  “{item.quote}”
                </Typography>
                <Typography fontWeight={700}>{item.name}</Typography>
                <Typography color="text.secondary">{item.course} student</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
