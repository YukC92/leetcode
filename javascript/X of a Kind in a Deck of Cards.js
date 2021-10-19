// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.

var hasGroupsSizeX = function (deck) {
    if (deck.length === 1) return false;

    let table = new Map();

    for (let i = 0; i < deck.length; i++) {
        if (table.has(deck[i])) table.set(deck[i], table.get(deck[i]) + 1);
        if (!table.has(deck[i])) table.set(deck[i], 1);
    }

    table = [...table.values()];
    const maxValue = Math.max(...table);

    for (let i = 2; i <= maxValue; i++) {
        if (table.every(el => el % i === 0)) return true;
    }

    return false;
};


//     Example 1:

// Input: deck = [1, 2, 3, 4, 4, 3, 2, 1]
// Output: true
// Explanation: Possible partition[1, 1], [2, 2], [3, 3], [4, 4].
//     Example 2:

// Input: deck = [1, 1, 1, 2, 2, 2, 3, 3]
// Output: false
// Explanation: No possible partition.
//     Example 3:

// Input: deck = [1]
// Output: false
// Explanation: No possible partition.
//     Example 4:

// Input: deck = [1, 1]
// Output: true
// Explanation: Possible partition[1, 1].
//     Example 5:

// Input: deck = [1, 1, 2, 2, 2, 2]
// Output: true
// Explanation: Possible partition[1, 1], [2, 2], [2, 2].