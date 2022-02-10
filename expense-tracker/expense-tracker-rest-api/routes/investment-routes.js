//const courseController = require("../controllers/course.controller");

var express = require("express");

var router = express.Router();

router.get("/mutualfunds", (req, res, next) => {
	setTimeout(() => {
		//todo connect to mongodb /any database fetch the data and send it downstream as response

		return res.status(200).json([
			{
				id: 1,
				name: "Axis Long growth fund",
				establishedYear: 40179,
				fundValue: 5600000,
				fundManager: "Mr X",
				avgReturn: 25,
				riskCategory: "balanced",
			},
			{
				id: 2,
				name: "Icici potential",
				establishedYear: 35917,
				fundValue: 589097000,
				fundManager: "Mr Y",
				avgReturn: 22,
				riskCategory: "low",
			},
			{
				id: 3,
				name: "icici max rturn",
				establishedYear: 43383,
				fundValue: 75000000,
				fundManager: "Mr Z",
				avgReturn: 23,
				riskCategory: "high",
			},
			{
				id: 4,
				name: "citi liquid fund",
				establishedYear: 42005,
				fundValue: 10000000,
				fundManager: "Mr K",
				avgReturn: 19,
				riskCategory: "low",
			},
			{
				id: 5,
				name: "ostwal prime fund",
				establishedYear: 42736,
				fundValue: 2600000,
				fundManager: "mr L",
				avgReturn: 10,
				riskCategory: "balanced",
			},
		]);
	}, 5000);
});

router.get("/getAllChildPlan", (req, res, next) => {
	res.send([
		{
			id: 3737,
			name: "Sukanya Future",
			establishedYear: 2017,
			minimumInvestment: 500,
			lockInPeriod: 20,
			avgReturn: 8,
			riskCategory: "low",
			description: "seure your childs future",
			consistency: 5,
			expRatio: 0.67,
		},
		{
			id: 38383,
			name: "Nirmal Bhavishya",
			establishedYear: 2010,
			minimumInvestment: 1500,
			lockInPeriod: 16,
			avgReturn: 9,
			riskCategory: "balanced",
			description: "secure your childs future",
			consistency: 4.5,
			expRatio: 0.05,
		},
		{
			id: 3737373,
			name: "Sukanya Future-II",
			establishedYear: 2020,
			minimumInvestment: 5000,
			lockInPeriod: 10,
			avgReturn: 16,
			riskCategory: "high",
			description: "Better return than so and so.",
			consistency: 4,
			expRatio: 0.43,
		},
	]);
});
module.exports = router;