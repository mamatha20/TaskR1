import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import axios from "axios";
export function MutualFund() {
	const cardStyle = {
		marginRight: "10px",
	};

	if (true) {
		cardStyle.marginRight = "20px";
	}

	const [mutualfunds, setMutualFunds] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/investment/mutualfunds")
			.then((res) => {
				if (res.data) {
					let mfs = [];
					res.data.forEach((element) => {
						mfs.push(element);
					});
					setMutualFunds(mfs);
				} else {
					alert("failed to get mutual funds data");
				}
			})
			.catch((err) => alert(err));
	}, []);

	if (mutualfunds.length > 0) {
		return (
			<div className="container">
				<h3>List of Mutual Funds</h3>
				return (
				<div
					style={{
						margin: "10px",
						display: "flex",
						flexWrap: "wrap",
						width: "75%",
					}}
				>
					{mutualfunds.map((ele, id) => {
						return (
							<Card
								style={cardStyle}
								key={id}
								title={ele.name}
								subTitle="Subtitle"
								style={{ width: "25em" }}
							>
								<p className="m-0" style={{ lineHeight: "1.5" }}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Inventore sed consequuntur error repudiandae numquam deserunt
									quisquam repellat libero asperiores earum nam nobis, culpa
									ratione quam perferendis esse, cupiditate neque quas!
								</p>
								<strong>
									Fund Value : {ele.fundValue}, Established Since{" "}
									{ele.establishedYear}
								</strong>
							</Card>
						);
					})}
				</div>
				);
			</div>
		);
	} else {
		return <h4>No Mutual funds found</h4>;
	}
}