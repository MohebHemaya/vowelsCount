function count(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'A', 'e', 'E', 'O', 'o', 'U', 'u', 'i', 'I'];

  for (const char in str) {
    if (vowels.includes(str[char])) {
      vowelsCount++;
    }
  }
  return vowelsCount
}
let input = prompt('enter your word ')

let result = count(input)


console.log(result);

