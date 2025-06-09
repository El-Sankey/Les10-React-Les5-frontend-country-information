import "./Button.css";

function Button({ buttonType, name, isDisabled, action }) {
	return (
		<button type={buttonType}
				disabled={isDisabled}
				onClick={action}> {name}
		</button>
	);
}

export default Button;
