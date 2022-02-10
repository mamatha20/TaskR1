import axios from "axios";
import React from "react";

export class ChildPlan extends React.Component {
	constructor() {
		super();
		console.log("child class constructor loaded");
	}

	componentDidMount() {
		console.log("ChildPlan did mount");
		axios
			.get("http://localhost:8000/investment/getAllChildPlan")
			.then((response) => {
				if (response.data) {
					console.log(response.data);
				}
			})
			.catch((err) => {
				console.log("error encountered ", err);
			});
	}

	componentDidUpdate() {
		console.log("ChildPlan Did Update invoked");
	}

	componentWillUnmount() {
		console.log("ChildPlan Will UNmount invoked");
	}

	componentDidCatch() {
		console.log("ChildPlan DidCatch invoked");
	}

	componentWillUnmount() {
		console.log("ChildPlan WillUnmount invoked");
	}

	shouldComponentUpdate() {
		console.log("ChildPlan component shouldupdate invoked");
	}

	render() {
		return <h6>Child's Future investment Plan</h6>;
	}
}
