import { Box, Button, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material';

export default function ContactSection() {
  return (
    <Box component="section" id="contact" py={8}>
      <Container maxWidth="lg">
        <Typography variant="h4" textAlign="center" mb={4} fontWeight={700}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Visit our center
                </Typography>
                <Typography>123 Exam Drive, Education City, State</Typography>
                <Typography mt={2}>Phone: +91 98765 43210</Typography>
                <Typography>Email: <Link href="mailto:info@examcracker.com">info@examcracker.com</Link></Typography>
                <Button sx={{ mt: 3 }} variant="contained" href="mailto:info@examcracker.com">
                  Email Us
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Map location
                </Typography>
                <Box component="iframe" width="100%" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799076923!2d-74.25986768746499!3d40.69714941702825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1679021558848!5m2!1sen!2sin" loading="lazy" title="location map" style={{ border: 0, borderRadius: 16 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
