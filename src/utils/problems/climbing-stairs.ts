import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeClimbingStairs = `var climbStairs = function(n) {
    
};`;

// checks if the user has the correct code
const handlerClimbingStairs = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			2,3
		];
		const res = [2,3];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("MaxProfit handler function error");
		throw new Error(error);
	}
};

export const ClimbingStairs: Problem = {
	id: "climbing-stairs",
	title: "14. Climbing Stairs",
	problemStatement: `<p class='mt-3'>
    You are climbing a staircase. It takes <code>n</code> steps to reach the top.
</p>
<p class='mt-3'>
Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?
`
,
    

	examples: [
		{
			id: 1,
			inputText:"n = 2",
			outputText:"2",
			explanation: `There are two ways to climb to the top.
            1. 1 step + 1 step
            2. 2 steps
            `
            ,   
		},
		{
			id: 2,
			inputText:"n = 3",
			outputText:"3",
            explanation:`There are three ways to climb to the top.
            1. 1 step + 1 step + 1 step
            2. 1 step + 2 steps
            3. 2 steps + 1 step
            `
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>1 1 <= n <= 45</code></li>
    `,
	handlerFunction: handlerClimbingStairs,
	starterCode: starterCodeClimbingStairs,
	order: 14,
	starterFunctionName: "function(",
};
