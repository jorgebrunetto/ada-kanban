import { useState, useEffect } from "react";

import { Flex, Text, Input, Textarea, Button } from "@chakra-ui/react";

import { useKanban } from "hooks";
import { FiSave } from "react-icons/fi";
import { NewTaskProps } from "types/TaskType";

export const NewTask = ({ addCard }: NewTaskProps) => {
  const { updateCard, selectedCard, deselectCard } = useKanban();

  const [titulo, setTitle] = useState<string>(
    selectedCard ? selectedCard.titulo : ""
  );
  const [conteudo, setContent] = useState<string>(
    selectedCard ? selectedCard.conteudo : ""
  );

  useEffect(() => {
    setTitle(selectedCard ? selectedCard.titulo : "");
    setContent(selectedCard ? selectedCard.conteudo : "");
  }, [selectedCard]);

  const handleAddCard = () => {
    if (titulo !== "" && conteudo !== "") {
      if (selectedCard) {
        updateCard({
          id: selectedCard.id,
          lista: selectedCard.lista,
          titulo,
          conteudo,
        });
      } else {
        addCard({ titulo, conteudo });
      }

      setTitle("");
      setContent("");
    }
  };

  return (
    <Flex
      flex={1}
      paddingX="3"
      paddingY="5"
      direction="column"
      alignItems="flex-start"
      gap="1px"
      backgroundColor="black"
      borderRight="1px solid"
      borderRightColor="gray.600"
    >
      <Text textAlign="center" color="white" marginTop={3}>
        {selectedCard === null ? "Nova tarefa" : "Editar tarefa"}
      </Text>

      <Input
        type="text"
        padding={4}
        onChange={e => setTitle(e.target.value)}
        value={titulo}
        placeholder="Nome da tarefa"
        bg="white"
        marginTop={4}
        borderRadius={0}
        height={12}
      />

      <Textarea
        onChange={e => setContent(e.target.value)}
        value={conteudo}
        placeholder="Descrição da tarefa"
        borderRadius={0}
        rows={7}
        bg="white"
      />

      <Flex
        width="100%"
        padding={4}
        justify="space-between"
        backgroundColor="white"
      >
        {selectedCard && (
          <Button
            onClick={deselectCard}
            variant="ghost"
            color="red.300"
            _hover={{ bgColor: "transparent", color: "red.200" }}
          >
            Cancelar
          </Button>
        )}

        {selectedCard ? (
          <Button
            variant="solid"
            bg="green.400"
            color="white"
            onClick={handleAddCard}
            _hover={{ bgColor: "green.300" }}
            disabled={titulo === "" || conteudo === ""}
          >
            <Flex marginRight={2}>
              <FiSave />
            </Flex>
            Salvar
          </Button>
        ) : (
          <Button
            variant="solid"
            bg="green.300"
            onClick={handleAddCard}
            margin="auto"
            disabled={titulo === "" || conteudo === ""}
            color="white"
            _hover={{ bgColor: "green.400" }}
          >
            <Flex marginRight={2}>
              <FiSave />
            </Flex>
            Adicionar
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
