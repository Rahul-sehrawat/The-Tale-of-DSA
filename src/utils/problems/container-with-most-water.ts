import assert from "assert";
import { Problem } from "../types/problem";
import water from "./images/water.jpg";

const starterCodeMostWater = `var maxArea = function(height) {
 //Write your code here   

};`;

// checks if the user has the correct code
const handlerMaxArea = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const height = [
			[1,8,6,2,5,4,8,3,7],
			[1,1],
		];
		const maxArea = [49,1];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < height.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(height[i]);
			assert.deepStrictEqual(result, maxArea[i]);
		}
		return true;
	} catch (error: any) {
		console.log("MaxArea handler function error");
		throw new Error(error);
	}
};

export const Container_With_Most_Water: Problem = {
	id: "container-with-most-water",
	title: "6. Container With Most Water",
	problemStatement: `<p class='mt-3'>
    You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>ith</code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
</p>
<p class='mt-3'>
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
</p>
<p class='mt-3'>Return the maximum amount of water a container can store.
</p>
<p class='mt-3'><b>Notice</b> that you may not slant the container.
</p>`
,
    

	examples: [
		{
			id: 1,
			inputText: "height = [1,8,6,2,5,4,8,3,7]",
			outputText: "49",
			explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.",
            img: water.src
		},
		{
			id: 2,
			inputText: "[1,1]",
			outputText: "1",
			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>n == height.length</code></li>
    <li class='mt-2'><code>2 <= n <= 10^5</code></li>
    <li class='mt-2'><code>0 <= height[i] <= 10^4</code></li>
    `,
	handlerFunction: handlerMaxArea,
	starterCode: starterCodeMostWater,
	order: 6,
	starterFunctionName: "function(",
};
