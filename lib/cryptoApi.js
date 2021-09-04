import axios from "axios";
import color from "colors";

class CryptoAPI {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseURL = "https://api.nomics.com/v1/currencies/ticker";
	}

	handleAPIError(error) {
		if (error?.response?.data?.status === 401) {
			throw new Error("Your API key is invalid - Go to https://nomics.com");
		} else if (error?.response?.data?.status === 404) {
			throw new Error("Your API is not responding!");
		} else {
			throw new Error("Something went wrong!");
		}
	}

	async getPriceData(coin, cur) {
    try {
      const formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: cur,
      });
      
			const { data } = await axios.get(
				`${this.baseURL}?key=${this.apiKey}&ids=${coin}&convert=${cur}&per-page=100&page=1`
			);

			let output = "";

			data.forEach((coin) => {
				output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${
					formatter.format(coin.price).green
				} | Rank: ${coin.rank.blue}\n`;
			});

			return output;
		} catch (error) {
			this.handleAPIError(error);
		}
	}
}

export default CryptoAPI;
