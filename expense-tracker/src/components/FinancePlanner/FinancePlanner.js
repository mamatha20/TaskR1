import { Link, Outlet } from "react-router-dom";

export const FinanceView = () => {
	return (
		<div className="container">
			<Link to="childplan">Child Future Plan</Link>
			<Link to="futureplan">Your's Future Plan</Link>
			<Link to="retirementplan">Retirement Plan</Link>

			<h5>Finance Planning View</h5>
			<Outlet />
		</div>
	);
};