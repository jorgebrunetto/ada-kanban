import { CSS } from "@dnd-kit/utilities";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";

import {
  FiChevronsLeft,
  FiChevronsRight,
  FiTrash2,
  FiEdit3,
} from "react-icons/fi";

import MarkdownContainer from "../Markdown";

import { useKanban } from "hooks";

import { TaskType } from "types/TaskType";

export const Card = ({ id, lista, titulo, conteudo }: TaskType) => {
  const { editCard, deleteCard, moveCard } = useKanban();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { id, titulo, conteudo, lista },
  });

  return (
    <Flex
      position="relative"
      direction="column"
      bg="white"
      zIndex={1}
      borderRadius={3}
      marginBottom={2}
      _hover={{ boxShadow: "0 0 6px #ffffffaa, inset 0 0 0px 3px #d1d1d1;" }}
      transform={CSS.Translate.toString(transform)}
    >
      {lista !== "Done" && (
        <Button
          color="gray.400"
          bgColor="transparent"
          _hover={{ color: "blue.500" }}
          _focus={{ bgColor: "transparent" }}
          onClick={() => editCard(id)}
          position="absolute"
          right={0}
          top={0}
          zIndex="1"
          title="Editar"
        >
          <FiEdit3 />
        </Button>
      )}
      <Flex
        w="100%"
        padding="2"
        justify="center"
        direction="column"
        gap="4px"
        style={{ textDecoration: lista === "Done" ? "line-through" : "" }}
        opacity={lista === "Done" ? 0.4 : 1}
        {...listeners}
        {...attributes}
        ref={setNodeRef}
      >
        <Text
          as="h2"
          fontWeight={600}
          maxW={300}
          overflow="hidden"
          whiteSpace="nowrap"
          paddingRight="40px"
          textOverflow="ellipsis"
          title={titulo}
        >
          {titulo}
        </Text>
        <hr />
        <MarkdownContainer conteudo={conteudo} />
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        direction="row"
        padding-top="10px"
        gap="16px"
        w="100%"
        padding="2"
        borderBottomRadius={8}
        borderTop="2px solid gray.500"
      >
        <Button
          title="Mover tarefa"
          disabled={lista === "ToDo"}
          color="gray.500"
          onClick={() => {
            if (lista === "ToDo") return;
            let toList;
            if (lista === "Doing") toList = "ToDo";
            if (lista === "Done") toList = "Doing";
            toList && moveCard({ id, toList });
          }}
        >
          <FiChevronsLeft />
        </Button>

        <Button
          title="Apagar tarefa"
          onClick={() => {
            deleteCard(id);
          }}
          hidden={lista === "Done"}
          color="red.400"
          _hover={{ bgColor: "red.100" }}
          _focus={{ bgColor: "red.100" }}
        >
          <FiTrash2 />
        </Button>

        <Button
          title="Mover tarefa"
          color="gray.500"
          disabled={lista === "Done"}
          onClick={() => {
            if (lista === "Done") return;
            let toList;
            if (lista === "Doing") toList = "Done";
            if (lista === "ToDo") toList = "Doing";
            toList && moveCard({ id, toList });
          }}
        >
          <FiChevronsRight />
        </Button>
      </Flex>
    </Flex>
  );
};
