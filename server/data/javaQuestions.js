const javaQuestions = [
    {
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "inherits", "super"],
    answer: 0,
    category: "Java",
    difficulty: "Easy",
    explanation: "The extends keyword is used to inherit a class."
},

{
    question: "Which method is the entry point of a Java program?",
    options: ["main()", "start()", "run()", "execute()"],
    answer: 0,
    category: "Java",
    difficulty: "Easy",
    explanation: "Execution of every Java application starts from the main() method."
},

{
    question: "Which company originally developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "Java was originally developed by Sun Microsystems."
},

{
    question: "Which keyword is used to create an object in Java?",
    options: ["object", "create", "new", "class"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "The new keyword is used to create objects."
},

{
    question: "Which of the following is not a Java primitive data type?",
    options: ["int", "String", "char", "boolean"],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "String is a class, not a primitive data type."
},

{
    question: "Which access modifier makes a member accessible only within the same class?",
    options: ["public", "protected", "private", "default"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "Private members are accessible only within their own class."
},

{
    question: "Which keyword is used to define a constant in Java?",
    options: ["static", "const", "final", "constant"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "The final keyword is used to declare constants."
},

{
    question: "Which collection does not allow duplicate elements?",
    options: ["ArrayList", "LinkedList", "Set", "Vector"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "Set stores only unique elements."
},

{
    question: "Which exception occurs when dividing a number by zero?",
    options: [
        "NullPointerException",
        "ArithmeticException",
        "IOException",
        "ClassNotFoundException"
    ],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "ArithmeticException occurs during illegal arithmetic operations like division by zero."
},

{
    question: "Which package contains the ArrayList class?",
    options: [
        "java.lang",
        "java.util",
        "java.io",
        "java.sql"
    ],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "ArrayList belongs to the java.util package."
},
{
    question: "Which keyword is used to achieve polymorphism through method overriding?",
    options: ["extends", "override", "@Override", "implements"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "The @Override annotation indicates that a method overrides a superclass method."
},

{
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "The do-while loop executes the body before checking the condition."
},

{
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "throws", "throw"],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "The try block contains code that may throw an exception."
},

{
    question: "Which interface is implemented by ArrayList?",
    options: ["Set", "Queue", "List", "Map"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "ArrayList implements the List interface."
},

{
    question: "Which keyword is used to inherit an interface?",
    options: ["implements", "extends", "inherits", "instanceof"],
    answer: 0,
    category: "Java",
    difficulty: "Easy",
    explanation: "A class implements an interface using the implements keyword."
},

{
    question: "Which class is the parent of all Java classes?",
    options: ["Class", "Main", "Object", "Parent"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "Every Java class implicitly extends the Object class."
},

{
    question: "Which package is imported automatically in every Java program?",
    options: ["java.io", "java.util", "java.lang", "java.sql"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "The java.lang package is automatically imported."
},

{
    question: "Which keyword prevents a method from being overridden?",
    options: ["static", "private", "final", "abstract"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "A final method cannot be overridden by subclasses."
},

{
    question: "What is the default value of an int instance variable?",
    options: ["0", "1", "null", "-1"],
    answer: 0,
    category: "Java",
    difficulty: "Easy",
    explanation: "The default value of an int instance variable is 0."
},

{
    question: "Which operator is used to compare object references?",
    options: ["==", "equals()", "!=", "compareTo()"],
    answer: 0,
    category: "Java",
    difficulty: "Medium",
    explanation: "The == operator compares object references, while equals() compares object content if overridden."
},
{
    question: "Which class is immutable in Java?",
    options: ["String", "StringBuilder", "StringBuffer", "ArrayList"],
    answer: 0,
    category: "Java",
    difficulty: "Medium",
    explanation: "String objects cannot be modified after creation, making them immutable."
},

{
    question: "Which class allows mutable strings and is thread-safe?",
    options: ["String", "StringBuilder", "StringBuffer", "Character"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "StringBuffer is mutable and synchronized, making it thread-safe."
},

{
    question: "Which class allows mutable strings but is not thread-safe?",
    options: ["String", "StringBuilder", "StringBuffer", "Buffer"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "StringBuilder is faster than StringBuffer because it is not synchronized."
},

{
    question: "Which collection stores elements in key-value pairs?",
    options: ["ArrayList", "HashSet", "HashMap", "LinkedList"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "HashMap stores data as key-value pairs."
},

{
    question: "Which collection maintains insertion order?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "LinkedHashSet maintains insertion order."
},

{
    question: "Which collection automatically sorts its elements?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "ArrayList"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "TreeSet stores elements in sorted order."
},

{
    question: "Which keyword is used to create a subclass constructor call?",
    options: ["this", "parent", "super", "extends"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "The super keyword is used to call the parent class constructor."
},

{
    question: "Which exception is thrown when accessing an invalid array index?",
    options: [
        "IndexOutOfBoundsException",
        "ArrayIndexOutOfBoundsException",
        "NullPointerException",
        "IOException"
    ],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "ArrayIndexOutOfBoundsException occurs when an invalid index is accessed."
},

{
    question: "Which Java feature allows one interface to have multiple implementations?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "Polymorphism allows the same interface to have multiple implementations."
},

{
    question: "Which keyword is used to define an abstract class?",
    options: ["virtual", "abstract", "extends", "implements"],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "The abstract keyword is used to declare an abstract class."
},
{
    question: "Which interface is implemented by HashMap?",
    options: ["List", "Set", "Map", "Queue"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "HashMap implements the Map interface."
},

{
    question: "Which keyword is used to stop inheritance?",
    options: ["static", "private", "final", "const"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "A class declared as final cannot be extended."
},

{
    question: "Which method is called before an object is garbage collected?",
    options: ["dispose()", "destroy()", "finalize()", "delete()"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "The finalize() method was historically called before garbage collection. (It is deprecated in modern Java but is still a common interview topic.)"
},

{
    question: "Which keyword is used to create a thread in Java?",
    options: ["thread", "new", "extends", "implements"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "Threads are created using the new keyword with Thread or Runnable."
},

{
    question: "Which method starts a thread?",
    options: ["run()", "execute()", "start()", "begin()"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "Calling start() creates a new thread and internally invokes run()."
},

{
    question: "Which package contains the Thread class?",
    options: ["java.io", "java.lang", "java.util", "java.sql"],
    answer: 1,
    category: "Java",
    difficulty: "Easy",
    explanation: "The Thread class belongs to the java.lang package."
},

{
    question: "Which collection allows duplicate elements?",
    options: ["HashSet", "TreeSet", "ArrayList", "LinkedHashSet"],
    answer: 2,
    category: "Java",
    difficulty: "Easy",
    explanation: "ArrayList allows duplicate elements and maintains insertion order."
},

{
    question: "Which keyword is used to explicitly throw an exception?",
    options: ["throws", "throw", "catch", "try"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "The throw keyword is used to explicitly throw an exception."
},

{
    question: "Which keyword declares that a method may throw an exception?",
    options: ["throw", "throws", "try", "catch"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "The throws keyword declares possible exceptions in a method signature."
},

{
    question: "Which JVM component is responsible for garbage collection?",
    options: ["JDK", "JRE", "Garbage Collector", "Compiler"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "The Garbage Collector automatically frees memory occupied by unused objects."
},
{
    question: "Which method is used to compare the contents of two String objects?",
    options: ["==", "equals()", "compare()", "compareTo()"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "equals() compares the contents of two String objects, while == compares references."
},

{
    question: "What does the == operator compare for objects?",
    options: ["Object contents", "Memory references", "Hash codes", "Class names"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "The == operator compares whether two object references point to the same object."
},

{
    question: "Which interface is used to sort objects using custom logic?",
    options: ["Serializable", "Comparable", "Comparator", "Cloneable"],
    answer: 2,
    category: "Java",
    difficulty: "Hard",
    explanation: "Comparator allows custom sorting logic outside the class."
},

{
    question: "Which interface provides natural ordering of objects?",
    options: ["Comparator", "Comparable", "Collection", "Iterable"],
    answer: 1,
    category: "Java",
    difficulty: "Hard",
    explanation: "Comparable defines the natural ordering using the compareTo() method."
},

{
    question: "Which Java 8 feature allows writing anonymous functions?",
    options: ["Generics", "Lambda Expressions", "Streams", "Annotations"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "Lambda expressions were introduced in Java 8 to write concise functional code."
},

{
    question: "Which API introduced in Java 8 is mainly used for processing collections?",
    options: ["Reflection API", "Stream API", "JDBC API", "Servlet API"],
    answer: 1,
    category: "Java",
    difficulty: "Medium",
    explanation: "The Stream API provides functional-style operations on collections."
},

{
    question: "Which memory area stores local variables and method calls?",
    options: ["Heap", "Method Area", "Stack", "Cache"],
    answer: 2,
    category: "Java",
    difficulty: "Hard",
    explanation: "The Stack stores method calls and local variables."
},

{
    question: "Which memory area stores objects in Java?",
    options: ["Stack", "Heap", "Register", "Method Area"],
    answer: 1,
    category: "Java",
    difficulty: "Hard",
    explanation: "Objects created using the new keyword are stored in Heap memory."
},

{
    question: "Which keyword is used to synchronize access to a block of code?",
    options: ["volatile", "synchronized", "thread", "lock"],
    answer: 1,
    category: "Java",
    difficulty: "Hard",
    explanation: "The synchronized keyword prevents multiple threads from executing the same block simultaneously."
},

{
    question: "Which principle of OOP allows the same method name with different implementations?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    answer: 2,
    category: "Java",
    difficulty: "Medium",
    explanation: "Polymorphism allows the same interface or method name to have different implementations."
}];

module.exports = javaQuestions;