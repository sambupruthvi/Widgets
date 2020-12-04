Event bubbling:
- Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object.

Dropdown toggling when clicked on anywhere else on the dom
- The dropdown needs to detect a click event on any element besides one it created.
- The dropdown has a hard time setting up event handlers on elements that it does not create.
- Event bubbling is a thing.

Solution:
- The dropdown can setup a manual event listener (without React) on the body element.
- A click on any element will bubble up to the body.

all the event listeners called by addEventListener gets called first and then react events are called.

