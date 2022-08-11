import { Container, Subtitle, Title } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";
import React from "react";

export function EmptyList() {
  const { colors } = useTheme();
  return (
    <Container>
      <MaterialCommunityIcons
        name="clipboard-text-outline"
        size={RFValue(56)}
        color={colors.gray[400]}
      />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Container>
  );
}
