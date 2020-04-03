function countCharacters(words, chars) {
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    var charcopy = chars;
    var flag = words[i].split("").every(item => {
      var flag1 = chars.includes(item);
      if (flag1) {
        charcopy = charcopy.replace(item, "");
        return true;
      }
    });
    if (flag) count += words[i].length;
  }
  return count;
}
