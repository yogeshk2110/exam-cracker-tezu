import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function HomeHero() {
  return (
    <Box component={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} py={8} bgcolor="#eef5ff">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="flex-start">
          <Typography variant="overline" color="primary">
            Admission Open
          </Typography>
          <Typography variant="h3" fontWeight={700} maxWidth={680}>
            Join the best coaching institute for exam success and confidence.
          </Typography>
          <Typography variant="body1" maxWidth={600}>
            Expert faculty, personalized guidance, mock tests, and result-driven classroom training across all boards and entrance exams.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" size="large" href="#admission">
              Enquire Now
            </Button>
            <Button variant="outlined" color="primary" size="large" href="#courses">
              Explore Courses
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
