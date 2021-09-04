import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/cryptoApi.js";

const keyManager = new KeyManager();

const check = {
	async price() {
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "coin",
				message: "Enter your coin(BTC, ETH, BNB, XPR)",
			},
			{
				type: "list",
				name: "cur",
				message: "Choose currency(USD)",
				choices: ["NGN", "USD", "EUR"],
			},
		]);

		try {
			const key = keyManager.getKey();
			const cryptoAPI = new CryptoAPI(key);

			const output = await cryptoAPI.getPriceData(
				input.coin || "BTC,ETH,BNB,XPR",
				input.cur || "USD"
			);
			console.log(output);
		} catch (error) {
			console.error(error.message.red.bold);
		}
	},
};

export default check;
