'use client';

import { Box, Container, Flex,Link} from '@chakra-ui/react';
import SignInForm from '@/components/features/SignForms';
import Logo from '@/components/features/Logo';


const LoginPage = () => {

  return (
    <Box bg="gray.50" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Container maxW="container.xl" bg="white" mt={10} padding={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          {/* Left Section */}
          <Box flex={1} textAlign="center" bg={"teal.600"} borderRadius="3xl" mb={{ base: 6, lg: 0 }} mr={{ md: 4 }}>
            <Logo src="/Images/logo-quilvian-2.png" alt="Logo" ml="10" />
          </Box>

          {/* Right Section */}
          <Box flex={1} position={"relative"} left={"-50px"}>
            <SignInForm />
            {/* Social Media Links */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default LoginPage;
