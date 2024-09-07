export type Solution = {
	id: string;
	title: string;
	code:string
};



export const Solutions: Solution[] = [
	{
		id: "two-sum",
		title: 'Two Sum',
        code: '"function twoSum(nums,target){\n  // Write your code here\n   map = {};\n  \n    for(let i =0; i < nums.length; i++){\n      let diff = target - nums[i];\n      if (diff in map){\n        return [map[diff],i]\n      }\n      map[nums[i]] = i;\n    }\n};"',
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		code: '"\nfunction reverseLinkedList(head) {\n  // Write your code here\n   let prev = null;\n    let curr = head;\n  \n    while (curr !== null) {\n      nxt = curr.next;\n      curr.next = prev;\n      prev = curr;\n      curr = nxt;\n      }\n    return prev\n};"',
		
	},
	{
		id: "jump-game",
		title: "Jump Game",
        code: '"function canJump(nums) {\n  // Write your code here\n   let battery = 0;\n    for (let n =0; n <nums.length; n++){\n      if( battery < 0){\n          return false\n      }\n      else if (nums[n] > battery){\n        battery = nums[n];\n      }\n      battery -=1;\n    }\n    return true\n};"',
		
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
        code: '"function validParentheses(s) {\n  // Write your code here\n   let stack = [];\n      for (let idx = 0; idx < s.length; idx++) {   \n          if (s[idx] == "{") {\n              stack.push("});\n          } else if (s[idx] == "[") {\n              stack.push("]");\n          } else if (s[idx] == "(") {\n              stack.push(")");\n          }\n          else if (stack.pop() !== s[idx]) {\n              return false;\n          }\n      }\n      return stack.length == [];\n};"',
		
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
        code: '"\nfunction searchMatrix(matrix, target) {\n  // Write your code here\n      let m = matrix.length;\n    let n = matrix[0].length;\n    let start = 0;\n    let end = m*n -1;\n  \n    while (start<= end) {\n      let mid = start + Math.floor((end-start)/2);\n      r = Math.floor(mid/n);\n      c = Math.floor(mid%n);\n  \n      if (matrix[r][c] === target) {\n        return true;\n      }    \n      else if (matrix[r][c] < target) {\n        start = mid +1;\n      }\n      else end = mid-1;\n    }\n    return false;\n};"',
		
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
        code: '"var maxArea = function(height) {\n //Write your code here   \n   let left=0, right=height.length-1;\n    let maxArea = 0;\n    while(left<right){\n        let area = Math.min(height[left], height[right]) * (right-left);\n        maxArea = Math.max(area, maxArea);\n        if(height[left] <= height[right]){\n            left++;\n        }\n        else {\n            right--;\n        }\n    }\n    return maxArea;\n};"',
		
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
        code: '"var maxProfit = function(prices) {\n  //Write your code here \n   const n = prices.length;\n    let profit = 0;\n    let minPrice = prices[0];\n\n    for (let i = 1; i < n; ++i) {\n        if (prices[i] < minPrice) {\n            minPrice = prices[i];\n        } else {\n            profit = Math.max(profit, prices[i] - minPrice);\n        }\n    }\n\n    return profit;\n  \n};"',
		
	},
	{
		id: "house-robber",
		title: "House Robber",
        code: '"var rob = function(nums) {\n    //Write your code here    \n    const n = nums.length\n\n  if(n ==1){return nums[0]}\n\n  const dp = Array(n).fill(0);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0],nums[1]);\n\n  for(let i = 2; i <n ; i++){\n    dp[i] = Math.max(dp[i-1], nums[i]+dp[i-2]);\n  }\n  return dp[n-1]\n\n};"',
		
	},
	{
		id: "house-robber-II",
		title: "House Robber II",
        code: '"var rob = function(nums) {\n    //Write your code here    \n      const len = nums.length\n  if(len <4) return Math.max(...nums);\n\n  function helper(start,end){\n    let prev = 0 , beforePrev = 0;\n    for(let i = start;i<end;i++){\n      let temp =prev;\n      prev = Math.max(nums[i]+beforePrev,prev);\n      beforePrev = temp;\n    }\n    return prev;\n    }\n    return Math.max(helper(0,len-1),helper(1,len));\n};"',
		
	},
	{
		id: "koko-eating-bananas",
		title: "Koko Eating Bananas",
        code: '"var minEatingSpeed = function(piles, h) {\n    //Write your code here    \n    let start = 1;\n    let end = Math.max(...piles);\n  \n    while (start <=end) {\n      let mid = Math.floor(start + (end -start)/2);\n      let hours = 0;\n      for (let pile of piles) {\n        hours += Math.ceil(pile/mid);\n      }\n      if( hours >h){\n        start = mid +1;\n      }else{\n        end = mid -1;\n      }\n    }\n     return start;\n};"',
		
	},
	{
		id: "n-queens",
		title: "N-Queens",
        code: "Not Found",
		
	},
	{
		id: "daily-temperatures",
		title: "Daily Temperatures",
        code: '"var dailyTemperatures = function(temperatures) {\n    //Write your code\n   const stack = [];\n    const result = new Array(temperatures.length).fill(0);\n\n    for (let i = temperatures.length - 1; i >= 0; --i) {\n        while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {\n            stack.shift();\n        }\n\n        if (stack.length === 0) {\n            result[i] = 0;\n        } else {\n            result[i] = stack[0] - i;\n        }\n\n        stack.unshift(i);\n    }\n\n    return result;\n\n};"',
		
	},
	{
		id: "number-of-islands",
		title: "Number of Islands",
        code: '"var numIslands = function(grid) {\n    //Write your code\n    let count = 0;\n\t\n\tfunction callDFS(grid, i, j) {\n\t\tif (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == "0) {return;}\n\t\t\n\t\tgrid[i][j] = "0;\n\t\tcallDFS(grid, i + 1, j); // down\n\t\tcallDFS(grid, i - 1, j); // up\n\t\tcallDFS(grid, i, j + 1); // right\n\t\tcallDFS(grid, i, j - 1); // left\n    }\n\n\tfor (let i = 0; i < grid.length; i++) {\n\t\tfor (let j = 0; j < grid[i].length; j++) {\n\t\t\tif (grid[i][j] == "1) {\n\t\t\t\tcount += 1;\n\t\t\t\tcallDFS(grid, i, j);\n\t\t\t}\n\t\t}\n\t}\n\treturn count;\n};"',
		
	
	},
	{
		id: "climbing-stairs",
		title: "Climbing Stairs",
        code: '"var climbStairs = function(n) {\n        const dp = new Array(n + 1).fill(0);\n    dp[0] = 1;\n    dp[1] = 1;\n\n    for (let i = 2; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n\n    return dp[n];  \n};"',
	},
	{
		id: "contains-duplicate",
		title: "Contains Duplicate",
        code: '"var containsDuplicate = function(nums) {\n        const numSet = new Set();\n\n    for (const n of nums) {\n        if (numSet.has(n)) {\n            return true;\n        }\n        numSet.add(n);\n    }\n    \n    return false;\n};"',
	},
	{
		id: "missing-number",
		title: "missing Number",
        code: '"var missingNumber  = function(nums) {\n            let res = nums.length;\n        \n        for (let i = 0; i < nums.length; i++) {\n            res += i - nums[i];\n        }\n        \n        return res;\n};"',
	},
	{
		id: "asteroid-collision",
		title: "Asteroid Collision",
        code: '"var asteroidCollision = function(asteroids) {\n        const res = []\n    \n    for (let i = 0; i < asteroids.length; i++) {\n        const last = res[res.length - 1]\n        const cur = asteroids[i]\n        \n        if (!res.length || last < 0 || cur > 0) {\n            res.push(cur)\n        } else if (-cur == last) {\n            res.pop()\n        } else if (-cur > last) {\n            res.pop()\n            i--\n        }\n    }\n    \n    return res \n};"',
	},
	{
		id: "is-subsequence",
		title: "Is Subsequence",
        code: '"var isSubsequence = function(s, t) {\n        let sp = 0;\n    let tp = 0;\n\n    while (sp < s.length && tp < t.length) {\n        if (s[sp] === t[tp]) {\n            sp++;\n        }\n        tp++;\n    }\n\n    return sp === s.length;  \n};"',
	},
	{
		id: "search-insert-position",
		title: "Search Insert Position",
        code: '"var searchInsert = function(nums, target) {\n        let left = 0;\n    let right = nums.length - 1;\n\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n\n        if (nums[mid] === target) {\n            return mid;\n        } else if (nums[mid] > target) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n\n    return left;    \n};;"',
	},
	
];


