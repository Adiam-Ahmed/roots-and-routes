import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useAuth } from '../../context/AuthContext.jsx';


const CommunityConnections = () => {
  const { user } = useAuth();
  console.log(user);
    return (
      <Typography>Welcome to Community Connections</Typography>
  )
}

export default CommunityConnections