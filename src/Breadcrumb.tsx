import * as React from "react";

export interface Props {
  values: number[];
}

export class Breadcrumb extends React.PureComponent<Props> {
  render() {
  	const { values } = this.props;

    return <div className="breadcrumb">
    	<ul>
    		{ values.map( ( value, index ) => <li key={ `value-${ index }` }>{ value.toFixed( 3 ) }</li> ) }
    	</ul>
    </div>;
  }
}
