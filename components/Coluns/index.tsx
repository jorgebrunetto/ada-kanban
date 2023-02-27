import { Flex, Text } from "@chakra-ui/react";

import { useDroppable } from "@dnd-kit/core";

import { Card } from "components/Card";
import { ColunsProps } from "types/ColumnType";

export function Column({ titulo, items }: ColunsProps) {
  const { setNodeRef } = useDroppable({
    id: titulo,
  });

  return (
    <Flex flex="2" padding="3" flexDirection="column" minHeight="100vh">
      <Flex
        ref={setNodeRef}
        backgroundColor="#262b31"
        flex="1"
        padding="3"
        flexDirection="column"
      >
        <Text as="h3" color="gray.200" mb={4}>
          {titulo}
        </Text>

        {items.map(({ titulo, conteudo, id, lista }, key) => (
          <Card
            key={key}
            id={id}
            lista={lista}
            titulo={titulo}
            conteudo={conteudo}
          />
        ))}
      </Flex>
    </Flex>
  );
}
