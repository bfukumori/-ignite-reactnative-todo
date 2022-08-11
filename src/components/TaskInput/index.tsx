import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { useTask } from "../../hooks/useTask";
import { TaskAddButton } from "../TaskAddButton";
import { Container, Input } from "./styles";

type FormData = {
  taskInput: string;
};

export function TaskInput() {
  const [isFocus, setIsFocus] = useState(false);
  const { colors } = useTheme();
  const { addTask } = useTask();
  const { control, handleSubmit, reset } = useForm<FormData>();

  function onFocus() {
    setIsFocus(true);
  }
  function onBlur() {
    setIsFocus(false);
  }

  function onSubmit(data: FormData) {
    addTask(data.taskInput);
    reset();
  }

  return (
    <Container>
      <Controller
        name="taskInput"
        control={control}
        rules={{
          required: true,
          validate: (value) => !!value.trim(),
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray[300]}
            onFocus={onFocus}
            onBlur={onBlur}
            isFocus={isFocus}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <TaskAddButton onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}
