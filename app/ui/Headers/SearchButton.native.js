import React from "react";
import { Button, Box } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

FontAwesome.loadFont();

function UI({ navigation }) {
  const navigateHandler = () => {
    navigation.navigate("result");
  };

  return (
    <Box>
      <Button
        onPress={navigateHandler}
        rounded="100"
        bgColor="gray.100"
        p="10px"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <FontAwesome name="search" size={16} color="#a1a1aa" />
      </Button>
    </Box>
  );
}
export default UI;
