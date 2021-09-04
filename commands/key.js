import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";

const keyManager = new KeyManager();

const key = {
	async set() {
		const input = await inquirer.prompt({
			type: "input",
			name: "key",
			message: `Enter API key `.green + "https://normics.com",
			validate: (input) => input === "" ? "This value is required" : true
		})

		const key = keyManager.setKey(input.key);

		if (key) {
			console.log(`API key set`.blue);
		}
	},
	show() {
		try {
			const key = keyManager.getKey();

			console.log(`Your API key: `, `${key}`.yellow);
		} catch (error) {
			console.error(`${error}`.red.bold);
		}
	},
	remove() {
		try {
      keyManager.deleteKey();
      console.log(`API key removed!`.green);
		} catch (error) {
			console.error(`${error}`.red.bold);
		}
	},
};

export default key;
