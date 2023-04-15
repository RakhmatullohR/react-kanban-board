import React from 'react';
import Task from '../Task';
import { Droppable } from 'react-beautiful-dnd';
import { Container, Title, TaskList } from './style';

export default function Column({ title, tasks, id }) {
  return (
    <Container className='column'>
      <Title>{title}</Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks?.map((task, index) => (
              <Task key={index} index={index} task={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
