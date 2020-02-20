import React from 'react';
import NavbarComponent from "./Common/Navbar/Navbar";
import {Provider} from "react-redux";
import {store} from "./Store";
import TodosList from "./Components/Todos/TodosList";

function App() {
  return (
    <Provider store={store}>
        <NavbarComponent />
        <TodosList />
    </Provider>
  );
}

export default App;
