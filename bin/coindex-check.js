import { program } from "commander";
import check from "../commands/check.js";
import key from "../commands/key.js";

program
	.command("price")
	.description("Check price of coins")
	.option(
		"--coin <type>",
		"Add specific coin types in CSV format",
		"BTC,ETH,DOGE,XPR"
	)
	.option("--cur <currency>", "Change the currency", "USB")
	.action((cmd) => check.price(cmd));

program.parse(process.argv);
