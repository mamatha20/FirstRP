
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export const Login = (props) => {
	let navigate = useNavigate();
	const myToast = useRef(null);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		//TO DO : LOGIN behaviour
		setLoading(true);
		axios
			.post("http://localhost:4000/user/authenticate", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					localStorage.setItem("user", JSON.stringify(res.data.user));
					props.loginHandler();
					setTimeout(() => {
						navigate("/");
					}, 3000);
					myToast.current.show({
						severity: "success",
						summary: "Success Message",
						detail: "Order submitted",
					});
				} else {
					alert("invalid credentials");
				}
			})
			.catch((err) => alert("invalid credentials"))
			.finally(() => setLoading(false));
	};

	return (
		<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
			<form style={{ width: "50%", paddingTop: "10%" }}>
				<div className="field col-8">
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-user"></i>
						</span>
						<span className="p-float-label">
							<InputText
								id="inputgroup"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="inputgroup">Email</label>
						</span>
					</div>
					{email.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Email Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="field col-8">
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-lock"></i>
						</span>
						<span className="p-float-label">
							<Password
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								toggleMask
							/>
							<label htmlFor="inputgroup">Password</label>
						</span>
					</div>
					{password.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Password Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="field">
					<Button
						label="Login"
						iconPos="right"
						loading={loading}
						onClick={handleLogin}
					/>
				</div>
				{/* <div className="mb-3">
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleLogin}
					>
						Login
					</button>
				</div> */}
				{/* <div className="mb-3">
					<button
						type="button"
						className="btn btn-link"
						onClick={() => navigate("/register")}
					>
						New user? SignUp
					</button>
				</div> */}
			</form>

			<Toast ref={myToast} />
			<h1 className="animate__animated animate__lightSpeedInRight">Register This page</h1>
		</div>
		
	);
};




