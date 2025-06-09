import "./Button.css";

function Button({isDisabled,button,action}) {
	return (
		<button className={isDisabled ? "btn-disabled": "btn-enabled"}
				type={button}
				disabled={isDisabled}
				onClick={action}>Laad Landen
		</button>
	);
}
export default Button