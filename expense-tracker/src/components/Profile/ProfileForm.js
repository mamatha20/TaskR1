// //es6 and above way of defining functional component
// //import { InputText } from "primereact/inputtext";

// import { useState } from "react";
// import { Customer } from "../../models/Customer.model";
// import { InputText } from "primereact/inputtext";
// import { InputNumber } from "primereact/inputnumber";
// import { Button } from "primereact/button";
// // import { Checkbox } from "primereact/checkbox";
// import { RadioButton } from "primereact/radiobutton";
// import { Card } from "primereact/card";
// import { Calendar } from "primereact/calendar";
// import { ToggleButton } from "primereact/togglebutton";
// import axios from "axios";
// import "./ProfileForm.css";

// // export const ProfileForm = () => {
// // 	//const [name of the state,setter for the state]=useState('initial value for the state);
// // 	const [fullName, setFullName] = useState("chandan");
// // 	const [email, setEmail] = useState();
// // 	const [password, setPassword] = useState();
// // 	const [mobileNo, setMobileNo] = useState();
// // 	const [dob, setDob] = useState("dd/mm/yyyy");

// // 	const fullNameHandler = (ev) => {
// // 		console.log(ev.target.value);
// // 		setFullName(ev.target.value);
// // 	};

// // 	const emailHandler = (ev) => {
// // 		console.log(ev.target.value);
// // 		setEmail(ev.target.value);
// // 	};
// // 	return (
// // 		<div>
// // 			<div>
// // 				Full Name {fullName}, Email:{email}
// // 			</div>
// // 			<h1>Profile Form</h1>
// // 			<form style={{ display: "flex", flexDirection: "column" }}>
// // 				<input
// // 					type="text"
// // 					placeholder="Full Name"
// // 					value={fullName}
// // 					onChange={fullNameHandler}
// // 				/>
// // 				<input
// // 					type="text"
// // 					placeholder="Email"
// // 					value={email}
// // 					onChange={emailHandler}
// // 				/>
// // 				<input
// // 					type="text"
// // 					placeholder="Password"
// // 					value={password}
// // 					onChange={(ev) => setPassword(ev.target.value)}
// // 				/>
// // 				<input
// // 					type="text"
// // 					placeholder="mobileNo"
// // 					value={mobileNo}
// // 					onChange={(ev) => setMobileNo(ev.target.value)}
// // 				/>
// // 				<input
// // 					type="text"
// // 					placeholder="Enter Date of Birth"
// // 					value={dob}
// // 					onChange={(ev) => setDob(ev.target.value)}
// // 				/>
// // 			</form>
// // 			<button>Create Account</button>
// // 			Your email {email}
// // 		</div>
// // 	);
// // };

// export const ProfileForm = () => {
// 	const [profile, setProfile] = useState({
// 		fullName: "",
// 		email: "",
// 		dob: "",
// 		password: "",
// 		mobileNo: "",
// 		isSalaried: "",
// 	});

// 	const [toggleState, setToggleState] = useState(false);
// 	const [fieldType, setFieldType] = useState("password");

// 	const toggleHandler = (ev) => {
// 		//preventDefault();
// 		ev.preventDefault();
// 		if (toggleState) {
// 			setToggleState(false);
// 			setFieldType("password");
// 		} else {
// 			setToggleState(true);
// 			setFieldType("text");
// 		}
// 	};

// 	const onSave = () => {
// 		//todo..
// 		//check for data validation
// 		//check fo data sanitization using 3rd party helper
// 		axios
// 			.post("http://localhost:8000/user/register", profile)
// 			.then((res) => {
// 				res.data.status ? setProfile(null) : console.log(res.data.result);
// 			})
// 			.catch((err) => {
// 				console.log(err, "failed to save data");
// 			});
// 	};
// 	return (
// 		<Card>
// 			<h1>Profile Form</h1>
// 			<div className="grid form-grid p-fluid">
// 				<div className="col-12 md:col-4 full-width">
// 					<div className="p-inputgroup">
// 						<span className="p-inputgroup-addon">
// 							<i className="pi pi-user"></i>
// 						</span>
// 						<InputText
// 							placeholder="Full Name"
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									fullName: e.target.value,
// 								}))
// 							}
// 						/>
// 					</div>
// 				</div>

// 				<div className="col-12 md:col-4 full-width">
// 					<div className="p-inputgroup">
// 						<span className="p-inputgroup-addon">DOB</span>
// 						<Calendar
// 							id="icon"
// 							placeholder="dd/mm/yy"
// 							value={profile.dob}
// 							dateFormat="dd/mm/yy"
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									dob: e.value,
// 								}))
// 							}
// 							showIcon
// 						/>
// 					</div>
// 				</div>

// 				<div className="col-12 md:col-4 full-width">
// 					<div className="p-inputgroup">
// 						<span className="p-inputgroup-addon">@</span>
// 						<InputText
// 							placeholder="Email"
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									email: e.target.value,
// 								}))
// 							}
// 						/>
// 					</div>
// 				</div>

// 				<div className="col-6 md:col-4">
// 					<div className="p-inputgroup">
// 						<span className="p-inputgroup-addon">
// 							<i className="pi pi-lock"></i>
// 						</span>
// 						<InputText
// 							placeholder="Password"
// 							type={fieldType}
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									password: e.target.value,
// 								}))
// 							}
// 						/>
// 						<span className="p-inputgroup-addon" onClick={toggleHandler}>
// 							<i className="pi pi-eye"></i>
// 						</span>
// 					</div>
// 				</div>
// 				<div className="col-12 md:col-4">
// 					<div className="p-inputgroup">
// 						<span className="p-inputgroup-addon">
// 							<i className="pi pi-mobile"></i>
// 						</span>
// 						<InputText
// 							type={"tel"}
// 							placeholder="Mobile No"
// 							minLength={10}
// 							maxLength={10}
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									mobileNo: e.target.value,
// 								}))
// 							}
// 						/>
// 					</div>
// 				</div>
// 				<div className="col-6 md:col-4">
// 					<div className="p-inputgroup">
// 						<ToggleButton
// 							checked={profile.isSalaried}
// 							onChange={(e) =>
// 								setProfile((prevState) => ({
// 									...prevState,
// 									isSalaried: e.value,
// 								}))
// 							}
// 							onLabel="Salaried"
// 							offLabel="Non Salaried"
// 							onIcon="pi pi-check"
// 							offIcon="pi pi-times"
// 							style={{ width: "10em" }}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="col-12 md:col-6">
// 				<Button label="Save" onClick={onSave} />
// 			</div>
// 		</Card>
// 	);
// };

// //old way of defining functional component
// // function ProfileForm(props) {
// // 	return {};
// // }
