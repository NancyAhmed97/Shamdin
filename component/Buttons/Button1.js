
import Button from '@mui/material/Button';

function Button1(props) {

	return (
		<Button variant="contained" color="secondary" className="help_btn"
		onClick={props.sendData}>
			{props.title}
		</Button>
	);
}

export default Button1;
