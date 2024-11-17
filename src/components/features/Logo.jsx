'use client';

import { Image, Box, Text } from '@chakra-ui/react';

const Logo = ({ src, alt }) => {
  return (
    <Box
  flex={1}
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  
  padding="20px"
  
>
  <Image 
     
    src={src} 
    alt={alt} 
    maxWidth="500px" 
  />
  <Text>Manage your Order</Text>
  <Text>Manage your Order</Text>
  <Text>Manage your Order</Text>
</Box>

  );
};

export default Logo;
