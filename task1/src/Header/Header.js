import { Link } from "react-router-dom";
import "./Header.css";
export const Header = (props) => {
	console.log(props.isLoggedIn);

	const handleLogout = () => {
		props.handleLogout();
	};

	return (
		<ul className="ul">
			<li className="li">
				<Link to="/">Home</Link>
			</li>
			<li className="li">
				<Link to="/expense">Expenses</Link>
			</li>
			<li className="li">
				<Link to="/investment">Investment</Link>
			</li>
			<li className="li">
				<Link to="/finance">Finance Planner</Link>
			</li>
			<li className="li">
				{props.isLoggedIn ? (
					<a href="" onClick={handleLogout}>
						Logout
					</a>
				) : (
					<Link to="/login">Login</Link>
				)}
			</li>
		</ul>
	);
};