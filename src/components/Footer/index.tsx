import React from "react";
import { Task } from "../../contexts/TaskContext";
import { useTask } from "../../hooks/useTask";
import { EmptyList } from "../EmptyList";
import { TaskInput } from "../TaskInput";
import { TaskItem } from "../TaskItem";
import { TasksCounter } from "../TasksCounter";
import { Container, TasksHeader, TasksList } from "./styles";

export function Footer() {
  const { tasks } = useTask();

  return (
    <Container>
      <TaskInput />
      <TasksHeader>
        <TasksCounter title="Criadas" />
        <TasksCounter title="Concluídas" />
      </TasksHeader>
      <TasksList
        ListEmptyComponent={<EmptyList />}
        data={tasks}
        keyExtractor={(item: Task) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </Container>
  );
}
