'use client';

import { Box, Flex, Input, Text, Link, VStack, Icon } from '@chakra-ui/react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Field } from '../ui/field';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { PasswordInput } from '../ui/password-input';
// import { FaInstagram } from "react-icons/fa";

const SignInForm = () => {
  return (
    <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required').max(20, 'Must be 20 characters or less'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
    >
        {formik => (
          <Box p={8} bg="white" color={'black'} borderRadius="2xl" shadow="md">
          <Form onSubmit={formik.handleSubmit}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Sign in
              </Text>
              <Text fontSize="sm" mb={6}>
                Enter your email address and password to access admin panel.
              </Text>
              <VStack spacing={4}>
                <Field label="Email">
                  <Input border="none" borderBottom={"1px solid black"} p={"10px"} name="email" placeholder="Email" />
                </Field>
                <Field label="Password">
                  <PasswordInput p={"10px"} border="none" borderBottom={"1px solid black"} name="password" placeholder="Password" />
                </Field>
              </VStack>
              <Flex justify="space-between" mt={4}>
                <Checkbox>Remember me</Checkbox>
                {/* <Link href="/forgot-password" color="blue.500">
                  Forgot password?
                </Link> */}
                <Button borderRadius="lg" p="10px" colorPalette="teal" variant="solid">Sign in</Button>
              </Flex>
              <Flex justify="space-between">
              <Text mt={4}>
                Dont have an account?{' '}
                <Link href="/sign-up" color="blue.500">
                  Sign up
                </Link>
              </Text>
            {/* <Flex justify="center" mt={4}>
                <Link href="https://www.instagram.com/" color="blue.500" mx={2}>
                  <Icon size={"md"}>
                      <FaInstagram />
                  </Icon>
                </Link>
              
            </Flex> */}
            </Flex>
          </Form>
        </Box>
        )}
    </Formik>
  );
};

export default SignInForm;
