 <!-- Basic Map Example -->

 <!-- When element is being dynamically rendered, It is always a good approch to use a unique element as a key, But here we do not have other option  -->

export default function BasicMapExample(){
    const arr = ["Justin","Ed","Charlie","Ariana"];
    
    return (
        <ul>
            {arr.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        
    )
}
--------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------
 <!-- Map Example -->
 <!-- Use an array of objects. Here's an example where each object represents a person, and we want to display their name and age dynamically: -->

 <!-- App.js -->
import Sample from './Sample'
export default function BasicMapExample(){

    const userData = [
        {personId:1,name:"Justin Bieber",age:29},
        {personId:2,name:"Ed Sheeran",age:34},
        {personId:3,name:"Charlie Puth",age:32},
        {personId:4,name:"Ariana Grande",age:32},
        {personId:5,name:"Alec Benjamin",age:30}
    ];
    
    return (
        <Sample data={userData}/>
    )
}

<!-- Sample.jsx -->

import React from 'react';

const Sample = ({ data }) => {
    return (
        <>
           <div className = "container">
                <h4> Here's a User information </h4>
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                    {data.map((item,index)=>(
                        <div key={item.personId} >
                            <h4 >Person name : {item.name}</h4>
                            <p>{item.age}</p>
                        </div>
                    ))}
                    
                </div>
           </div>
        </>
    );
};

export default Sample;

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



<!-- Map Example -->

import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;




------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- Map Example -->
<!-- Create a React component that dynamically renders a list of tasks from an array of objects. Each task should display its name and status ("Complete" or "Incomplete"). Use conditional rendering to display the task's status in different colors:

Green for "Complete"
Red for "Incomplete" -->


<!-- App.js -->
import React from 'react';
import TaskList from './TaskList';

const App = () => {
  const tasks = [
    { id: 1, name: 'Task 1', status: 'Complete' },
    { id: 2, name: 'Task 2', status: 'Incomplete' },
    { id: 3, name: 'Task 3', status: 'Complete' },
    { id: 4, name: 'Task 4', status: 'Incomplete' }
  ];

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;



<!-- Sample.jsx -->
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            color: task.status === 'Complete' ? 'green' : 'red'
          }}
        >
          <strong>{task.name}</strong>: {task.status}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


<!-- Problem Statement -->
<!-- Create a React component that dynamically renders a list of users from an array of objects. Each user should display their name and online status ("Online" or "Offline"). Use conditional rendering to display the user's online status in different colors:

Green for "Online"
Gray for "Offline"
The App.js component will pass the list of users as props to the child component UserList.js. -->


<!-- App.js -->
import React from 'react';
import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Alice', status: 'Online' },
    { id: 2, name: 'Bob', status: 'Offline' },
    { id: 3, name: 'Charlie', status: 'Online' },
    { id: 4, name: 'Daisy', status: 'Offline' }
  ];

  return (
    <div>
      <h1>User Status</h1>
      {/* Passing users array as props */}
      <UserList users={users} />
    </div>
  );
};

export default App;

<!-- UserList.js -->

import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          style={{
            color: user.status === 'Online' ? 'green' : 'gray'
          }}
        >
          <strong>{user.name}</strong>: {user.status}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
