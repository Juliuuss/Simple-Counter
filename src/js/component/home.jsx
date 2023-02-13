import React from "react";
import {Counter} from "./counter.jsx"

const Home = (props) => {
	return (
		<div className="container-sm px-4 text-center p-3">
			<div className="row text-center gx-5 bg-dark p-3">
				<div className="col">
					<div class="p-3 border bg-dark.bg-gradient text-white fs-1 rounded"><i class="fas fa-clock"></i></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter5}/></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter4}/></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter3}/></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter2}/></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter1}/></div>
				</div>
				<div className="col ">
					<div class="p-3 border bg-dark.bg-gradient text-white rounded"><Counter contador={props.counter}/></div>
				</div>
			</div>

		</div>
	);
};

export default Home;
