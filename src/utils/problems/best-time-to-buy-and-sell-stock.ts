import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeMostProfit = `var maxProfit = function(prices) {
    //Write your code here    

};`;

// checks if the user has the correct code
const handlerMaxProfit = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const prices = [
			[7,1,5,3,6,4],
			[7,6,4,3,1],
		];
		const maxProfit = [5,0];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < prices.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(prices[i]);
			assert.deepStrictEqual(result, maxProfit[i]);
		}
		return true;
	} catch (error: any) {
		console.log("MaxProfit handler function error");
		throw new Error(error);
	}
};

export const stocks_profit: Problem = {
	id: "best-time-to-buy-and-sell-stock",
	title: "7. Best Time to Buy and Sell Stock",
	problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.
</p>
<p class='mt-3'>
You want to maximize your profit by choosing a <b>single day</b> to buy one stock and choosing a <b>different day in the future</b> to sell that stock.
</p>
<p class='mt-3'>Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return <code>0</code>.
</p>
`
,
    

	examples: [
		{
			id: 1,
			inputText: "prices = [7,1,5,3,6,4]",
			outputText: "5",
			explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
            ,   
		},
		{
			id: 2,
			inputText: "prices = [7,6,4,3,1]",
			outputText: "0",
            explanation:" In this case, no transactions are done and the max profit = 0. "
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= prices.length <= 10^5</code></li>
    <li class='mt-2'><code>0 <= prices[i] <= 10^4</code></li>
    `,
	handlerFunction: handlerMaxProfit,
	starterCode: starterCodeMostProfit,
	order: 7,
	starterFunctionName: "function(",
};
