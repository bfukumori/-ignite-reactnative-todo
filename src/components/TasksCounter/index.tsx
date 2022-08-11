import React from "react";
import { useTask } from "../../hooks/useTask";
import { Container, Counter, Title } from "./styles";

interface TasksCounterProps {
  title: string;
}

export function TasksCounter({ title }: TasksCounterProps) {
  const { tasks } = useTask();
  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter((task) => task.isDone).length;

  return (
    <Container>
      <Title title={title}>{title}</Title>
      <Counter>{title === "Criadas" ? totalTasks : totalDoneTasks}</Counter>
    </Container>
  );
}
