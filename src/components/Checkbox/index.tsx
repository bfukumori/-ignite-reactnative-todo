import { Container } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Task } from "../../contexts/TaskContext";
import { PressableProps } from "react-native";

interface Props extends PressableProps {
  task: Task;
}

export function Checkbox({ task, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container isChecked={task.isDone} {...rest}>
      {task.isDone && (
        <Ionicons name="checkmark" size={RFValue(8)} color={colors.gray[100]} />
      )}
    </Container>
  );
}
