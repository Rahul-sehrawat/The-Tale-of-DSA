import assert from "assert";
import { Problem } from "../types/problem";


const starterCodekoko = `var minEatingSpeed = function(piles, h) {
    //Write your code here    


};`;

// checks if the user has the correct code
const handlerkoko = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const piles = [
			[3,6,7,11],
			[30,11,23,4,20],
            [30,11,23,4,20],
		];
        const h = [8,5,6]
		const speed = [4,30,23];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < piles.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(piles[i],h[i]);
			assert.deepStrictEqual(result, speed[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Rob handler function error");
		throw new Error(error);
	}
};

export const koko_eating: Problem = {
	id: "koko-eating-bananas",
	title: "10. Koko Eating Bananas",
	problemStatement: `<p class='mt-3'>
    Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>ith</code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in h hours.
</p>
<p class='mt-3'>
Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.
</p>
<p class='mt-3'>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p>
<p class='mt-3'>Return the minimum integer <code>k</code> such that she can eat all the bananas within h hours.</p>
`,
    

	examples: [
		{
			id: 1,
			inputText: "piles = [3,6,7,11], h = 8",
			outputText: "4",   
		},
		{
			id: 2,
			inputText: "piles = [30,11,23,4,20], h = 5",
			outputText: "30",
        },
        {
            id:3,
            inputText: "piles = [30,11,23,4,20], h = 6",
	    	outputText: "23",
        },
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= piles.length <= 10^4</code></li>
    <li class='mt-2'><code>piles.length <= h <= 10^9</code></li>
    <li class='mt-2'><code>1 <= piles[i] <= 10^9</code></li>
    `,
	handlerFunction: handlerkoko,
	starterCode: starterCodekoko,
	order: 10,
	starterFunctionName: "function(",
};
