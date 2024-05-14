function removeInvalidParentheses() {
    const input = document.getElementById("input").value.trim();
    const result = removeParentheses(input);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Valid Expression:</strong> " + result;
  }
  
  function removeParentheses(s) {
    const result = [];
    const stack = [];
  
    let openCount = 0;
    let removeCount = 0;
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (char === "(") {
        stack.push(i);
        openCount++;
      } else if (char === ")") {
        if (openCount > 0) {
          stack.pop();
          openCount--;
        } else {
          removeCount++;
        }
      }
    }
  
    while (stack.length > 0) {
      result.push(stack.pop());
      removeCount++;
    }
  
    let res = "";
    for (let i = 0; i < s.length; i++) {
      if (!result.includes(i)) {
        res += s.charAt(i);
      }
    }
  
    return res;
  }
  