import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export default function PageLaoad() {
  const [progress, setProgress] = useState(50);
 useEffect(() => {
    const timer = setInterval(() => {
      
      setProgress((prevProgress) => (prevProgress >= 50 ? 100 : prevProgress + 10));
    }, 800);
     return () => {
       clearInterval(timer);
     };
  }, []);

  return (
    <Box sx={{ width: '100%' }} className ="Load">
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
