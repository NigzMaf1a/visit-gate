import React, { useState, useEffect } from 'react';
import { Box, Flex, Text } from '@mantine/core';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
          <Box
        component="header"
        p="md"
        style={{
          backgroundColor: '#00580d',
          paddingRight: '1.5rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          position: 'fixed', 
          top: 0,             
          left: 0,
          width: '100%',      
          height: '90px',
          zIndex: 1000        
        }}
      >
      <Flex justify="space-between" align="center" gap="1.25rem">
        {/* Left: Date Badge */}
        <Text
          style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.025em',           
            position: 'relative',
            top: '5px',
            left: '35px'
          }}
        >
          {currentDate}
        </Text>

        {/* Center: Title */}
        <Text
          style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 600,
            textTransform: 'uppercase',
            flex: 1,
            textAlign: 'center',
            letterSpacing: '0.3em',
            margin: '0 20px',
            position: 'relative',
            top: '5px'
          }}
        >
          VISITOR GATE
        </Text>

        {/* Right: Time and Language */}
    
          <Text
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.025em',
              minWidth: 'fit-content',
              position: 'relative',
              top: '5px'
            

            }}
          >
            {timeString}
          </Text>

        
        </Flex>
      
    </Box>
  );
};

export default Header;