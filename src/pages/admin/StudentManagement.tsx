import { useQuery } from '@tanstack/react-query';
import { Box, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { getStudents } from '../../services/studentService';

export default function StudentManagement() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Unable to load students.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Student Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((student: any) => (
                <TableRow key={student._id}>
                  <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                  <TableCell>{student.parentMobile || student.studentMobile}</TableCell>
                  <TableCell>{student.currentClass}</TableCell>
                  <TableCell>{student.courseInterested}</TableCell>
                  <TableCell>{student.status}</TableCell>
                  <TableCell>{new Date(student.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No student leads found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
