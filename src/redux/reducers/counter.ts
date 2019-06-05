import { CounterAction } from "../actions/counter";
import { INCREMENT, LOADING } from "../constants";

export type State = Readonly<{
  value: number;
  loading: boolean;
}>;

export const initialState: State = {
  value: 1,
  loading: false
};

export const reducer = (state = initialState, action: CounterAction): State => {
  switch (action.type) {
  	case LOADING:
  		return { ...state, loading: !state.loading };
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};
