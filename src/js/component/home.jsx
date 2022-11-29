import React from "react";
import {Counter} from "./counter.jsx"

//include images into your bundle



//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid border">
			<div className="row m-3 text-center">
				<div className="col border">
					<h1> clock</h1>
				</div>
				<div className="col border">
					0
				</div>
				<div className="col border">
					0

				</div>
				<div className="col border">
					0

				</div>
				<div className="col border">
					0

				</div>
				<div className="col border">
					<Counter contador={props.counter1}/>

				</div>
				<div className="col border">
					<Counter contador={props.counter}/>

				</div>
			</div>

		</div>
	);
};

export default Home;
