import {
  DndContext,
  PointerSensor,
  rectIntersection,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { Flex } from "@chakra-ui/react";

import { NewTask } from "components/NewTask";
import { Column } from "components/Coluns";

import { useKanban } from "hooks";

import { LISTAS } from "types/ColumnType";
import { TaskType } from "types/TaskType";

export const Kanban = () => {
  const { addCard, items, handleDragEnd } = useKanban();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Flex
        direction="column"
        align="center"
        overflowX="hidden"
        background="#1d2125"
        minHeight="100vh"
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          minHeight="100vh"
          width="100%"
          overflow="hidden"
        >
          <NewTask addCard={addCard} />

          <Flex flex="3" height="100%" wrap="wrap">
            {Object.keys(LISTAS).map(key => (
              <Column
                key={key}
                titulo={LISTAS[key]}
                items={items.filter(
                  (item: TaskType) => item.lista === LISTAS[key]
                )}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </DndContext>
  );
};
