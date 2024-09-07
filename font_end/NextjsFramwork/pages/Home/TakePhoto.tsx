import React from 'react'
import logo from '@/public/logo.jpg'
import Image from 'next/image';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid, Typography } from '@mui/material';
import CameraComponent from '@/component/Camera'
function TakePhoto(){
  return (
    <Box>
      <CameraComponent></CameraComponent>
    </Box>

  )
}

export default TakePhoto