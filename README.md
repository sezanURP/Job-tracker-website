Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: In Javascript DOM Manipulation, getElementById, getElementsByClassName, querySelector and querySelectorAll are element selection methods. They are different in elements selector type, return type.
In below the difference of these:
 
 #getElementById(): It's selects one element by its unique id attribute. 
   A single HTML Element. If no element is found, it returns null. 
. Such a example  
 document.getElementById("banner-section")

 #getElementsByClassName(): It's selects all elements that have a specific class name.This is an array-like object that is live. "Live" means if the DOM changes later (e.g., another element gets added with that class via script), this collection automatically updates to include it.

 #querySelector(): This is an incredibly versatile method that uses standard CSS selectors. It searches the DOM using a CSS selector like- #id, .class, div > p. The first element that matches the selector. Even if there are multiple matches, it stops searching after the first one.

 #querySelectorAll(): This is the sibling to querySelector, also using CSS selectors, but designed to grab everything that matches. It searches the DOM using a CSS selector and gathers all matches.
 It'd return a NodeList.




 Question 2:  How do you create and insert a new element into the DOM? 

 Answer: To create a new element into the DOM may we use-

 -document.createElement("tagName"): let newDiv = document.createElement("div")

 -add text: newDiv.textContent = "Hello World";
 -add HTML: newDiv.innerHTML = "<strong>Hello</strong>";
 -add class name: newDiv.className = "box";
 -add id: newDiv.id = "mainBox";
 -To set a attribute: 
 newDiv.setAttribute("data-role", "container");


To insert a element by using DOM-

-to select a parent like " let parent = document.getElementById("container");"

-insert by append(): parent.append(newDiv);

-insert by appendhild(): 
   parent.appendChild(newDiv);




Question 3:  What is Event Bubbling? And how does  it work?

Answer:  Event Bubbling means When an event happens on a child element, it first runs on that element, then “bubbles up” to its parent, then to the grandparent, and continues upward until it reaches the root (document). So the event move Child > parent > grandParent > document.

Event Bubbling happens in phase 3. Such 
-Capturing Phase (top → down)

-Target Phase (on clicked element)

-Bubbling Phase (bottom → up)



Question 4:  What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where instead of adding event listeners to multiple child elements, add a single event listener to their parent and handle events using event bubbling.
Useful of it:
-If add a new button later, It still works. 
No need to add event listener again.
-it's works for dynamic elements



Question 5: What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() means stops the browser’s default behavior of an element. It does not stop event bubbling.

On the other hand,stopPropagation() means  Stops the event from bubbling (or capturing) to parent elements. It does not stop default browser behavior.

