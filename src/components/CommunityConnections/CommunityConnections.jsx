import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CommunityConnections = ({ response, loading, error }) => {
  const centers = response.centers || [];

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Community Connections
        </Typography>
        {error && <Typography variant="body1" sx={{ color: 'red' }}>{error}</Typography>}
        {response && (
          <Typography variant="body1" color="#9d5a4d" sx={{ mb: 4 }}>
            {response.description}
          </Typography>
        )}
      </Box>

      <Grid container justifyContent="center" spacing={3}>
        {loading && <Typography>Loading...</Typography>}

        {(loading ? Array.from(new Array(2)) : centers).map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              {item ? (
                <img
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  alt={item.title}
                  src={"https://www.durhamchc.ca/wp-content/uploads/2024/01/Newcomers-Health-and-Wellness.png"}
                />
              ) : (
                <Skeleton variant="rectangular" width="100%" height={118} />
              )}
              {item ? (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    {item.address}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Supported Language: {item.language_support}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Programs Offered: {item.programs_offered}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Newcomer Friendly: {item.newcomer_friendly}
                  </Typography>
                  <Typography variant="body2" color="#973131">
                    Contact: {item.contact} •{' '}
                    <a href={item.website} target="_blank" rel="noopener noreferrer">
                      {item.website}
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
          <em>{response.disclaimer}</em>
        </Typography>
      </Box>
    </>
  );
};

export default CommunityConnections;
