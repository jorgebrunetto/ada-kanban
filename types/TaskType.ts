export interface TaskType {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}

export interface NewTaskProps {
  addCard: (props: { titulo: string; conteudo: string }) => void;
}
