import React from "react";
import { Button, Text } from "native-base";
import { FaRegComment } from "react-icons/fa";

function UI() {
  const toggleButton = (e) => {
    console.log("Comment List ToggleButton");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14" }}
      p="2"
      m="1"
      bgColor="transparent"
      leftIcon={<FaRegComment color="#a1a1aa" size="17" />}
      _hover={{ bgColor: "gray.100" }}
      onPress={toggleButton}
    >
      Bình luận
    </Button>
  );
}
export default UI;