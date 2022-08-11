import uuid from "react-native-uuid";
import { useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";

interface TaskContextProviderProps {
  children: ReactNode;
}
export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (value: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(value: string) {
    const tempTasksArray = tasks.map((task) => task);
    const newTask = {
      id: String(uuid.v4()),
      title: value,
      isDone: false,
    };
    setTasks([...tempTasksArray, newTask]);
  }

  function toggleTask(id: string) {
    const tempTasksArray = tasks.map((task) => task);
    const updatedTask = tempTasksArray.find((task) => task.id === id);
    updatedTask!.isDone = !updatedTask?.isDone;
    setTasks([...tempTasksArray]);
  }

  function removeTask(id: string) {
    const filteredArray = tasks.filter((task) => task.id !== id);
    setTasks(filteredArray);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
}
