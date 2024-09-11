
import authReducer from "../Features/auth/slice";
import jobCreateReducer from "../Features/form/slice";

const reducers = {
  
  auth: authReducer,
  jobs: jobCreateReducer,
};

export default reducers;
