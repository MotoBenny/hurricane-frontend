import { Flex } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <Flex columnGap="1em" alignContent="center" justifyContent="center">
                <p className="copyright_nomargin">
                    &copy;  Team North-Pac 2022
                </p>
            </Flex>
        </footer>
    )
};
export default Footer;
