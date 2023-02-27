import { KanbanContext } from "contexts";
import { useContext } from "react";
import { IKanbanContext } from "types/KanbanType";

export function useKanban(): IKanbanContext {
  return useContext(KanbanContext);
}
