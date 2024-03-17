import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeRob = `var rob = function(nums) {
    //Write your code here    

};`;

// checks if the user has the correct code
const handlerRob = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[1,2,3,1],
			[2,7,9,3,1],
		];
		const rob = [4,12];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, rob[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Rob handler function error");
		throw new Error(error);
	}
};

export const house_robber: Problem = {
	id: "house-robber",
	title: "8. House Robber",
	problemStatement: `<p class='mt-3'>
    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.
</p>
<p class='mt-3'>
Given an integer array <code>nums</code> representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
</p>
`,
    

	examples: [
		{
			id: 1,
			inputText: "nums = [1,2,3,1]",
			outputText: "4",
			explanation: "Rob house 1 (money = 1) and then rob house 3 (money = 3).Total amount you can rob = 1 + 3 = 4."
            ,   
		},
		{
			id: 2,
			inputText: "nums = [2,7,9,3,1]",
			outputText: "12",
            explanation:" Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).Total amount you can rob = 2 + 9 + 1 = 12. "
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= nums.length <= 100</code></li>
    <li class='mt-2'><code>0 <= nums[i] <= 400</code></li>
    `,
	handlerFunction: handlerRob,
	starterCode: starterCodeRob,
	order: 8,
	starterFunctionName: "function(",
};
