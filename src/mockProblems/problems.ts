export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
	},
	{
		id: "reverse-linked-list",
		title: "Reverse Linked List",
		difficulty: "Hard",
		category: "Linked List",
		order: 2,
		videoId: "",
	},
	{
		id: "jump-game",
		title: "Jump Game",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 3,
		videoId: "",
	},
	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stack",
		order: 4,
		videoId: "xty7fr-k0TU",
	},
	{
		id: "search-a-2d-matrix",
		title: "Search a 2D Matrix",
		difficulty: "Medium",
		category: "Binary Search",
		order: 5,
		videoId: "ZfFl4torNg4",
	},
	{
		id: "container-with-most-water",
		title: "Container With Most Water",
		difficulty: "Medium",
		category: "Two Pointers",
		order: 6,
		videoId: "",
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 7,
		videoId: "",
	},
	{
		id: "house-robber",
		title: "House Robber",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 8,
		videoId: "",
	},
	{
		id: "house-robber-II",
		title: "House Robber II",
		difficulty: "Medium",
		category: "Dynamic Programming",
		order: 9,
		videoId: "",
	},
	{
		id: "koko-eating-bananas",
		title: "Koko Eating Bananas",
		difficulty: "Medium",
		category: "Binary Search",
		order: 10,
		videoId: "",
	},
	{
		id: "n-queens",
		title: "N-Queens",
		difficulty: "Hard",
		category: "Backtracking",
		order: 11,
		videoId: "",
	},
	{
		id: "daily-temperatures",
		title: "Daily Temperatures",
		difficulty: "Medium",
		category: "Stack",
		order: 12,
		videoId: "",
	},
	{
		id: "number-of-islands",
		title: "Number of Islands",
		difficulty: "Medium",
		category: "Graph",
		order: 13,
		videoId: "",
	},
	
];
