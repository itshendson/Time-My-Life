Some Memorable Issues
// When you click the stop button, the timer stil lran for one second
// Cause: You had a setTimeout function. So even when you press pause, it would still run due to a setTimeout function already having been called.

// How to link HTML elements with an object?
// Solution: Just use a constructor to create the elements! WoW!

// My first iteration had a time drift
// Don't trust setTimeout and setInterval because Javascript is single-threaded!

// Primitives are equal to each other as long as the values are equal but Objects are only equal if they are referring to the same thing (ie. same memory address) regardless of whether or not the values are the same

// You have to type cast HTML Element to HTMLInputElement or else you can't use Element.value because typescript is strict

// In Javascript, all primitives are immutable and objects are mutable. Unlike other languages, strings and numbers are primitives making them immutable. When you "manipulate" these primitives, Javascript automatically creates a wrapper for the primitive
// so that it becomes an object temporarily. Once an object, Javascript manipulates the object then frees up the memory. You're not actually modifying the primitive, you're actually creating a new instance. 