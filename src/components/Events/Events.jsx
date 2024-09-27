import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import EventData from '../../data/resource.json'; 

const Events = () => {
  const events = EventData; 
  console.log(events)

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Find Your Next Events
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={3}>
        {events.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              {item ? (
                <img
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  alt={item['Event Name']}
                  src={"https://www.eventgroove.ca/wp-content/uploads/2020/08/EG-Homepage-Events.svg"}
                />
              ) : (
                <Skeleton variant="rectangular" width="100%" height={118} />
              )}
              {item ? (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {item['Event Name']}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Organization: {item.Organization}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    {item.Details}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Date: {item.Date}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Location: {item.Location}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    <a href={item.Website} target="_blank" rel="noopener noreferrer">
                      {item.Website}
                    </a>
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" color="red">
          <em>{EventData.disclaimer}</em>
        </Typography>
      </Box>
    </>
  );
};

export default Events;
