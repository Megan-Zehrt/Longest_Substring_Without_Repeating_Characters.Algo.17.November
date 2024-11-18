// 3. Longest Substring Without Repeating Characters



// Given a string s, find the length of the longest substring without repeating characters.









/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let set = new Set()
    let left = 0
    let right = 0
    let max = 0

    while(right < s.length){

        let char = s[right]

        while(set.has(char)){
            set.delete(s[left])
            left++
        }

        set.add(char)

        max = Math.max(max, right - left + 1)

        right++
    }

    return max
};


