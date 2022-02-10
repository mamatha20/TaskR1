export class Investment {
	id;
	createdBy;
	createdOn;
	investmentType;
	amount;
	startDate;
	frequency;
	endDate;
	investmentCategory;
}

export class INVESTMENT_TYPE {
	static SIP = new INVESTMENT_TYPE("SIP");
	static LUMPSUM = new INVESTMENT_TYPE("LUMPSUM");
	constructor(name) {
		this.name = name;
	}
}

export class INVESTMENT_FREQUENCY {
	static YEARLY = new INVESTMENT_FREQUENCY("YEARLY");
	static MONTHLY = new INVESTMENT_FREQUENCY("MONTHLY");
	static QUARTERLY = new INVESTMENT_FREQUENCY("QUARTERLY");
	constructor(name) {
		this.name = name;
	}
}

export class INVESTMENT_CATEGORY {
	// Create new instances of the same class as static attributes
	static MF = new INVESTMENT_CATEGORY("MF");
	static NPS = new INVESTMENT_CATEGORY("NPS");
	static PF = new INVESTMENT_CATEGORY("PF");
	static ELS = new INVESTMENT_CATEGORY("ELS");
	static ULIP = new INVESTMENT_CATEGORY("ULIP");
	static EQUITY = new INVESTMENT_CATEGORY("EQUITY");

	constructor(name) {
		this.name = name;
	}
}
