import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeSearchInsert = `var searchInsert = function(nums, target) {
    
};;`;

// checks if the user has the correct code
const handlerSearchInsert = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[1,3,5,6],
            [1,3,5,6],
            [1,3,5,6]
			
		];
        const target = [5,2,7]
		const res = [2,1,4];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i],target[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("SearchInsert handler function error");
		throw new Error(error);
	}
};

export const SearchInsert: Problem = {
	id: "search-insert-position",
	title: "19. Search Insert Position",
	problemStatement: `<p class='mt-3'>
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
</p>
<p class='mt-3'>
You must write an algorithm with <code>O(log n)</code> runtime complexity.


</p>
`
,
    

	examples: [
		{
			id: 1,
			inputText:"nums = [1,3,5,6], target = 5",
			outputText:"2",
		},
		{
			id: 2,
			inputText:"nums = [1,3,5,6], target = 2",
			outputText:"1",
		},
        {
			id: 3,
			inputText:" nums = [1,3,5,6], target = 7",
			outputText:"4",
		},
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>
    <li class='mt-2'><code>-10^4 <= nums[i] <= 10^4
</code></li>
    <li class='mt-2'><code>nums</code> contains distinct values sorted in ascending order.</li>
    <li class='mt-2'><code>-10^4 <= target <= 10^4</code></li>
    `,
	handlerFunction: handlerSearchInsert,
	starterCode: starterCodeSearchInsert,
	order: 19,
	starterFunctionName: "function(",
};
