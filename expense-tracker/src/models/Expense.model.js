export class Expense {
	title;
	expDate;
	createdBy;
	category;
	amount;
	constructor(title, expDate, createdBy, category, amount) {
		this.title = title;
		this.expDate = expDate;
		this.createdBy = createdBy;
		this.category = category;
		this.amount = amount;
	}
}

export class TRANSACTION_TYPE {
	static ONLINE = new TRANSACTION_TYPE("ONLINE");
	static OFFLINE = new TRANSACTION_TYPE("OFFLINE");
	constructor(name) {
		this.name = name;
	}
}