import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const results = [
  { name: 'Amit Kumar', percentage: '97.4%', rank: '1', board: 'CBSE' },
  { name: 'Priya Singh', percentage: '95.8%', rank: '2', board: 'State Board' },
  { name: 'Rahul Sharma', percentage: '94.6%', rank: '3', board: 'ICSE' },
];

export default function ResultsSection() {
  return (
    <Box component="section" id="results" py={8} bgcolor="#f8fbff">
      <Typography variant="h4" textAlign="center" mb={4} fontWeight={700}>
        Top Results
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {results.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.name}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  {result.name}
                </Typography>
                <Typography>{result.board}</Typography>
                <Typography mt={1}>Percentage: {result.percentage}</Typography>
                <Typography>Rank: {result.rank}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
