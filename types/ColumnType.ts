import { TaskType } from "./TaskType";

export const LISTAS: any = {
  todo: "ToDo",
  doing: "Doing",
  done: "Done",
};

export interface ColunsProps {
  titulo: string | any;
  items: TaskType[];
}
