import React from 'react';

interface TaskProps {
    task: { id: number; name: string; completed: boolean };
    toggleTaskCompletion: (id: number) => void;
    deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <li className="flex items-center justify-between p-2 border-b">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="mr-2"
            />
            {task.name}
            <div className="flex space-x-2">
                <button className="text-yellow-500">Edit</button>
                <button className="text-red-500" onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </li>
    );
};

export default Task;
