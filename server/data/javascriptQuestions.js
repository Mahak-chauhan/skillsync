
   const javascriptQuestions = [

{
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "JavaScript was created at Netscape by Brendan Eich."
},

{
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "let", "const", "define"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "let creates a block-scoped variable."
},

{
    question: "Which keyword declares a constant?",
    options: ["let", "const", "var", "static"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "const declares variables that cannot be reassigned."
},

{
    question: "Which symbol is used for single-line comments?",
    options: ["<!-- -->", "//", "/* */", "#"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "// is used for single-line comments."
},

{
    question: "Which function prints data to the browser console?",
    options: ["print()", "display()", "console.log()", "echo()"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "console.log() outputs data to the console."
},

{
    question: "Which operator checks both value and type?",
    options: ["==", "!=", "===", "="],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "=== performs strict equality comparison."
},

{
    question: "Which value represents 'no value assigned'?",
    options: ["0", "null", "undefined", "false"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "undefined means a variable has not been assigned a value."
},

{
    question: "Which keyword creates a function?",
    options: ["method", "func", "function", "define"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "The function keyword defines a function."
},

{
    question: "Which method converts JSON into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "JSON.parse() converts JSON text into an object."
},

{
    question: "Which method converts a JavaScript object into JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.encode()", "JSON.toObject()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "JSON.stringify() converts objects into JSON strings."
},

{
    question: "Which array method adds an element at the end?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "push() adds elements to the end of an array."
},

{
    question: "Which array method removes the last element?",
    options: ["shift()", "splice()", "pop()", "slice()"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "pop() removes and returns the last element."
},

{
    question: "Which loop is best for iterating over array values?",
    options: ["for...of", "for...in", "while", "do...while"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "for...of iterates over iterable values."
},

{
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "throw", "throws"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "The try block contains code that may throw an exception."
},

{
    question: "Which keyword is used to throw a custom exception?",
    options: ["throws", "throw", "catch", "error"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "throw is used to throw custom errors."
},
{
    question: "Which function is used to execute code after a delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "setTimeout() executes code once after a specified delay."
},

{
    question: "Which function repeatedly executes code at fixed intervals?",
    options: ["setTimeout()", "repeat()", "setInterval()", "loop()"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "setInterval() repeatedly executes a function."
},

{
    question: "Which keyword is used to define an ES6 class?",
    options: ["object", "prototype", "class", "Class"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "The class keyword was introduced in ES6."
},

{
    question: "Which keyword refers to the current object?",
    options: ["self", "this", "current", "object"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "The this keyword refers to the current execution context."
},

{
    question: "Which operator is used to spread array elements?",
    options: ["...", "**", "=>", "::"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "The spread operator (...) expands iterable elements."
},

{
    question: "Which keyword is used to import modules?",
    options: ["require", "include", "import", "using"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "ES6 modules use the import keyword."
},

{
    question: "Which keyword is used to export modules?",
    options: ["send", "export", "module", "share"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "The export keyword makes variables or functions available to other modules."
},

{
    question: "Which array method creates a new array after applying a function?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "map() returns a new transformed array."
},

{
    question: "Which array method returns elements matching a condition?",
    options: ["find()", "filter()", "map()", "sort()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "filter() returns all elements satisfying the condition."
},

{
    question: "Which array method returns the first matching element?",
    options: ["find()", "filter()", "map()", "reduce()"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "find() returns the first matching element."
},

{
    question: "Which array method combines all elements into a single value?",
    options: ["reduce()", "map()", "filter()", "every()"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Hard",
    explanation: "reduce() accumulates array values into one result."
},

{
    question: "Which method checks if every element satisfies a condition?",
    options: ["every()", "some()", "find()", "filter()"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "every() returns true only if all elements satisfy the condition."
},

{
    question: "Which method checks if at least one element satisfies a condition?",
    options: ["every()", "some()", "find()", "reduce()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "some() returns true if at least one element matches."
},

{
    question: "Which JavaScript object represents dates and times?",
    options: ["Clock", "Time", "Date", "Calendar"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "The Date object is used for working with dates and times."
},

{
    question: "Which built-in method converts a string to an integer?",
    options: ["Number()", "parseInt()", "parseFloat()", "toInt()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "parseInt() converts a string into an integer."
},
{
    question: "Which built-in object is used to work with regular expressions?",
    options: ["Regex", "Pattern", "RegExp", "Expression"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "RegExp is the built-in object for regular expressions."
},

{
    question: "Which keyword is used for asynchronous programming?",
    options: ["sync", "async", "await", "promise"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "The async keyword declares an asynchronous function."
},

{
    question: "Which keyword pauses execution until a Promise resolves?",
    options: ["wait", "pause", "await", "hold"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "await pauses execution until the Promise is resolved."
},

{
    question: "Which object represents an asynchronous operation?",
    options: ["Future", "Promise", "Async", "Callback"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "A Promise represents the eventual completion or failure of an asynchronous operation."
},

{
    question: "Which DOM method selects an element by its ID?",
    options: [
        "getElementById()",
        "querySelectorAll()",
        "getElementsByClassName()",
        "findElement()"
    ],
    answer: 0,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "getElementById() selects an element using its unique ID."
},

{
    question: "Which DOM method selects the first matching CSS selector?",
    options: [
        "querySelector()",
        "getElementById()",
        "querySelectorAll()",
        "find()"
    ],
    answer: 0,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "querySelector() returns the first matching element."
},

{
    question: "Which DOM method selects all matching CSS selectors?",
    options: [
        "querySelectorAll()",
        "querySelector()",
        "getElementsByTagName()",
        "findAll()"
    ],
    answer: 0,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "querySelectorAll() returns all matching elements."
},

{
    question: "Which event occurs when a button is clicked?",
    options: ["change", "mouseover", "click", "submit"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "The click event fires when an element is clicked."
},

{
    question: "Which event occurs when the user presses a keyboard key?",
    options: ["keypress", "keydown", "keyup", "All of the above"],
    answer: 3,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "keypress, keydown, and keyup are keyboard-related events."
},

{
    question: "Which operator provides a default value for null or undefined?",
    options: ["??", "||", "&&", "?."],
    answer: 0,
    category: "JavaScript",
    difficulty: "Hard",
    explanation: "The nullish coalescing operator (??) returns the right operand only if the left is null or undefined."
},

{
    question: "Which operator safely accesses nested object properties?",
    options: ["??", "?.", "::", "**"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Hard",
    explanation: "Optional chaining (?.) avoids errors when accessing nested properties."
},

{
    question: "Which method sorts an array?",
    options: ["order()", "sort()", "arrange()", "organize()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "sort() sorts the elements of an array."
},

{
    question: "Which method reverses an array?",
    options: ["flip()", "reverse()", "invert()", "rotate()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "reverse() reverses the order of array elements."
},

{
    question: "Which statement is used to stop a loop?",
    options: ["continue", "stop", "break", "exit"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "break immediately exits a loop."
},

{
    question: "Which statement skips the current iteration of a loop?",
    options: ["skip", "next", "continue", "break"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "continue skips the current iteration and proceeds to the next one."
},

{
    question: "Which method removes the first element of an array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    answer: 0,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "shift() removes the first element of an array."
},

{
    question: "Which method adds an element to the beginning of an array?",
    options: ["push()", "prepend()", "unshift()", "insert()"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Easy",
    explanation: "unshift() adds one or more elements to the beginning of an array."
},

{
    question: "Which method removes or replaces elements in an array?",
    options: ["slice()", "splice()", "split()", "replace()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "splice() can add, remove, or replace array elements."
},

{
    question: "Which method returns a shallow copy of part of an array?",
    options: ["splice()", "slice()", "copy()", "clone()"],
    answer: 1,
    category: "JavaScript",
    difficulty: "Medium",
    explanation: "slice() returns a shallow copy of a portion of an array."
},

{
    question: "Which JavaScript engine is used by Google Chrome?",
    options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"],
    answer: 2,
    category: "JavaScript",
    difficulty: "Hard",
    explanation: "Google Chrome uses the V8 JavaScript engine."
}
];

module.exports = javascriptQuestions;