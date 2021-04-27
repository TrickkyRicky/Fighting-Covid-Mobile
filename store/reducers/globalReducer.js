import { LISTEN_SET_STATION } from "../actions/Stations.js";

const initialState = {
  station1: {
    name: "Station 1",
    dailyUse: null,
    highScores: {
      totalUse: 0,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: "",
    logs: [],
    averageTemp: null,
    data: [],
    loading: true,
  },
  station2: {
    name: "Station 2",
    dailyUse: null,
    highScores: {
      totalUse: 0,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: "",
    logs: [],
    averageTemp: null,
    data: [],
    loading: true,
  },
  station3: {
    name: "Station 3",
    dailyUse: null,
    highScores: {
      totalUse: 0,
      highTemp: null,
    },
    solutionAmount: null,
    lastUsed: "",
    logs: [],
    averageTemp: null,
    data: [],
    loading: true,
  },
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTEN_SET_STATION:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          averageTemp: action.averageTemp,
          dailyUse: action.dailyUse,
          lastUsed: action.lastUsed,
          logs: action.logs,
          data: action.data,
          solutionAmount: action.solution,
          highScores: {
            ...state[action.name].highScores,
            totalUse: action.totalUse,
            highTemp: action.highTemp,
          },
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
