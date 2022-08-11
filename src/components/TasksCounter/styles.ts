import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface TitleProps {
  title: string;
}

export const Container = styled.View`
  flex-direction: row;
`;
export const Title = styled.Text<TitleProps>`
  color: ${({ theme, title }) =>
    title === "Criadas" ? theme.colors.blue : theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  margin-right: 16px;
`;
export const Counter = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.gray[400]};
  font-size: ${RFValue(12)}px;
  text-align: center;
  border-radius: 999px;
  width: ${RFValue(25)}px;
  height: ${RFValue(19)}px;
`;
