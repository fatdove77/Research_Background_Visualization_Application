import React, { useState, useRef, useEffect } from 'react';
import { PassImg } from '@/request/api';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import Image from 'next/image';
import { Grid, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import useGetProfile from '@/hooks/useGetProfile';
import { useRouter } from 'next/router';
import { createContainer, useContainer } from 'unstated-next';
import { Spin } from 'antd';
function DetectResult() {
  const router = useRouter()
  const {
    profile,
    jumpToDetail,
    loading
  } = useGetProfile.useContainer()

  const items = [
    { name: 'John Doe', quote: 'Innovative search feature for', email: 'john.doe@example.com' },
    { name: 'Jane Smith', quote: 'Interactive conference experience', email: 'jane.smith@example.com' },
    { name: 'Mike Johnson', quote: 'Keynote speaker', email: 'mike.johnson@example.com' },
    { name: 'Anna Williams', quote: 'Research paper', email: 'anna.williams@example.com' },
  ];

  const styles = {
    Header: {
      top: '0px',
      left: '0px',
      width: '100%', // Set to 100% to span the full width of the viewport
      height: '64px',
      backgroundColor: '#282828',
    },
  };

  // 自定义主题颜色
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8adf19', // 主色
      },
      secondary: {
        main: green[500], // 次要色
      },
    },
    components: {
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: '#8adf19', // 主文本颜色
          },
          secondary: {
            color: 'rgba(0, 0, 0, 0.6)', // 次要文本颜色
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(138, 223, 25, 0.5)', // 分隔线颜色
          },
        },
      },
    },
  });

  return (
    <Box>
      <AppBar position="static" style={styles.Header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon
              onClick={() => {
                router.push("/Home")
              }}
            />
          </IconButton>
          <Grid
            container
            justifyContent={"center"}
          >
            <Typography variant="h6" color="inherit" sx={{
              color: '#ffffff',
              fontSize: '20px',
              fontFamily: 'Source Sans Pro',
              fontWeight: 600,
              lineHeight: '20px',
              flexGrow: 1,  // 添加flexGrow属性
              textAlign: 'center',  // 确保文本居中
              display: 'flex',  // 使用flexbox布局
              alignItems: 'center',  // 垂直居中
              justifyContent: 'center'  // 水平居中
            }}>
              识别结果
            </Typography>
            <div style={{ width: "1.5rem" }}></div> {/* 这是一个空占位元素，它的宽度等于IconButton，确保标题居中 */}
          </Grid>
        </Toolbar>
      </AppBar>
      {
        loading ? <Grid container sx={{ height: "100vh" }} alignItems="center" justifyContent="center">
          <Spin></Spin>
        </Grid>
          : <Grid>
            <ThemeProvider theme={theme}>
              <List component="nav" aria-label="mailbox folders">
                {profile && profile.map((item: any, index: number) => (
                  <React.Fragment key={item.email}>
                    <ListItem
                      onClick={() => {
                        jumpToDetail(item.author_id)
                      }}
                      style={{
                        backgroundColor: index % 2 === 0
                          ? 'rgba(138, 223, 25, 0.15)'
                          : 'white'
                      }}
                    >
                      <ListItemText
                        primary={item?.name ?? ''}
                        secondary={
                          <React.Fragment>
                            {`Cited By: ${item?.cited_by ?? 'N/A'}`}
                            <br />
                            {`Email: ${item?.email ?? 'N/A'}`}
                            <br />
                            {`Link: ${item?.link ?? 'N/A'}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    {index < items.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </ThemeProvider>
          </Grid>
      }
    </Box>

  )
}

export default DetectResult;