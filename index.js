function isPalindrome(word) {
  // Write your algorithm here
   // Step 1: Normalize the input
   const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    
   // Step 2: Initialize pointers
   let left = 0;
   let right = normalizedWord.length - 1;
   
   // Step 3: Palindrome check
   while (left < right) {
       // Compare characters at left and right pointers
       if (normalizedWord[left] !== normalizedWord[right]) {
           return false;
       }
       // Move pointers closer to the center
       left++;
       right--;
   }
   
   // Step 4: If all characters matched, it's a palindrome
   return true;
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    // Step 1: Normalize the input
    normalizedWord = convert word to lowercase and remove non-letter characters
    
    // Step 2: Initialize pointers
    left = 0
    right = length of normalizedWord - 1
    
    // Step 3: Palindrome check
    while left < right:
        // Compare characters at left and right pointers
        if normalizedWord[left] is not equal to normalizedWord[right]:
            return false
        // Move pointers closer to the center
        left++
        right--
    
    // Step 4: If all characters matched, it's a palindrome
    return true

*/

/*
  Add written explanation of your solution here
  Normalization: word.toLowerCase().replace(/[^a-z]/g, '') ensures that the input string word is converted to lowercase and all non-letter characters are removed. This step prepares the string for palindrome checking by ignoring case and non-alphabetic characters.

Pointers Initialization:

left starts at the beginning (0) of normalizedWord.
right starts at the end (length - 1) of normalizedWord.
Palindrome Check:

The while loop continues as long as left pointer is less than right pointer.
At each iteration, characters at left and right pointers are compared:
If they differ, the function returns false, indicating that the string is not a palindrome.
If they match, the pointers are adjusted (left++ and right--) to continue checking towards the center of the string.
Completion:

If the loop completes without finding any differing characters (left >= right), the function returns true, confirming that the string is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  //custom tests
  console.log("");
  console.log("Additional Test Cases:");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man, a plan, a canal, Panama"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello world"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Was it a car or a cat I saw?"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("This is not a palindrome"));
}

module.exports = isPalindrome;
