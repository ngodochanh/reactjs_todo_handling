import { memo } from 'react';

function TodoForm({ jobInput, jobInputRef, editJobWithIndex, onJobInputChange, onSubmitJob, onResetInput }) {
  return (
    <form className="TodoForm" onSubmit={onSubmitJob}>
      <input
        placeholder="Enter job"
        ref={jobInputRef}
        value={jobInput}
        className="todo-input"
        onChange={onJobInputChange}
      />
      <button type="submit" className="todo-btn">
        {editJobWithIndex === null ? 'Add' : 'Update'}
      </button>
      <button type="button" className="todo-btn" onClick={onResetInput}>
        Reset Job Input
      </button>
    </form>
  );
}

export default memo(TodoForm);
