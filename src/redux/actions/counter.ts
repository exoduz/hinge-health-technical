import * as Bluebird from "bluebird";
import { INCREMENT, LOADING } from "../constants";
import { PayloadAction, ThunkAction, VoidAction } from "./interfaces";

export interface IncrementAction extends PayloadAction<number> {
  type: typeof INCREMENT;
}

export interface SetLoading extends VoidAction {
  type: typeof LOADING;
}

export type CounterAction = IncrementAction | SetLoading;

export const actionCreators = {
  delayIncrement(amount: number = 1): ThunkAction<Bluebird<void>> {
    return dispatch => {
      dispatch( actionCreators.loading() );
      return Bluebird.delay(1000).then(() => {
        dispatch(actionCreators.increment(amount));
        dispatch( actionCreators.loading() );
      });
    };
  },

  increment(amount: number = 1): IncrementAction {
    return { payload: amount, type: INCREMENT };
  },

  loading(): SetLoading {
    return { type: LOADING };
  }
};
