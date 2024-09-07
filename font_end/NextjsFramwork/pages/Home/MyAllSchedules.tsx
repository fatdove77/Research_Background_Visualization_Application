import React, { useEffect, useState } from 'react';
import {
  Container, Box, Typography, List, ListItem, ListItemText, CircularProgress, Divider,
  IconButton, ListItemSecondaryAction, SwipeableDrawer, Button, Grid
} from '@mui/material';
import { useHome } from '@/hooks/useHome';
import SearchIcon from '@mui/icons-material/Search';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AlarmIcon from '@mui/icons-material/Alarm';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useSchedule } from '@/hooks/useSchedule';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from "dayjs"
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
const MyAllSchedules = () => {
  const {
    loading,
    mySchedules,
    deleteSchedule
  } = useHome()


  const handleBack = () => {
    window.history.back(); // 使用window.history.back()返回上一页
  };


  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center"
          }}
        >
          <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start' }} aria-label="返回">
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontSize: "1.7rem" }} gutterBottom>
            My Scheduled Events
          </Typography>
          <IconButton sx={{ visibility: 'hidden' }}> {/* Invisible placeholder to balance the layout */}
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <List>
          {loading ? (
            <CircularProgress />
          ) : (
            mySchedules && mySchedules.map((event:any, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {event.fullName}
                        </Typography><br></br>
                        {event.description}<br></br>
                        {dayjs(event.start_time).format("YYYY-MM-DD")}-{dayjs(event.end_time).format("YYYY-MM-DD")}
                      </>
                    }
                  />
                  <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={() => deleteSchedule(event._id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))
          )}
        </List>
      </Box>
    </Container>
  );
};

export default MyAllSchedules;
