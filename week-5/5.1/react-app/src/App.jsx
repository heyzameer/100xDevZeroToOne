/* eslint-disable react/jsx-key */
import { useState } from 'react'

// simple syntax
// function App() {
//   const [count, setCount] = useState(0)

//   function onclickHandle(){
//     setCount(count + 1)
//   }

//   return (
//     <><div>
//         <button onClick={onclickHandle}> count is {count}</button>
//         </div>
//     </>
//   )
// }
// export default App




// using component
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//     <CustomButton count={count} setCount={setCount} />
//    </div>

//   )
// }

// // Component
// function CustomButton(props) {
  
//   function onClickHandle() {
//     props.setCount(props.count + 1); // Use props.count
//   }

//   return (
//     <button onClick={onClickHandle}>
//       Counter {props.count}
//     </button>
//   );
// }

// export default App;




// todo
// import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Buy groceries",
      description: "Purchase milk, eggs, bread, and vegetables.",
      completed: false,
    },
    {
      title: "Complete project report",
      description: "Finish writing the report and submit it to the manager by EOD.",
      completed: true,
    },
  ]);

  function addTodo(){
    setTodos([...todos,{
      title:"new Todo",
      description:"desc of new todo"
    }])
  }
  
  return (
    <>
    <div>
      {/* Pass each todo as a prop */}
      {/* <Todo
        title={todos[0].title}
        description={todos[0].description}
        completed={todos[0].completed}
      />
      <Todo
        title={todos[1].title}
        description={todos[1].description}
        completed={todos[1].completed}
      /> */}

      <button onClick={addTodo}>add todo</button>
      {/* using map*/}
      {todos.map(function(todo){
        return <Todo
        title={todo.title}
        description={todo.description}
        completed={todo.completed}
      />
      })}
</div>
</>
  );
}



// Component

function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Completed: {props.completed ? "Yes" : "No"}</p>
    </>
  );
}

export default App;

