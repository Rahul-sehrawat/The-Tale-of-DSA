import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeAsteroid = `var asteroidCollision = function(asteroids) {
    
};`;

// checks if the user has the correct code
const handlerAsteroid = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const asteroids = [
			[5,10,-5],
            [8,-8],
            [10,2,-5]
		];
		const res = [
            [5,10],[],[10]
        ];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < asteroids.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(asteroids[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Asteroid handler function error");
		throw new Error(error);
	}
};

export const Asteroid: Problem = {
	id: "asteroid-collision",
	title: "17. Asteroid Collison",
	problemStatement: `<p class='mt-3'>
    We are given an array <code>asteroids</code> of integers representing asteroids in a row.
</p>
<p class='mt-3'>
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
</p>
<p class='mt-3'>
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
</p>
`
,
    

	examples: [
		{
			id: 1,
			inputText:"asteroids = [5,10,-5]",
			outputText:"[5,10]",
			explanation: `The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
            `
            ,   
		},
		{
			id: 2,
			inputText:"asteroids = [8,-8]",
			outputText:"[]",
            explanation:`The 8 and -8 collide exploding each other.
            `
		},
        {
			id: 3,
			inputText:"asteroids = [10,2-5]",
			outputText:"[10]",
            explanation:`The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

            `
		},

		
	],
	constraints: `
    <li class='mt-2'><code>2 <= asteroids.length <= 10^4</code></li>
    <li class='mt-2'><code>-1000 <= asteroids[i] <= 1000
</code></li>
    <li class='mt-2'><code>asteroids[i] != 0</code></li>
    `,
	handlerFunction: handlerAsteroid,
	starterCode: starterCodeAsteroid,
	order: 17,
	starterFunctionName: "function(",
};
