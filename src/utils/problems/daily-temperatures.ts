import assert from "assert";
import { Problem } from "../types/problem";



const starterCodeDailyT = `var dailyTemperatures = function(temperatures) {
    //Write your code

};`;

// checks if the user has the correct code
const handlerDailyT = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			[73,74,75,71,69,72,76,73],
			[30,40,50,60],
            [30,60,90],
            
		];
        
		const solve = [
            [1,1,4,2,1,1,0,0],
            [1,1,1,0],
            [1,1,0]
 
        ];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i]);
			assert.deepStrictEqual(result, solve[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Rob handler function error");
		throw new Error(error);
	}
};

export const DailyT: Problem = {
	id: "daily-temperatures",
	title: "12. Daily Temperatures",
	problemStatement: `<p class='mt-3'>
    Given an array of integers <code>temperatures </code> represents the daily temperatures, return an array  <code>answer </code> such that  <code>answer[i] </code> is the number of days you have to wait after the  <code>ith </code> day to get a warmer temperature. If there is no future day for which this is possible, keep  <code>answer[i] == 0 </code> instead.

`,
    

	examples: [
		{
			id: 1,
			inputText: "temperatures = [73,74,75,71,69,72,76,73]",
			outputText: '[1,1,4,2,1,1,0,0]', 
            
		},
		{
			id: 2,
			inputText: "temperatures = [30,40,50,60]",
			outputText: '[1,1,1,0]',
        },
        {
			id: 3,
			inputText: "temperatures = [30,60,90]",
			outputText: '[1,1,0]',
        },
        
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= temperatures.length <= 10^5</code></li>
    <li class='mt-2'><code>30 <= temperatures[i] <= 100</code></li>
    `,
	handlerFunction: handlerDailyT,
	starterCode: starterCodeDailyT,
	order: 12,
	starterFunctionName: "function(",
};
