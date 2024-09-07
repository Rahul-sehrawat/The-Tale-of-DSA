import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";
import {Container_With_Most_Water} from "./container-with-most-water";
import {stocks_profit} from "./best-time-to-buy-and-sell-stock";
import { house_robber } from "./house-robber";
import { house_robber_II } from "./house-robber-II";
import { koko_eating } from "./koko-eating-bananas";
import { queens } from "./n-queens";
import {DailyT} from './daily-temperatures'
import { NoIslands } from "./number-of-islands";
import {ClimbingStairs} from "./climbing-stairs";
import {ContainsDup} from './contains-duplicate'
import {MissingNumber} from './missing-number'
import {Asteroid} from './asteroid-collision'
import {IsSequence} from './is-subsequence'
import {SearchInsert} from './search-insert-position'

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	"container-with-most-water": Container_With_Most_Water,
	"best-time-to-buy-and-sell-stock":stocks_profit,
	"house-robber":house_robber,
	"house-robber-II": house_robber_II,
	"koko-eating-bananas":koko_eating,
	"n-queens": queens,
	"daily-temperatures": DailyT,
	"number-of-islands": NoIslands,
	"climbing-stairs": ClimbingStairs,
	"contains-duplicate" : ContainsDup,
	"missing-number": MissingNumber,
	"asteroid-collision": Asteroid,
	"is-subsequence": IsSequence,
	"search-insert-position": SearchInsert
};
