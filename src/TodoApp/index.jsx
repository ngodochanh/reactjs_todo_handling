import { useCallback, useReducer, useRef } from 'react';
import reducer, { initState } from './reducer';
import logger from './logger';
import { addJob, deleteJob, editJobByIndex, moveJobDown, moveJobUp, setJobInput, updateJob } from './actions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
  const [todo, dispatch] = useReducer(logger(reducer), initState);
  const { jobInput, jobList, editJobWithIndex } = todo;
  const jobInputRef = useRef();

  const handleJobInputChange = useCallback((e) => {
    dispatch(setJobInput(e.target.value));
  }, []);

  const handleSubmitJob = useCallback(
    (e) => {
      e.preventDefault();

      if (editJobWithIndex === null) {
        dispatch(addJob(jobInput));
      } else {
        dispatch(updateJob({ title: jobInput, index: editJobWithIndex }));
      }

      handleResetInput();
    },
    [jobInput || editJobWithIndex]
  );

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleMoveJobUp = (index) => {
    dispatch(moveJobUp(index));
  };

  const handleMoveJobDown = (index) => {
    dispatch(moveJobDown(index));
  };

  const handleEditJob = (index) => {
    dispatch(editJobByIndex(index));
    dispatch(setJobInput(jobList[index].title));
    jobInputRef.current.focus();
  };

  const handleResetInput = useCallback(() => {
    dispatch(editJobByIndex(null));
    dispatch(setJobInput(''));
    jobInputRef.current.focus();
  }, []);

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>

      <TodoForm
        jobInput={jobInput}
        jobInputRef={jobInputRef}
        editJobWithIndex={editJobWithIndex}
        onJobInputChange={handleJobInputChange}
        onSubmitJob={handleSubmitJob}
        onResetInput={handleResetInput}
      />

      <TodoList
        jobList={jobList}
        onDeleteJob={handleDeleteJob}
        onMoveJobUp={handleMoveJobUp}
        onMoveJobDown={handleMoveJobDown}
        onEditJob={handleEditJob}
      />
    </div>
  );
}

export default TodoApp;
