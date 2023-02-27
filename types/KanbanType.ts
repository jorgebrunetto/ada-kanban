import { DragEndEvent } from "@dnd-kit/core";
import { TaskType } from "./TaskType";

export interface IKanbanContext {
  items: TaskType[];
  selectedCard: TaskType | null;
  updateCard: (cardUpdated: TaskType) => void;
  editCard: (id: string) => void;
  deleteCard: (id: string) => void;
  addCard: (props: { titulo: string; conteudo: string }) => void;
  moveCard: (props: { id: string; toList: string }) => void;
  handleDragEnd: (e: DragEndEvent) => void;
  deselectCard: () => void;
}

export interface KanbanContextProviderProps {
  children: React.ReactNode;
}
