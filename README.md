# Best Time to Buy and Sell Stock


## Descripton:

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

Find the maximum profit you can achieve. You may complete at most two transactions (Buy → Sell → Buy → Sell). *(one transaction here means Buy **and** Sell)*

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again, *see example 2 for clarification*).

### Constraints:

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 105`
 
 ## Submission:

- **Submit a function/method named `Submission` that will have one parameter `prices` (of type array) and return type integer.**
  - *(for any languages that do not support the concept of functions, please contact me to find a way to submit your code)*
- If you want to use external libraries that might not be supported by the language by default, please reach out to me or check if they are supported by [Judge0 IDE](https://ide.judge0.com/).
 
## Grading
- Solutions must pass all test cases, including edge cases (tests used for grading will be from the LeetCode testcases)
- The fastest solution from each language will be considered for final placement.
- If less than three languages are submitted, the remaining placements will belong to the next fastest solutions independent of the language.


### Example 1:

Input: `prices = [3,3,5,0,0,3,1,4]`

Output: `6`

Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

### Example 2:


Input: `prices = [1,2,3,4,5]`

Output: `4`

Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

### Example 3:

Input: `prices = [7,6,4,3,1]`

Output: `0`

Explanation: In this case, no transaction is done, i.e. max profit = 0.

### Due Date
All solutions must be submitted through this UI or by email by Feb 12th at 23:59:59

**LeetcodeURL:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
)

 

