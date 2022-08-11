import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled(Pressable)<ContainerProps>`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.blue : theme.colors.blueDark};
`;
