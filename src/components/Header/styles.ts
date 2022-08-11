import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(173)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;
