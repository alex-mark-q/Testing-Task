import "./vendor/index.scss";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from "./components";
import { AddTaskForm } from "./layout";
import { ListTask } from "./layout";


export default function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [taskListForm, setTaskListForm] = useState([]);
  const [title, setTitle] = useState('');

  const handleAddTask = event => {
    if(taskListForm.length > 0 && title.trim().length !=0) {
      setTaskList(taskList.concat(<ListTask key={nanoid()} name={title} data={document.querySelector('.data').value} />));
      taskListForm.length = 0; // удаляем заполненую форму
      setTitle("");
    }
    taskListForm.length = 0;
    setTaskListForm(taskListForm.concat(<AddTaskForm key={nanoid()} onChangeInput={(e) => setTitle(e.target.value)} />));
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <div className="todo__body">
        <div className="todo__task">
          {taskList}
        </div>
        <div className="todo__form">
          {taskListForm}
        </div>
        <div className="todo__button">
          <Button handleAddTask={handleAddTask} name="Добавить" />
        </div>
      </div>
      
    </div>
  );
}
