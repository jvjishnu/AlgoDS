//multiple pointers pattern

let isSubsequence = (str1, str2) => {
  let left = right = 0;
  if (!str1) return true;
  while (right < str2.length) {
    if (str2[right] === str1[left]) left++;
    if (left === str1.length) return true;
    right++;
  }
  return false;
}

console.log(isSubsequence('abc', 'ooooabcthg'));