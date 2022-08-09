import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <Box
      px={6}
      py={4}
      bg="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={2}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          {/* <Img src={Logo} w="80px" /> */}
          <Text fontWeight={700} fontSize="22px">
            FISHING
          </Text>
        </Link>

        <Flex flexWrap="nowrap">
          <Box>
            <Link href="/signin">
              <Text fontWeight={500}>Войти</Text>
            </Link>
          </Box>

          <Box ml={4}>
            <Link href="/signup">
              <Text fontWeight={500}>Регистрация</Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
