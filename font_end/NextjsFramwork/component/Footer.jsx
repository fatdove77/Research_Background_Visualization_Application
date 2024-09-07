import React, { useEffect, useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Paper from '@mui/material/Paper';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { useRouter } from 'next/router';
function Footer() {
  const [value, setValue] = React.useState('Home');
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    //路由跳转
    router.push(`/${newValue}`)
  };

  useEffect(() => {
    console.log(router?.pathname.split('/'));
  })

  return (
    <div className="w-full ">
      {
        router?.pathname.split('/')[1] === '' 
        || router?.pathname.split('/')[1] == 'Login'
        || router?.pathname.split('/')[2] == 'TakePhoto'
        ?
          <></>
          :
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#282828',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                value="Home"
                icon={
                  <HomeIcon
                    sx={{
                      color: '#ffffff',
                      fill: '#ffffff',
                      fontSize: '24px',
                    }}
                  />
                }
              />
              <BottomNavigationAction
                value="Meeting"
                icon={
                  <MeetingRoomIcon
                    sx={{
                      color: '#ffffff',
                      fill: '#ffffff',
                      fontSize: '24px',
                    }}
                  />
                }
              />
              <BottomNavigationAction
                value="Person"
                icon={
                  <PersonIcon
                    sx={{
                      color: '#ffffff',
                      fill: '#ffffff',
                      fontSize: '24px',
                    }}
                  />
                }
              />
              <BottomNavigationAction
                value="Social"
                icon={
                  <Diversity3Icon
                    sx={{
                      color: '#ffffff',
                      fill: '#ffffff',
                      fontSize: '24px',
                    }}
                  />
                }
              />
              <BottomNavigationAction
                value="Setting"
                icon={
                  <BrightnessHighIcon
                    sx={{
                      color: '#ffffff',
                      fill: '#ffffff',
                      fontSize: '24px',
                    }}
                  />
                }
              />

            </BottomNavigation>
          </Paper>
      }
    </div>
  )
}

export default Footer