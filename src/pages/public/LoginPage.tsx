import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const loginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(6, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const body = await response.json();
      if (body.token) {
        localStorage.setItem('exam_cracker_token', body.token);
      }

      navigate('/admin');
    } catch (err) {
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <Box py={8}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
              Admin Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={3}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        {...field}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                      />
                    )}
                  />
                </Grid>
                {error && (
                  <Grid item xs={12}>
                    <Typography color="error">{error}</Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large" disabled={isSubmitting} fullWidth>
                    Login
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
