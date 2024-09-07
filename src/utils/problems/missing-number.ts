import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeMissingNumber = `var missingNumber  = function(nums) {
    
};`;

// checks if the user has the correct code
const handlerMissingNumber = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[3,0,1],
            [0,1],
            [9,6,4,2,3,5,7,0,1]
		];
		const res = [2,2,8];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Missingnumber handler function error");
		throw new Error(error);
	}
};

export const MissingNumber: Problem = {
	id: "missing-number",
	title: "16. Missing Number",
	problemStatement: `<p class='mt-3'>
    Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0,n]</code>, return the only number in the range that is missing from the array.


</p>

`
,
    

	examples: [
		{
			id: 1,
			inputText:"nums = [3,0,1]",
			outputText:"2",
			explanation: `n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
            `
            ,   
		},
		{
			id: 2,
			inputText:"nums = [0,1]",
			outputText:"2",
            explanation:`n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
            `
			
		},
        {
			id: 3,
			inputText:"nums = [9,6,4,2,3,5,7,0,1]",
			outputText:"8",
            explanation:`n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
            `
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>n == nums.length</code></li>
    <li class='mt-2'><code>1 <= n <= 10^4</code></li>
    <li class='mt-2'><code>0 <= nums[i] <= n</code></li>
    <li class='mt-2'>All the numbers of nums are unique.
</li>
    `,
	handlerFunction: handlerMissingNumber,
	starterCode: starterCodeMissingNumber,
	order: 16,
	starterFunctionName: "function(",
};
