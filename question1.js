function isValid(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (!brackets[char]) {
            stack.push(char);
        } else if (!stack.length || stack.pop() !== brackets[char]) {
            return false;
        }
    }
    
    return stack.length === 0;
 }
