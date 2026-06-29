import { useMemo } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Checkbox,
  Typography,
} from '@mui/material';

const admissionSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    studentMobile: z.string().min(10, 'Valid mobile number is required'),
    parentMobile: z.string().min(10, 'Valid mobile number is required'),
    email: z.string().email('Valid email is required'),
    currentClass: z.string().min(1, 'Please select a class'),
    courseInterested: z.string().min(1, 'Course interest is required'),
    city: z.string().min(1, 'City is required'),
    consent: z.boolean(),
  })
  .refine((data) => data.consent === true, {
    message: 'You must accept the terms',
    path: ['consent'],
  });

type AdmissionFormValues = z.infer<typeof admissionSchema>;

export default function AdmissionPage() {
  const defaultValues = useMemo(
    () => ({
      firstName: '',
      lastName: '',
      studentMobile: '',
      parentMobile: '',
      email: '',
      currentClass: '',
      courseInterested: '',
      city: '',
      consent: false,
    }),
    [],
  );

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<AdmissionFormValues> = async (values) => {
    try {
      await fetch('/api/createStudent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      reset();
      alert('Lead submitted successfully.');
    } catch (error) {
      console.error(error);
      alert('Unable to submit the form right now.');
    }
  };

  return (
    <Box py={8}>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
              Student Admission Enquiry
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="First Name"
                        {...field}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Last Name"
                        {...field}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="studentMobile"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Student Mobile"
                        {...field}
                        error={!!errors.studentMobile}
                        helperText={errors.studentMobile?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="parentMobile"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Parent Mobile"
                        {...field}
                        error={!!errors.parentMobile}
                        helperText={errors.parentMobile?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Email"
                        {...field}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="currentClass"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Current Class"
                        {...field}
                        error={!!errors.currentClass}
                        helperText={errors.currentClass?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="courseInterested"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Course Interested"
                        {...field}
                        error={!!errors.courseInterested}
                        helperText={errors.courseInterested?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="City"
                        {...field}
                        error={!!errors.city}
                        helperText={errors.city?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} checked={field.value} />}
                        label="I agree to be contacted regarding this admission enquiry."
                      />
                    )}
                  />
                  {errors.consent && (
                    <Typography color="error" variant="body2">
                      {errors.consent.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
                    Submit Enquiry
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
