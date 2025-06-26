import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Box,
  Button,
  Menu,
  Group,
  Stack,
  Text,
  Flex,
  rem,
} from '@mantine/core';

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'SWA', name: 'Swahili' },
    { code: '橘子', name: 'Mandarin' },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.code);
  };

  return (
    <Flex direction="column" justify="flex-start" h="100vh">
      <Box
  bg="#e6fbe9"
  shadow="sm"
  p="md"
  style={{
    position: 'fixed',     
    top: 0,                
    left: 0,
    width: '100%',       
    maxWidth: '1300px',   
    margin: '0 auto',      
    zIndex: 1000,          
  
    
  }}
>

        <Group position="apart">
          {/* Colored Bars */}
          <Group spacing="xs">
            <Box
              style={{
                width: rem(48),
                height: rem(10),
                backgroundColor: '#08cd24',
                borderRadius: '999px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Box
              style={{
                width: rem(48),
                height: rem(10),
                backgroundColor: '#6c50ef',
                borderRadius: '999px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Box
              style={{
                width: rem(48),
                height: rem(10),
                backgroundColor: '#6c50ef',
                borderRadius: '999px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Group>

          {/* Language Dropdown */}
          <Menu
            width={200}
            shadow="md"
            position="bottom-end"
            withArrow
            style={{
              left: "900px"
            }}
          >
            <Menu.Target>
              <Button
                rightSection={
                  <ChevronDown
                    style={{
                      transition: 'transform 0.2s',
                      transform: 'rotate(0deg)',
                    }}
                    size={16}
                  />
                }
                bg="#6c50ef"
                color="white"
                radius="md"
                px="md"
              >
                {selectedLanguage}
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Stack spacing={0}>
                {languages.map((language) => (
                  <Menu.Item
                    key={language.code}
                    onClick={() => handleLanguageSelect(language)}
                    bg={
                      selectedLanguage === language.code
                        ? 'indigo.1'
                        : undefined
                    }
                    fw={selectedLanguage === language.code ? 500 : 400}
                    color={
                      selectedLanguage === language.code
                        ? 'indigo.7'
                        : 'dark'
                    }
                  >
                    <Group position="apart">
                      <Text>{language.name}</Text>
                      <Text size="xs">
                        {language.code}
                      </Text>
                    </Group>
                  </Menu.Item>
                ))}
              </Stack>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Box>
    </Flex>
  );
}
