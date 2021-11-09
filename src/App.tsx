import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList'

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <h2>
          TODO LIST
        </h2>
      </Header>
      <TodoList />
    </AppContainer>
  );
}

export default App;
