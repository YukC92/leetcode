// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33

class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<List<Integer>> dp = new ArrayList<List<Integer>>();
        ArrayList<Integer> sp = new ArrayList<Integer>();
        sp.add(1);
        dp.add(sp);

        ArrayList<Integer> sp2 = new ArrayList<Integer>();
        sp2.add(1);
        sp2.add(1);
        dp.add(sp2);

        for (int i = 2; i <= rowIndex; i++) {
            ArrayList<Integer> sp3 = new ArrayList<Integer>();
            sp3.add(1);
            List<Integer> use = dp.get(i - 1);
            int p1 = 0;
            int p2 = 1;
            while (p2 < use.size()) {
                int sum = use.get(p1) + use.get(p2);
                sp3.add(sum);
                p1++;
                p2++;
            }
            sp3.add(1);
            dp.add(sp3);
        }
        return dp.get(rowIndex);
    }
}