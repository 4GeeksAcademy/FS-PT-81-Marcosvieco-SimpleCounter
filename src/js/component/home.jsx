import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = ({time}) => {
	let setTimer = time.toString().split('').reverse()
	return (
		<div className="d-flex bg-dark mt-5">
			<Card digit={<i class="fa-solid fa-clock fa-3x"></i>}/>
			<Card digit={setTimer[5] || 0}/>
			<Card digit={setTimer[4] || 0}/>
			<Card digit={setTimer[3] || 0}/>
			<Card digit={setTimer[2] || 0}/>
			<Card digit={setTimer[1] || 0}/>
			<Card digit={setTimer[0]}/>
		</div>
	);
};

export default Home;
