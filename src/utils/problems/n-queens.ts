import assert from "assert";
import { Problem } from "../types/problem";
import n_queens from "./images/n_queens.jpg";


const starterCodeQueens = `var solveNQueens = function(n) {
    //Write your code

};`;

// checks if the user has the correct code
const handlerQueens = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const n = [
			[4],
			[1],
		];
        
		const solve = [
            [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]],
            [["Q"]],
 
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

export const queens: Problem = {
	id: "n-queens",
	title: "11. N-Queens",
	problemStatement: `<p class='mt-3'>
    The n-queens puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.
</p>
<p class='mt-3'>
Given an integer <code>n</code>, return all distinct solutions to the <b>n-queens puzzle</b>. You may return the answer in <b>any order</b>.
</p>
<p class='mt-3'>Each solution contains a distinct board configuration of the n-queens' placement, where <code>'Q'</code> and <code>'.'</code> both indicate a queen and an empty space, respectively.
</p>
`,
    

	examples: [
		{
			id: 1,
			inputText: "n = 4",
			outputText: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]', 
            explanation:'There exist two distinct solutions to the 4-queens puzzle as shown above',
            img: n_queens.src, 
		},
		{
			id: 2,
			inputText: "n=1",
			outputText: '[["Q"]]',
        },
        
		
	],
	constraints: `
    <li class='mt-2'><code>1 <= n <= 9</code></li>
    `,
	handlerFunction: handlerQueens,
	starterCode: starterCodeQueens,
	order: 11,
	starterFunctionName: "function(",
};
