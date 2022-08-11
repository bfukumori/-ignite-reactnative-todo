import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isChecked: boolean;
}

export const Container = styled(Pressable)<ContainerProps>`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  ${({ theme, isChecked }) =>
    isChecked &&
    css`
      background-color: ${theme.colors.purpleDark};
      border-width: 0;
    `}
`;
