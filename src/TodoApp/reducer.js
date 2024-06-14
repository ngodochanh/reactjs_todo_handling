import {
  ADD_JOB,
  DELETE_JOB,
  EDIT_JOB_INDEX,
  MOVE_JOB_DOWN,
  MOVE_JOB_UP,
  SET_JOB_INPUT,
  UPDATE_JOB,
} from './constants';

const initState = {
  jobInput: '',
  jobList: [],
  editJobWithIndex: null,
};

const generateNextId = (arr) => {
  if (arr.length === 0) {
    return 'td1';
  }

  const lastItemId = arr[arr.length - 1].id;
  const itemIdNumber = parseInt(lastItemId.slice(2)) + 1;
  return lastItemId.replace(/\d+$/, itemIdNumber);
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_JOB_INPUT:
      return {
        ...state,
        jobInput: payload,
      };
    case ADD_JOB:
      let addJobList = [...state.jobList];
      return {
        ...state,
        jobList: [...addJobList, { id: generateNextId(addJobList), title: payload }],
      };
    case DELETE_JOB:
      return {
        ...state,
        jobList: state.jobList.filter((job) => job.id !== payload),
      };
    case MOVE_JOB_UP:
      let indexMoveJobUp = payload;
      if (indexMoveJobUp > 0) {
        let moveJobListUp = [...state.jobList];
        [moveJobListUp[indexMoveJobUp], moveJobListUp[indexMoveJobUp - 1]] = [
          moveJobListUp[indexMoveJobUp - 1],
          moveJobListUp[indexMoveJobUp],
        ];
        return {
          ...state,
          jobList: moveJobListUp,
        };
      }

      return state;
    case MOVE_JOB_DOWN:
      let indexMoveJobDown = payload;
      let moveJobListDown = [...state.jobList];
      if (indexMoveJobDown < moveJobListDown.length - 1) {
        [moveJobListDown[indexMoveJobDown], moveJobListDown[indexMoveJobDown + 1]] = [
          moveJobListDown[indexMoveJobDown + 1],
          moveJobListDown[indexMoveJobDown],
        ];
        return {
          ...state,
          jobList: moveJobListDown,
        };
      }

      return state;
    case EDIT_JOB_INDEX:
      return {
        ...state,
        editJobWithIndex: payload,
      };
    case UPDATE_JOB:
      let { index: indexUpdateJob, title } = payload;
      state.jobList[indexUpdateJob].title = title;
      return {
        ...state,
        jobList: state.jobList,
      };
    default:
      console.log(`Hành động không hợp lệ ${type}`);
      return state;
  }
};

export { initState };
export default reducer;
