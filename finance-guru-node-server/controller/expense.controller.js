const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

const client = new MongoClient(
	"mongodb+srv://admin:hisyCn$AhkX5Ggz@lab-cluster-1.ihxrn.mongodb.net/test?authSource=admin&replicaSet=atlas-nmhvza-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

exports.addExpense = (req, res) => {
	if (
		req.body.title &&
		req.body.amount &&
		req.body.category &&
		req.body.expDate
	) {
		client.connect(async () => {
			//initialize connection with database collection

			let expObj = {};
			console.log(req.body);
			req.body.isRecurring
				? (expObj = {
						createdBy: req.body.createdBy,
						title: req.body.title,
						amount: req.body.amount,
						category: req.body.category,
						expDate: req.body.expDate,
						isRecurring: true,
						recurringOn: req.body.recurringOn,
						createdOn: Date.now(),
				  })
				: (expObj = {
						createdBy: req.body.createdBy,
						title: req.body.title,
						amount: req.body.amount,
						category: req.body.category,
						expDate: req.body.expDate,
						isRecurring: false,
						createdOn: Date.now(),
				  });

			await client
				.db("finance-guru")
				.collection("expenses")
				.insertOne(expObj)
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

exports.getExpenseById = (req, res) => {
	if (req.query._id) {
		client.connect(async () => {
			//initialize connection with database collection

			let cursor = await client.db("finance-guru").collection("expenses").find({
				createdBy: req.query._id,
			});

			const docs = await cursor.toArray();
			docs.length > 0
				? res.status(200).send(docs)
				: res.status(404).send("no expense found");
			// .then(
			// 	(re) => {
			// 		res.status(200).send("account created successfully");
			// 	},
			// 	(err) => res.status(400).send(err),
			// );
		});
	} else {
		res.status(401).send("all mandatory information is  required");
	}
	//res.status(200).send("account created successfully");
};