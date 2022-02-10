import { Button } from "primereact/button";

export function ShowButton(props) {
	return (
		<Button
			style={{ marginLeft: "1em" }}
			icon="pi pi-times"
			onClick={props.cancelEventHandler}
			className="p-button-rounded p-button-danger p-button-outlined"
		/>
	);
}

export function HideButton() {
	return (
		<Button
			style={{ display: "none", visibility: "none" }}
			icon="pi pi-times"
			className="p-button-rounded p-button-danger p-button-outlined"
		/>
	);
}