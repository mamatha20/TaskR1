import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToggleButton } from "primereact/togglebutton";
import { useState } from "react";

export const Header = (props) => {
	let navigate = useNavigate();

	const [darkTheme, setDarkTheme] = useState();

	const navigateHandler = (url) => {
		navigate(url, {
			replace: false,
		});
	};

	const changeTheme = (val) => {
		setDarkTheme(val);
		props.applyDarkTheme(darkTheme);
	};

	const doLogout = () => {
		alert("do logout");
		props.doLogout();
	};
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top" expand="lg">
				<Container fluid>
					<Navbar.Brand onClick={() => navigateHandler("/")}>
						Finance Guru
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link onClick={() => navigateHandler("/expense")}>
							Expenses
						</Nav.Link>

						<Nav.Link onClick={() => navigateHandler("/investment")}>
							Investments
						</Nav.Link>

						<Nav.Link onClick={() => navigateHandler("/finance")}>
							Finance Plan
						</Nav.Link>

						<Nav.Link onClick={() => navigateHandler("/profile")}>
							Settings
						</Nav.Link>
					</Nav>

					<Nav>
						{!props.isLoggedIn ? (
							<Nav.Link onClick={() => navigateHandler("/logout")}>
								Log Out
							</Nav.Link>
						) : (
							<Nav.Link eventKey={2} onClick={doLogout}>
								Logout
							</Nav.Link>
						)}

						{/* <ToggleButton
							checked={darkTheme}
							onChange={(e) => changeTheme(e.value)}
							onIcon="pi pi-check"
							offIcon="pi pi-times"
							onLabel="Dark Theme"
							offLabel="Dark Theme"
						/> */}
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};