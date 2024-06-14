import Todo from './Todo';

function TodoList({ jobList, onDeleteJob, onMoveJobUp, onMoveJobDown, onEditJob }) {
  return (
    <>
      {jobList.length > 0 ? (
        <ul>
          {jobList.map((job, index) => (
            <Todo
              key={job.id}
              job={job}
              index={index}
              onDeleteJob={onDeleteJob}
              onMoveJobUp={onMoveJobUp}
              onMoveJobDown={onMoveJobDown}
              onEditJob={onEditJob}
            />
          ))}
        </ul>
      ) : (
        <h4>Empty Job List</h4>
      )}
      ;
    </>
  );
}

export default TodoList;
