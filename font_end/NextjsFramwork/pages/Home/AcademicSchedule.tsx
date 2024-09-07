// 导入所需的 MUI 组件
import React from 'react';
import { Container, Grid,Box, Typography, List, ListItem, ListItemText, Divider, IconButton, Paper, InputBase, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AlarmIcon from '@mui/icons-material/Alarm';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useSchedule } from '@/hooks/useSchedule';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from 'dayjs'
// 假设数据结构
interface ScheduleItem {
  id: number;
  title: string;
  speaker: string;
  time: string;
  location: string;
  description: string;
}

// 示例日程数据
const scheduleData: ScheduleItem[] = [
  {
    id: 1,
    title: 'Machine Learning and AI',
    speaker: 'Jane Doe',
    time: '10:00 AM',
    location: 'Room 1',
    description: 'An introduction to Machine Learning and Artificial Intelligence.'
  },
  // ... 更多日程项
];



const handleBack = () => {
  window.history.back(); // 使用window.history.back()返回上一页
};

const AcademicSchedule = () => {
  // 搜索逻辑和日程渲染将在这里实现
  const {
    schedules,
    addSchedule
  } = useSchedule()
  return (
    <Container>
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
          <Typography sx = {{fontSize:"1.7rem"}} gutterBottom>
          Conference Schedule
          </Typography>
          <IconButton sx={{ visibility: 'hidden' }}> {/* Invisible placeholder to balance the layout */}
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mb: 4 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search schedule"
            inputProps={{ 'aria-label': 'search schedule' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <List>
          {schedules && schedules.map((item: any) => (
            <React.Fragment key={item?.name}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={item.title}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {dayjs(item?.start_time).format("YYYY-MM-DD")}-{dayjs(item?.end_time).format("YYYY-MM-DD")}
                      </Typography><br></br>
                      {item.fullName}<br></br>
                      <Typography component="span" variant="body2" color="text.primary">
                        {
                          item?.topics.map((topic: any) => {
                            return (
                              <Typography component="span" variant="body2" color="text.primary">
                                {`${topic}  `} 
                              </Typography>
                            )
                          })
                        }
                      </Typography>
                    </>
                  }
                />
                <IconButton 
                  onClick = {()=>{
                    addSchedule(item?._id)
                  }}
                  edge="end"
                  aria-label="go to event">
                  <EventNoteIcon />
                </IconButton>
                <IconButton edge="end" aria-label="set alarm">
                  <AlarmIcon />
                </IconButton>
                <IconButton edge="end" aria-label="add note">
                  <NoteAddIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AcademicSchedule;
