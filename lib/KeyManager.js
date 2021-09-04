import Configstore from "configstore";

class KeyManager {
	constructor() {
		this.conf = new Configstore("coindex");
	}

	setKey(key) {
		this.conf.set("apiKey", key);
		return key;
	}

	getKey() {
		const key = this.conf.get("apiKey");

		if (!key) {
			throw new Error("No API key found - Get a key https://normics.com");
		}

		return key;
	}

	deleteKey() {
		const key = this.conf.get("apiKey");

		if (!key) {
			throw new Error("No API key found - Get a key https://normics.com");
		}

		this.conf.delete("apiKey");
	}
}

export default KeyManager;
