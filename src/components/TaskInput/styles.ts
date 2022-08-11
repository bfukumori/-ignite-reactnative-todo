import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface InputProps {
  isFocus: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  position: absolute;
  top: -27px;
`;
export const Input = styled.TextInput<InputProps>`
  height: ${RFValue(54)}px;
  flex: 1;
  padding: 16px;
  border: 1px solid
    ${({ theme, isFocus }) =>
      isFocus ? theme.colors.purpleDark : theme.colors.gray[700]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray[500]};
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  margin-right: 4px;
`;
