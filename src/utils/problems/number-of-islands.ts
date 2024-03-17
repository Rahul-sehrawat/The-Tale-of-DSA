import assert from "assert";
import { Problem } from "../types/problem";



const starterCodeIslands = `var numIslands = function(grid) {
    //Write your code

};`;

// checks if the user has the correct code
const handlerIslands = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]],
            [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]],
        ];
        
		const solve = [
            1,3
 
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

export const NoIslands: Problem = {
	id: "number-of-islands",
	title: "13. Number of Islands",
    problemStatement: `<p class='mt-3'>
    Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return the number of islands.
  </p>
    <p class='mt-3'>
    An <b>island</b> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


    </p>
  `, 

	examples: [
		{
			id: 1,
			inputText: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
			outputText: '1', 
            
		},
		{
			id: 2,
			inputText: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
			outputText: '3',
        },
    
        
		
	],
	constraints: `
    <li class='mt-2'><code>m == grid.length</code></li>
    <li class='mt-2'><code>n == grid[i].length</code></li>
    <li class='mt-2'><code>1 <= m, n <= 300</code></li>
    <li class='mt-2'><code>grid[i][j] is '0' or '1'</code></li>
    `,
	handlerFunction: handlerIslands,
	starterCode: starterCodeIslands,
	order: 13,
	starterFunctionName: "function(grid",
};
