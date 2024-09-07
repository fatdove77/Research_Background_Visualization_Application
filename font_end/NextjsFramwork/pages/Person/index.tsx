import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container, Typography, Paper, List, ListItem, ListItemText, Avatar, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// 先定义一个主题
const theme = createTheme({
  palette: {
    primary: {
      main: '#8adf19',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#8adf19',
          color: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 1,
        },
      },
    },
  },
});

function UserProfile() {
  // 假设的用户数据
  const user = {
    name: "李四",
    email: "11@example.com",
    researchInterests: ["机器学习", "自然语言处理"],
    avatarUrl: "http://example.com/avatars/lisi.jpg",
    updatedAt: "2024-05-03T10:19:22.853+00:00"
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
            User Profile
          </Typography>
          <List>
            <ListItem>
              <Avatar src={user.avatarUrl} sx={{ mr: 2 }}>
                <AccountCircleIcon />
              </Avatar>
              <ListItemText primary="Name" secondary={user.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={user.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Research Interests" secondary={user.researchInterests.join(', ')} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Updated" secondary={new Date(user.updatedAt).toLocaleString()} />
            </ListItem>
          </List>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            style = {{
              backgroundColor:"#8adf19",
              color:"white"
            }}
            >
            Edit Profile
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default UserProfile;
