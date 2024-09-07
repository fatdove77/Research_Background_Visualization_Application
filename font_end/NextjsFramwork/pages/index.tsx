import * as React from 'react';
import logo from '@/public/logo.jpg'
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, Typography } from '@mui/material';
export interface IAppProps {
}

export default function App(props: IAppProps) {

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={"center"}
      flexDirection={'column'}
      padding={"1rem"}
    >
      <Grid
        sx={{
          backgroundColor: "#282828",
          width: "21rem",
          height: "21rem",
          borderRadius: '24px'
        }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '20px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 600,
            lineHeight: '24px',
            margin: "1rem"
          }}
        >
          Innovative Tech
        </Typography>
        <Grid
          container
          justifyContent={'center'}
          alignItems={"center"}
        >
          <Image
            alt=""
            src={logo}
            style={{
              width: "9.375rem",
              height: "9.375rem",
              marginTop: "1.6875rem"
            }} />
        </Grid>
      </Grid>
      <Grid
        container
      >
        <Typography
          sx={{
            color: '#030303',
            fontSize: '24px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 600,
            lineHeight: '32px',
            marginTop: "2rem"
          }}
        >
          Innovative Tech
        </Typography>
      </Grid>
      <Grid
        container
      >
        <Typography
          sx={{
            color: '#030303',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro',
            lineHeight: '24px',
            marginTop:".5rem"
          }}
        >
          Stay organized with CSConference for seamless conference management and networking opportunities.'
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx = {{
          marginTop: "2rem"
        }}
        gap={".5rem"}
      >
        <LoadingButton
          variant="contained"
          sx={{
            cursor: 'pointer',
            width: '20rem',
            height: '48px',
            padding: '0px 8px',
            border: '0',
            boxSizing: 'border-box',
            borderRadius: '24px',
            color: '#ffffff',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 600,
            lineHeight: '24px',
            outline: 'none',
          }}
          style={{ backgroundColor: "#8adf19" }}
        >
          Explore
        </LoadingButton>
        <LoadingButton
          variant="contained"
          sx={{
            cursor: 'pointer',
            width: '20rem',
            height: '48px',
            padding: '0px 8px',
            border: '0',
            boxSizing: 'border-box',
            borderRadius: '24px',
            color: '#ffffff',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 600,
            lineHeight: '24px',
            outline: 'none',
          }}
          style={{ backgroundColor: "#8adf19" }}
        >
          Access Account
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
