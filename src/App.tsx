import * as React from "react";
import { connect } from "react-redux";
import "./App.css";
import { RootState } from "./redux/reducers";
import { Breadcrumb } from './Breadcrumb';
import { actionCreators } from './redux/actions/counter';

interface ConnectProps {
  counter:          number;
  loading:          boolean;
  onIncrement:      typeof actionCreators.increment;
  onDelayIncrement: ( value:number ) => void;
}

type Props = {} & ConnectProps;

export class App extends React.PureComponent<Props> {
  render() {
    const {
      counter,
      loading,
      onDelayIncrement,
      onIncrement,
    } = this.props;

    return (
      <>
        <Breadcrumb values={ [ 1.011, 2.000, 3.000045644 ] } />
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Counter App</h1>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Counter</p>
                <p className="title">{ this.props.counter }</p>
                { loading ? <span>Loading...</span> : null }
              </div>
            </div>
          </div>
          {/* Challenge 5: <div className="notification is-danger" /> */}
          <div className="field is-grouped">
            <p className="control">
              <button className="button" id="increment-btn" onClick={ () => onIncrement( counter ) }>
                Click to increment
              </button>
            </p>
            <p className="control">
              <button className="button" id="delay-increment-btn" onClick={ () => onDelayIncrement( counter ) }>
                Click to increment slowly
              </button>
            </p>
            <p className="control">
              <button className="button" id="remote-fetch-btn">
                Click to fetch server-side
              </button>
            </p>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  counter: state.counter.value,
  loading: state.counter.loading,
});

const mapDispatchToProps = {
  onIncrement:      actionCreators.increment,
  onDelayIncrement: actionCreators.delayIncrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
