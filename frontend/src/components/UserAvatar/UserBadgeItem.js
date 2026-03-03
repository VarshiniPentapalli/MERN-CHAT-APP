import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      fontSize={12}
      bg="purple.500"
      color="white"
      cursor="pointer"
      display="flex"
      alignItems="center"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon ml={1} />
    </Box>
  );
};

export default UserBadgeItem;
