// At a lemonade stand, each lemonade costs $5.Customers are standing in a queue to buy from you, and order one at a time(in the order specified by bills).Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with correct change, or false otherwise.

var lemonadeChange = function (bills) {
    let register = { 'fives': 0, 'tens': 0 };
    for (let x = 0; x < bills.length; x++) {
        if (bills[x] == 5) {
            register['fives'] += 1;
        } else if (bills[x] == 10) {
            register['fives'] -= 1; //give back a five
            if (register['fives'] < 0) {
                return false;
            }
            register['tens'] += 1; //add a 10 to the register
        } else if (bills[x] == 20) {
            register['fives'] -= 1; //give back a five
            register['tens'] -= 1; //add a 10 to the register
            if (register['fives'] < 0 || register['tens'] < 0) {
                //you could payback with all 5's
                //specifically if out of 10s
                if (register['tens'] < 0) {
                    register['tens'] += 1;
                    register['fives'] -= 2; //removing two instead of three because I already removed one earlier
                    if (register['fives'] < 0) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
    }

    return true;
};

//     Example 1:

// Input: bills = [5, 5, 5, 10, 20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.
//     Example 2:

// Input: bills = [5, 5, 10, 10, 20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can not give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.
//     Example 3:

// Input: bills = [5, 5, 10]
// Output: true
// Example 4:

// Input: bills = [10, 10]
// Output: false