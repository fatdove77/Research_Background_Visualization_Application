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
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useShowData } from '@/hooks/useShowData.tsx';
import { Spin, Table } from 'antd';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ReactEcharts from "echarts-for-react"
import echarts from "echarts";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function PersonPage() {
  const {
    person,
    dataLoading,
    citedGraph,
    citedTable,
    columns,
    articles,
    relatedAuthor,
    ccfOption
  } = useShowData()
  const router = useRouter()

  const styles = {
    Header: {
      top: '0px',
      left: '0px',
      width: '100%', // Set to 100% to span the full width of the viewport
      height: '64px',
      backgroundColor: '#282828',
    },
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  return (
    <Grid
      container
      flexDirection={'column'}
    >
      <AppBar position="static" style={styles.Header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon
              onClick={() => {
                router.back()
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
              textAlign: 'center',
            }}>
              个人主页
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* profile information */}
      {
        dataLoading
          ? <Grid
            container
            flexDirection={'column'}
            padding={"1rem"}
          >
            <Typography sx={{
              color: '#030303',
              fontSize: '1.25rem',
              fontFamily: 'Source Sans Pro',
              fontWeight: 600,
              lineHeight: '24px',
              marginBottom: "1rem"
            }} >
              Profile Information
            </Typography>
            <Card sx={{
              minWidth: 275,
              bgcolor: '#f0f4f8', // 浅灰蓝色背景
              boxShadow: 3, // 阴影效果
            }}>
              <CardContent>
                <Grid
                  container
                  alignItems={"center"}
                >
                  <Grid
                    sx={{
                      width: "6rem",
                      height: "8rem"
                    }}
                  >
                    <img
                      alt="Profile Photo"
                      src={person?.author?.thumbnail}
                      style={{ width: "5rem", height: "5rem" }}
                      width={70}
                      height={70}>
                    </img>
                  </Grid>
                  <Grid
                    item
                    container
                    flexDirection={'column'}
                    sx={{
                      flex: 1
                    }}
                  >
                    <Typography variant="h5" component="div">
                      {person?.author.name}
                    </Typography>
                    <Typography sx={{ mb: 0.5 }} color="text.secondary">
                      {person?.author.affiliations}
                    </Typography>
                    <Typography sx={{ mb: .5 }} variant="body1">
                      {person?.author.email}
                    </Typography>
                    {
                      person?.author?.interests &&
                      person.author.interests.map((item: any, index: any) => {
                        return (
                          <Typography key={index} variant="body2">
                            {item?.title}
                          </Typography>
                        )
                      })
                    }
                    <LoadingButton size="small"
                      // variant='contained'
                      onClick={() => {
                        window.location.href = `${person?.search_metadata?.google_scholar_author_url
                          }`
                      }}
                      style={{
                        backgroundColor: '#8adf19',
                        color: "#fff"
                      }}
                    >
                      Go to google scholar
                    </LoadingButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="citations" {...a11yProps(0)} />
                  <Tab label="paper" {...a11yProps(1)} />
                  <Tab label="co_authors" {...a11yProps(2)} />
                  <Tab label="paper classification" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {/* //引用图表 */}
                <ReactEcharts option={citedGraph} />
                <ReactEcharts option={citedTable} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Table
                  columns={columns}
                  dataSource={articles}
                  key={""}
                ></Table>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <List dense={true}>
                  {relatedAuthor&&relatedAuthor?.map((user:any, index:number) => (
                    <ListItem
                      key={user.name}
                      secondaryAction={
                        <IconButton edge="end" aria-label="details">
                          <ArrowForwardIosIcon 
                            onClick = {()=>{
                              router.push({
                                pathname: "PersonPage",
                                query: {
                                  author_id: user.author_id
                                }
                              })
                            }}
                          />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar alt={user.name} src={user.thumbnail} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.name}
                        secondary={
                          <>
                            {user.affiliations}
                            <br />
                            {user.email }
                          </>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <ReactEcharts option={ccfOption} />
              </CustomTabPanel>
            </Box>

            <Grid
              sx={{
                height: "10rem"
              }}
            ></Grid>
          </Grid>
          : <Grid container sx={{ height: "100vh" }} alignItems="center" justifyContent="center">
            <Spin></Spin>
          </Grid>
      }

    </Grid>

  )
}

export default PersonPage