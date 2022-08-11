import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface DeleteButtonProps {
  isActive: boolean;
}

interface TextProps {
  isChecked: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
`;

export const Text = styled.Text<TextProps>`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.gray[300] : theme.colors.gray[100]};
  margin-left: 16px;
  margin-right: 8px;

  ${({ isChecked }) =>
    isChecked &&
    css`
      text-decoration: line-through;
    `}
`;

export const DeleteButton = styled.Pressable<DeleteButtonProps>`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray[400] : theme.colors.gray[500]};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
