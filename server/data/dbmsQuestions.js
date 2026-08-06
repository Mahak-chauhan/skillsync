const dbmsQuestions = [

{
    question: "What does DBMS stand for?",
    options: [
        "Data Base Management System",
        "Database Managing Software",
        "Digital Base Management System",
        "Data Backup Management System"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "DBMS stands for Database Management System."
},

{
    question: "Which language is used to interact with relational databases?",
    options: [
        "HTML",
        "SQL",
        "CSS",
        "Python"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "SQL (Structured Query Language) is used to manage relational databases."
},

{
    question: "Which SQL command is used to retrieve data?",
    options: [
        "GET",
        "SELECT",
        "SHOW",
        "FETCH"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "SELECT retrieves records from a table."
},

{
    question: "Which key uniquely identifies each record in a table?",
    options: [
        "Foreign Key",
        "Candidate Key",
        "Primary Key",
        "Composite Key"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "A Primary Key uniquely identifies each row."
},

{
    question: "Which key creates a relationship between two tables?",
    options: [
        "Primary Key",
        "Alternate Key",
        "Foreign Key",
        "Super Key"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "A Foreign Key references the Primary Key of another table."
},

{
    question: "Which SQL clause is used to filter rows?",
    options: [
        "GROUP BY",
        "HAVING",
        "WHERE",
        "ORDER BY"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "WHERE filters records before grouping."
},

{
    question: "Which SQL clause sorts the result?",
    options: [
        "GROUP BY",
        "ORDER BY",
        "HAVING",
        "SORT"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "ORDER BY sorts the query result."
},

{
    question: "Which SQL function counts rows?",
    options: [
        "SUM()",
        "AVG()",
        "COUNT()",
        "TOTAL()"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "COUNT() returns the number of rows."
},

{
    question: "Which SQL function returns the highest value?",
    options: [
        "TOP()",
        "MAX()",
        "HIGH()",
        "LARGEST()"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "MAX() returns the highest value."
},

{
    question: "Which SQL function returns the lowest value?",
    options: [
        "LOW()",
        "MIN()",
        "SMALL()",
        "BOTTOM()"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "MIN() returns the minimum value."
},
{
    question: "Which SQL function calculates the average value?",
    options: [
        "AVG()",
        "MEAN()",
        "AVERAGE()",
        "MID()"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "AVG() returns the average value of a numeric column."
},

{
    question: "Which SQL function calculates the total of a column?",
    options: [
        "COUNT()",
        "TOTAL()",
        "SUM()",
        "ADD()"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "SUM() calculates the total of numeric values."
},

{
    question: "Which JOIN returns only matching records from both tables?",
    options: [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL JOIN"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "INNER JOIN returns rows with matching values in both tables."
},

{
    question: "Which JOIN returns all rows from the left table?",
    options: [
        "RIGHT JOIN",
        "LEFT JOIN",
        "INNER JOIN",
        "CROSS JOIN"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "LEFT JOIN returns all rows from the left table and matching rows from the right."
},

{
    question: "Which JOIN returns all rows from the right table?",
    options: [
        "RIGHT JOIN",
        "LEFT JOIN",
        "INNER JOIN",
        "SELF JOIN"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "RIGHT JOIN returns all rows from the right table."
},

{
    question: "Which JOIN returns the Cartesian product of two tables?",
    options: [
        "INNER JOIN",
        "FULL JOIN",
        "CROSS JOIN",
        "LEFT JOIN"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "CROSS JOIN returns every combination of rows from both tables."
},

{
    question: "Which SQL clause groups rows with the same values?",
    options: [
        "ORDER BY",
        "GROUP BY",
        "HAVING",
        "WHERE"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "GROUP BY groups rows that have the same values."
},

{
    question: "Which clause filters grouped records?",
    options: [
        "WHERE",
        "HAVING",
        "GROUP BY",
        "ORDER BY"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "HAVING filters groups after GROUP BY."
},

{
    question: "Which command removes all records but keeps the table structure?",
    options: [
        "DELETE",
        "DROP",
        "TRUNCATE",
        "REMOVE"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "TRUNCATE removes all rows but keeps the table."
},

{
    question: "Which SQL command permanently removes a table?",
    options: [
        "DELETE",
        "DROP",
        "TRUNCATE",
        "REMOVE"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "DROP permanently deletes the table and its structure."
},
{
    question: "Which SQL command is used to modify existing records?",
    options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "UPDATE modifies existing records in a table."
},

{
    question: "Which SQL command adds a new row to a table?",
    options: ["INSERT", "ADD", "CREATE", "UPDATE"],
    answer: 0,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "INSERT adds new records into a table."
},

{
    question: "Which SQL command removes selected rows?",
    options: ["DROP", "DELETE", "REMOVE", "TRUNCATE"],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "DELETE removes selected rows from a table."
},

{
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "Second Normal Form (2NF) removes partial dependency."
},

{
    question: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 2,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "Third Normal Form (3NF) removes transitive dependency."
},

{
    question: "What does ACID stand for?",
    options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Integrity, Durability",
        "Atomicity, Connectivity, Isolation, Dependency",
        "Access, Control, Integrity, Durability"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Hard",
    explanation: "ACID properties ensure reliable database transactions."
},

{
    question: "Which ACID property ensures all-or-nothing execution?",
    options: [
        "Consistency",
        "Isolation",
        "Atomicity",
        "Durability"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Hard",
    explanation: "Atomicity ensures that either all operations succeed or none do."
},

{
    question: "Which ACID property ensures committed data is never lost?",
    options: [
        "Isolation",
        "Durability",
        "Consistency",
        "Atomicity"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Hard",
    explanation: "Durability ensures committed data survives failures."
},

{
    question: "Which object improves query performance?",
    options: [
        "View",
        "Index",
        "Trigger",
        "Cursor"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "Indexes speed up data retrieval."
},

{
    question: "Which database object stores a virtual table?",
    options: [
        "Index",
        "View",
        "Trigger",
        "Procedure"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "A View is a virtual table based on a query."
},

{
    question: "Which object executes automatically after an event?",
    options: [
        "Procedure",
        "Function",
        "Trigger",
        "Cursor"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "Triggers execute automatically on INSERT, UPDATE, or DELETE."
},

{
    question: "Which object stores reusable SQL statements?",
    options: [
        "View",
        "Stored Procedure",
        "Trigger",
        "Index"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "Stored Procedures contain reusable SQL logic."
},

{
    question: "Which constraint prevents duplicate values?",
    options: [
        "NOT NULL",
        "UNIQUE",
        "CHECK",
        "DEFAULT"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "UNIQUE ensures all values are distinct."
},

{
    question: "Which constraint prevents NULL values?",
    options: [
        "PRIMARY KEY",
        "CHECK",
        "NOT NULL",
        "UNIQUE"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "NOT NULL ensures a column cannot contain NULL."
},

{
    question: "Which SQL operator searches for a pattern?",
    options: [
        "LIKE",
        "IN",
        "BETWEEN",
        "EXISTS"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "LIKE is used for pattern matching."
},

{
    question: "Which operator checks multiple possible values?",
    options: [
        "LIKE",
        "BETWEEN",
        "IN",
        "IS"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "IN checks if a value exists in a given list."
},

{
    question: "Which operator checks a range of values?",
    options: [
        "LIKE",
        "BETWEEN",
        "IN",
        "EXISTS"
    ],
    answer: 1,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "BETWEEN checks whether a value falls within a range."
},

{
    question: "Which SQL keyword removes duplicate rows?",
    options: [
        "DISTINCT",
        "UNIQUE",
        "GROUP BY",
        "REMOVE"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "DISTINCT removes duplicate values from the result."
},

{
    question: "Which SQL command creates a new table?",
    options: [
        "MAKE",
        "NEW TABLE",
        "CREATE TABLE",
        "ADD TABLE"
    ],
    answer: 2,
    category: "DBMS",
    difficulty: "Easy",
    explanation: "CREATE TABLE creates a new database table."
},

{
    question: "Which SQL command changes a table structure?",
    options: [
        "ALTER TABLE",
        "UPDATE TABLE",
        "MODIFY TABLE",
        "CHANGE TABLE"
    ],
    answer: 0,
    category: "DBMS",
    difficulty: "Medium",
    explanation: "ALTER TABLE modifies an existing table structure."
}];

module.exports = dbmsQuestions;