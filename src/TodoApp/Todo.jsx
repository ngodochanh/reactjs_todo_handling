import { MdEdit, MdDelete } from 'react-icons/md';
import { GoMoveToBottom, GoMoveToTop } from 'react-icons/go';

function Todo({ job, index, onDeleteJob, onMoveJobUp, onMoveJobDown, onEditJob }) {
  const { id, title } = job;

  return (
    <li className="Todo">
      <p className="incompleted">{title}</p>
      <div>
        <MdDelete className="icon" onClick={() => onDeleteJob(id)} />
        <GoMoveToTop className="icon" onClick={() => onMoveJobUp(index)} />
        <GoMoveToBottom className="icon" onClick={() => onMoveJobDown(index)} />
        <MdEdit className="icon" onClick={() => onEditJob(index)} />
      </div>
    </li>
  );
}

export default Todo;
