import React from 'react';
import { IconButton, TextField, Grid, Button, Card, CardContent, Typography, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useGetProfile from '@/hooks/useGetProfile';
import { useSearchPaper } from '@/hooks/useSearchPaper';
import { createContainer, useContainer } from 'unstated-next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const AcademicSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {
    info,
    searchName
  } = useSearchPaper()

  const handleBack = () => {
    window.history.back(); // 使用window.history.back()返回上一页
  };

  const handleSearch = () => {
    // Implement search functionality
    searchName(searchQuery)
    console.log(`Searching for ${searchQuery}`);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
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
          <Typography variant="h4" component="h1" gutterBottom>
            Academic Search
          </Typography>
          <IconButton sx={{ visibility: 'hidden' }}> {/* Invisible placeholder to balance the layout */}
            <ArrowBackIcon />
          </IconButton>
        </Grid>

        <Box sx={{ width: '100%', marginTop: 3 }}>
          <TextField
            fullWidth
            label="Search for articles, authors..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  endIcon={<SearchIcon />}
                  style={{
                    backgroundColor: "#8adf19"
                  }}
                >
                  Search
                </Button>
              ),
            }}
          />
        </Box>
        {
          info && info.map((item: any, index: number) => {
            return (
              <Card
                sx={{ width: '100%', marginTop: 3 }}
                key={item?.snippet}
                onClick={() => {
                  window.location.href = `${item?.link}`
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item?.title}
                  </Typography>
                  <Typography sx={{
                    mb: 1.5,
                    color: "text.secondary",
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '100%', // 定义一个宽度是重要的，否则ellipsis可能不生效
                  }} color="text.secondary">
                    {item?.publication_info?.summary}
                  </Typography>
                  <Typography variant="body2">
                    {item?.snippet}
                  </Typography>
                </CardContent>
              </Card>
            )
          })
        }
        <Grid
          sx={{
            height: "10rem"
          }}
        ></Grid>
      </Box>
    </Container>
  );
};

export default AcademicSearch;
