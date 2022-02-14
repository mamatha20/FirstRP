const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const client = new MongoClient(
	"mongodb+srv://admin:hisyCn$AhkX5Ggz@lab-cluster-1.ihxrn.mongodb.net/test?authSource=admin&replicaSet=atlas-nmhvza-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

exports.getUserByEmail = (req, res) => {
	if (req.body.email && req.body.password) {
		client.connect(async () => {
			//initialize connection with database collection
			const cursor = await client.db("finance-guru").collection("users").find({
				email: req.body.email,
				password: req.body.password,
			});
			//wait for read to complete
			const docs = await cursor.toArray();
			//check to ensure if the documents array has any document in it
			if (docs.length > 0) {
				//return token
				let token = jwt.sign({ user: docs }, "somesecret", {
					expiresIn: "1h",
				});

				setTimeout(() => {
					res.status(200).send({ user: docs[0], token: token });
				}, 2000);
			} else {
				res.status(401).send("invalid credentials");
			}
		});
	} else {
		res.status(401).send("email and password is required");
	}
};

exports.createAccount = (req, res) => {
	if (
		req.body.email &&
		req.body.password &&
		req.body.firstName &&
		req.body.lastName
	) {
		client.connect(async () => {
			//initialize connection with database collection
			const cursor = await client
				.db("finance-guru")
				.collection("users")
				.insertOne({
					email: req.body.email,
					password: req.body.password,
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					mobileNo: req.body.mobileNo || null,
				})
				.then(
					(re) => {
						res.status(200).send("account created successfully");
					},
					(err) => res.status(400).send(err),
				);
		});
	} else {
		res.status(401).send("all mandatory information is  required");
	}
	//res.status(200).send("account created successfully");
};
