import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeContainsDup = `var containsDuplicate = function(nums) {
    
};`;

// checks if the user has the correct code
const handlerContainsDup = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
            [1,2,3,1],
			[1,2,3,4]
		];
		const res = [true,false];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < n.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(n[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("containsdup handler function error");
		throw new Error(error);
	}
};

export const ContainsDup: Problem = {
	id: "contains-duplicates",
	title: "15. Contains Duplicates",
	problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code>, return <code>True</code> if any value appears at least twice in the array, and return <code>False</code> if every element is distinct.
</p>
`
,
    

	examples: [
		{
			id: 1,
			inputText:"nums = [1,2,3,1]",
			outputText:"true",
			explanation: `The element 1 occurs at the indices 0 and 3.
            `
            ,   
		},
		{
			id: 2,
			inputText:"nums = [1,2,3,4]",
			outputText:"false",
            explanation:`All elements are distinct.
            `
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= nums.length <= 10^5</code></li>
    <li class='mt-2'><code>-10^9 <= nums[i] <= 10^9
</code></li>
    `,
	handlerFunction: handlerContainsDup,
	starterCode: starterCodeContainsDup,
	order: 15,
	starterFunctionName: "function(",
};
