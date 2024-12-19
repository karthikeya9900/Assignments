Power Set
Overview
The goal of this assignment is to write a JavaScript function that generates the power set of a given array. 
The power set of a set is the collection of all possible subsets, including the empty subset and the set itself.

For example:

Input: [1, 2, 3]
Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
This exercise helps build understanding of recursion, iteration, 
and combinatorics in programming.

Objectives
Write a function generatePowerSet(arr) that:

Accepts an array of unique elements.
Returns the power set of the array.
Follow these guidelines:

Each subset in the power set should be represented as an array.
The order of subsets does not matter.
Examples
Example 1:
Input:

generatePowerSet([1, 2, 3]);
Output:

[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
Example 2:
Input:

generatePowerSet(['a', 'b']);
Output:

[[], ['a'], ['b'], ['a', 'b']]
Example 3:
Input:

generatePowerSet([]);
Output:

[[]]
Function Signature
function generatePowerSet(arr) {
  // Your implementation here
}
What is a Power Set?
The power set of a set is the collection of all possible subsets of 
that set, including:

The empty subset [].
Single-element subsets [x].
Multi-element subsets.
The full set itself.
For an input array of size ( n ), the power set will contain ( 2^n ) subsets.

Example Breakdown
Input: [1, 2]
The subsets of [1, 2] are:

The empty subset: []
Single-element subsets: [1], [2]
Multi-element subsets: [1, 2]
Combine them:

[[], [1], [2], [1, 2]]
Guidelines
Input Constraints:

The input array will contain at most 20 elements to avoid performance issues.
Elements may be of any data type but are considered unique.
Output:

Each subset should be represented as an array.
Order of subsets does not matter (e.g., [[], [1], [2]] is 
equivalent to [[1], [], [2]]).
