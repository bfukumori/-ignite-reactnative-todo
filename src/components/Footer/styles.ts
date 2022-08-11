import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Task } from "../../contexts/TaskContext";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const TasksHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: ${RFValue(55)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const TasksList = styled(
  FlatList as new (props: FlatListProps<Task>) => FlatList<Task>
)`
  margin: 0 24px;
  /* border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.colors.gray[400]}; */
`;
