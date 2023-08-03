const findMaxChar = (ch) => {
  let maxchar = " ";
  let maxcount = 0;
  let charobj = {};
  for (let i = 0; i < ch.length; i++) {
    let str = ch[i];
    charobj[str] = charobj[str] + 1 || 1;

    if (charobj[str] > maxcount) {
      maxchar = str;
      maxcount = charobj[str];
    }
  }
  return maxchar;
};

console.log(findMaxChar("I loveeeeeeeeeeeeeeeeee youuuuuuuuuuuuuuu"));
