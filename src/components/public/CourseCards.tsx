import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

const courses = [
  { title: 'Class 8', description: 'Foundational classroom coaching for strong concepts and high scores.' },
  { title: 'Class 9', description: 'Structured coaching with practice tests and study planning.' },
  { title: 'Class 10', description: 'Exam-focused training for board success and competitive preparation.' },
  { title: 'NEET', description: 'Targeted biology and chemistry coaching for medical entrance preparation.' },
  { title: 'JEE', description: 'Advanced physics and math coaching with rigorous mock practice.' },
  { title: 'CUET', description: 'Exam strategy, current affairs, and subject coaching for CUET.' },
];

export default function CourseCards() {
  return (
    <Box component="section" id="courses" py={8}>
      <Typography variant="h4" textAlign="center" mb={4} fontWeight={700}>
        Courses We Offer
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={4} key={course.title}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={700}>
                    {course.title}
                  </Typography>
                  <Typography color="text.secondary">{course.description}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
