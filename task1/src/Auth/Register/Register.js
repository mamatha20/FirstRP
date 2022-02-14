import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Register = () => {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [mobileNo, setMobileNo] = useState("");

	const handleRegister = () => {
		axios
			.post("http://localhost:4000/user/register", {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
				mobileNo: mobileNo,
			})
			.then((r) => {
				if (r.status == 200) {
					alert("account created successfully");
					navigate("/");
				} else {
					alert("unable to create account");
				}
			})
			.catch((err) => {
				alert("unable to create account");
				console.log(err);
			});
	};

	return (
		<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
			<form style={{ width: "50%", paddingTop: "10%" }}>
				<div className="mb-3">
					<label className="form-label">First Name</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
						value={firstName}
						onChange={(ev) => setFirstName(ev.target.value)}
					/>
					{firstName.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							FirstName Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="mb-3">
					<label className="form-label">Last Name</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput1"
						value={lastName}
						onChange={(ev) => setLastName(ev.target.value)}
					/>
					{lastName.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Last Name Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
						value={email}
						onChange={(ev) => setEmail(ev.target.value)}
					/>
					{email.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Email Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleFormControlInput1"
						value={password}
						onChange={(ev) => setPassword(ev.target.value)}
					/>
					{password.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Password Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="mb-3">
					<label className="form-label">Mobile No</label>
					<input
						type="number"
						className="form-control"
						value={mobileNo}
						onChange={(ev) => setMobileNo(ev.target.value)}
					/>
				</div>

				<div className="mb-3">
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleRegister}
					>
						CREATE ACCOUNT
					</button>
				</div>
				<div className="mb-3">
					<button
						type="button"
						className="btn btn-link"
						onClick={() => navigate("/login")}
					>
						Existing User? Login
					</button>
				</div>
			</form>
		</div>
	);
};