"use client";
import Image from 'next/image'
import { useState } from "react";


export default function Home() {

  const [task, setTask] = useState('');
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState<any[]>([]);

  const handleTaskChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <div className="text-center text-[#FFFFFF] font-poppins bg-gradient-to-br from-[#159C98] to-[#138F9E]">
        <h1 className='text-[48px]/[80px] font-semibold'>Backed by the best</h1>
        <h2 className='text-[24px]/[10px] font-extralight pt-2'>Wealthup is backed and supported by</h2>
        <div className='flex justify-center py-6'>
        <Image
              src="/13.png"
              alt="Logo"
              width={600}
              height={164}
            />
        </div>
      </div>

      <div className='flex-col bg-[#0A5783] text-[#FFFFFF] font-poppins'>
        <h1 className=' pt-3 text-center text-[40px]/[60px] font-extrabold'>Transforming Lives- Financially!</h1>
        <div className='flex justify-center items-center'>
          <div className=' flex items-start mx-10'>
            <Image src="/Pic.png" alt="User" className='mr-5' width={100} height={100} />
            <div>
              <h1>Simran Surur</h1>
              <h1>Journalist</h1>
              <h1>The Print, Gurugram</h1>
              <p className=' max-w-[416px]'>"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."</p>
            </div>
          </div>
          <Image src="/11.png" alt="User" width={380} height={380} />
        </div>
      </div>

      <div className=' flex justify-center bg-gradient-to-br from-[#159C98] to-[#138F9E]'>
        <Image src="/logos.png" alt="logos" width={1200} height={163} />
      </div>

      <div className="text-center my-4">
      <h1 className='text-[48px]/[80px] font-semibold mb-5'>Todo App</h1>
      <div className='flex justify-center'>
      <form onSubmit={handleAddTask}>
        <input
          className="border rounded py-2 px-3 text-gray-700 focus:outline-none "
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
        />
        <button className='ml-4 bg-[#FF7518] text-white rounded border-2 border-[#BEC3C6] px-2 py-2' type='submit'>Add Task</button>
      </form>
      <div className='mx-5'>
        <input
        className="border rounded py-2 px-3 text-gray-700 focus:outline-none "
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search tasks"
        />
      </div>
      </div>
      <ul className='my-5'>
        {filteredTodos.map((todo, index) => (
          <li key={index} className='py-1 my-1' >
            <div className='flex justify-center'>
            <h1 style={{ backgroundColor: todo.completed ? '#808080' : '#FFFFFF' }}>{todo.task}</h1>
            <button className='ml-3 bg-[#FF7518] text-white rounded border-2 border-[#BEC3C6] px-1 py-1' onClick={() => handleCompleteTask(index)}>Complete</button>
            <button className='ml-1 bg-[#FF7518] text-white rounded border-2 border-[#BEC3C6] px-1 py-1' onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
      
    </main>
  )
}
