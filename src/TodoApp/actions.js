import {
  ADD_JOB,
  DELETE_JOB,
  EDIT_JOB_INDEX,
  MOVE_JOB_DOWN,
  MOVE_JOB_UP,
  SET_JOB_INPUT,
  UPDATE_JOB,
} from './constants';

const setJobInput = (payload) => {
  return {
    type: SET_JOB_INPUT,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const moveJobUp = (payload) => {
  return {
    type: MOVE_JOB_UP,
    payload,
  };
};

const moveJobDown = (payload) => {
  return {
    type: MOVE_JOB_DOWN,
    payload,
  };
};

const editJobByIndex = (payload) => {
  return {
    type: EDIT_JOB_INDEX,
    payload,
  };
};

const updateJob = (payload) => {
  return {
    type: UPDATE_JOB,
    payload,
  };
};

export { setJobInput, addJob, deleteJob, moveJobUp, moveJobDown, editJobByIndex, updateJob };
