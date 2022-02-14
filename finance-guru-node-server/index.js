const express = require("express");
const app = express();
app.use(express.json());

const usersRoutes = require("./routes/user.routes");
const expRoute = require("./routes/expense.routes");
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

app.use("/user", usersRoutes);
app.use("/expense", expRoute);
app.listen(4000, () => {
	console.log("server started and listening on port 4000");
});