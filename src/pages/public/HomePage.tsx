import { Container, Box, Typography } from '@mui/material';
import HomeHero from '../../components/public/HomeHero';
import CourseCards from '../../components/public/CourseCards';
import WhyChoose from '../../components/public/WhyChoose';
import ResultsSection from '../../components/public/ResultsSection';
import Testimonials from '../../components/public/Testimonials';
import ContactSection from '../../components/public/ContactSection';

export default function HomePage() {
  return (
    <Box>
      <HomeHero />
      <Container maxWidth="lg">
        <Box py={6}>
          <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
            Welcome to ExamCracker Tezu
          </Typography>
          <Typography align="center" color="text.secondary">
            A modern coaching institute dashboard and admissions platform for students and administrators.
          </Typography>
        </Box>
      </Container>
      <CourseCards />
      <WhyChoose />
      <ResultsSection />
      <Testimonials />
      <ContactSection />
    </Box>
  );
}
