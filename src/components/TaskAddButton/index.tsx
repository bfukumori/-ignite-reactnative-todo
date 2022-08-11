import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { PressableProps } from "react-native";

export function TaskAddButton({ ...rest }: PressableProps) {
  const [isActive, setIsActive] = useState(false);
  const { colors } = useTheme();

  function onPressIn() {
    setIsActive(true);
  }
  function onPressOut() {
    setIsActive(false);
  }

  return (
    <Container
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      isActive={isActive}
      {...rest}
    >
      <AntDesign
        name="pluscircleo"
        size={RFValue(16)}
        color={colors.gray[100]}
      />
    </Container>
  );
}
