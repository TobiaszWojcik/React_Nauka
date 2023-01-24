import { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id: 123, name:"Zrobić pranie", complited:false, description:"Pranie kolorowe"},
        {id: 124, name:"Wynieść śmieci", complited:true, description:""},
        {id: 143, name:"Rozpisać treningi", complited:false, description:"Treningi siłowe na ten tydzień"},
        {id: 723, name:"Trening", complited:false, description:"Trening: klatka, nogi, biceps"},
        {id: 163, name:"Rozpisać treningi", complited:false, description:"Treningi siłowe na ten tydzień"},
        {id: 734, name:"Trening", complited:false, description:"Trening: klatka, nogi, biceps"},
      ]);
      
      function deleteTask(id){
        setTasks(tasks.filter(task => task.id != id));
      }
      function addTask(props){
        console.log(props)
      }
    
      function compliteTask(id){

      }
    

  return (
    <div id='tasks'>
      <h2>Dodaj zadanie</h2>
        <form>
          <input type="text" name ='name' placeholder='Zadanie'>
          </input>
          <br/>
          <textarea type="text"  name = 'description' placeholder='Opis'>
          </textarea>
          <br/>
          
        </form>
        <button onClick={addTask}>Zapisz</button>

      <h1>Zadania na diś</h1>
      <ul className='tasks'>
        
        {tasks.map((task) => (
          <li key={task.id} className={task.complited ? "complited":"incomplited" }>
            <h3 >{task.name}</h3>
            <p>{task.description}</p>
            <div>
                <button onClick={() => compliteTask(task.id)}>Ukończone</button>
                <button onClick={() => deleteTask(task.id)}>Usuń</button>
            </div>

          </li>
        ))}
        


      </ul>

    </div>
  )


}

export default TaskList