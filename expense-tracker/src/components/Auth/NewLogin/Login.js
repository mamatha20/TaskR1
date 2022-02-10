import { useRef } from "react";
import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { appConfig } from "../../../AppConfig";

export function Login() {
	let navigate = useNavigate();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const toast = useRef();
	const pass = useRef();
	const login = () => {
		axios
			.post(appConfig.apiUrl + "user/authenticate", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status == 200) {
					localStorage.setItem("token", res.data.token);
					toast.current.show({
						severity: "success",
						summary: "Login success",
						detail: "Welcome back",
					});
					setTimeout(() => {
						navigate("/");
					}, 3000);
				} else {
				}
			})
			.catch((err) => {
				console.log(err);
				toast.current.show({
					severity: "error",
					summary: "Login Failure",
					detail: err.response.data.error,
				});
			});
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				width: "100vw",
				height: "100vh",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					rowGap: "1em",
				}}
			>
				<span className="p-float-label">
					<InputText
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="email">Email</label>
				</span>
				<span className="p-float-label">
					<Password
						ref={pass}
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="password">Password</label>
				</span>
				<span>
					<Button
						onClick={login}
						label="Login"
						className="mt-2 p-button-raised p-button-primary"
					/>
				</span>
				<Toast ref={toast} />
			</div>
		</div>
	);
}