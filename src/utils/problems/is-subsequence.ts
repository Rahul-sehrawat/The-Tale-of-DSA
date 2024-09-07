import assert from "assert";
import { Problem } from "../types/problem";


const starterCodeIsSeq = `var isSubsequence = function(s, t) {
    
};`;

// checks if the user has the correct code
const handlerIsSeq = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const s = [
			"abc","axc"
		];
        const t = [
            "ahbgdc","ahbgdc"
        ]

        const res = [true,false]

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < t.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(s[i],t[i]);
			assert.deepStrictEqual(result, res[i]);
		}
		return true;
	} catch (error: any) {
		console.log("IsSeq handler function error");
		throw new Error(error);
	}
};

export const IsSequence: Problem = {
	id: "is-subsequence",
	title: "18. Is Subsequence",
	problemStatement: `<p class='mt-3'>
    Given two strings <code>s</code> and <tcode></tcode>, return true if <code>s</code> is a subsequence of <code>t</code>, or <code>false</code> otherwise.
</p>
<p class='mt-3'>
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>"ace"</code> is a subsequence of <code>"abcde"</code> while <code>"ace"</code> is not).
</p>
`
,
    

	examples: [
		{
			id: 1,
			inputText:' s = "abc", t = "ahbgdc"',
			outputText:"true", 
		},
		{
			id: 2,
			inputText:'s = "axc", t = "ahbgdc"',
			outputText:"false",			
		},
		
	],
	constraints: `
    <li class='mt-2'><code>0 <= s.length <= 100</code></li>
    <li class='mt-2'><code>0 <= t.length <= 104</code></li>
    <li class='mt-2'><code>s</code> and <code>t</code> consist only of lowercase English letters.</li>
    `,
	handlerFunction: handlerIsSeq,
	starterCode: starterCodeIsSeq,
	order: 18,
	starterFunctionName: "function(",
};
