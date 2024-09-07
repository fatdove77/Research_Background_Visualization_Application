import React, { useState, FormEvent } from 'react';
import { TextField, Grid,Button, Container, Typography, Box, Divider } from '@mui/material';
import axios from 'axios';
import login from '@/public/Login.png'
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import { LoginPost } from '@/request/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { log } from 'console';
interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await LoginPost(formData);
      console.log(response);
      if(response.data.code==-1){
        toast.error(response.data.message)
      }
      else if(response.data.code==0) {
        toast.error(response.data.message)
      }
      else{
        toast.success("login successfully")
        console.log(response.data.token);
        localStorage.setItem("userToken",response.data.token);
        localStorage.setItem("tokenTime",new Date().valueOf());
        router.push("/Home")
      }
      // Handle success - e.g., redirect to a dashboard, save the auth token, etc.
    } catch (err) {
      console.log(err);
      
      setError('Failed to login');
      // Handle error - e.g., show error message
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Grid
          container
          justifyContent={"center"}
        >
          <Image
            alt = ""
            src = {login}
            width={300}
            height = {50}
          >
          </Image>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            error={!!error}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!error}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <LoadingButton
            type="submit"
            style={{ backgroundColor: "#8adf19" }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Divider sx={{ my: 2 }}>JOIN</Divider>
          <LoadingButton 
            variant="contained" 
            color="primary" 
            fullWidth
            style={{ backgroundColor: "#1976d2" }}
            >
            Facebook
          </LoadingButton>
          <LoadingButton 
            variant="contained" 
            color="secondary" 
            fullWidth 
            sx={{ mt: 2 }}
            style={{ backgroundColor: "#9c27b0" }}
            >
            Google
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
