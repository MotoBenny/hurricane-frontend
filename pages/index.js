import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import { Box } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react";
import { Center } from '@chakra-ui/react'
import Footer from '../components/Footer'

export default function Home() {
  const { user, login, logout } = useAuth();
  return (
    <ChakraProvider>
      <Box>
        <>
          <Header pageName="色色" />
          <Center bg="grey" color="white" padding={8} minH="80vh">
            {!user && <LoginForm onSubmit={login} />}
          </Center>
          <Footer />
        </>
      </Box>
    </ChakraProvider>
  )
}
