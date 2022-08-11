import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox } from "../Checkbox";
import { Container, DeleteButton, Text } from "./styles";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from "react";
import { Task } from "../../contexts/TaskContext";
import { useTask } from "../../hooks/useTask";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isActive, setIsActive] = useState(false);
  const { colors } = useTheme();
  const { removeTask, toggleTask } = useTask();

  function onPressIn() {
    setIsActive(true);
    removeTask(task.id);
  }
  function onPressOut() {
    setIsActive(false);
  }

  return (
    <Container>
      <Checkbox task={task} onPress={() => toggleTask(task.id)} />
      <Text isChecked={task.isDone}>{task.title}</Text>
      <DeleteButton
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        isActive={isActive}
      >
        <AntDesign
          name="delete"
          size={RFValue(16)}
          color={isActive ? colors.danger : colors.gray[300]}
          isActive={isActive}
        />
      </DeleteButton>
    </Container>
  );
}
