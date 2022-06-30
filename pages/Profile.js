import Header from '../components/Header'
import { useAuth } from '../contexts/auth'
import { Box } from "@chakra-ui/react"
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Center } from '@chakra-ui/react'
import Footer from '../components/Footer'

export default function Profile() {
    const { user, login, logout } = useAuth();
    return (
        <ChakraProvider>
            <Box>
                <>
                    <Header pageName="Profile" color />
                    <Center bg="grey" color="white" padding={8} minH="85vh">
                        <Heading fontSize={30}>Coming Soon....</Heading>
                    </Center>
                    <Footer></Footer>
                </>
            </Box>
        </ChakraProvider>
    )
}
