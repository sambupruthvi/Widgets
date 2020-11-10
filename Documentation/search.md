#### **Challenges**

How do we search

Option 1:
- user types in input
- onChange event handler is called
- We take value from input and make request to API
- ......
- Get response
- Update 'result' piece of state
- Component rerenders, we show list of results

By using option 1
- we search instantly when onChange event is triggered
- Tightly couples 'onChange' event with search

Option 2:
- User types in input
- onChange event hander is called
- Update 'searchTerm' piece of state
- Component rerenders
- *We add code to detect that 'searchTerm' has changed!*
- Make request to API
- ....
- Get response
- Update 'result' piece of state
- Component rerenders, we show list of results

By using option 2:
- Search when 'searchTerm' piece of state changes
- Can easily trigger a search when other parameters change
- Easier to extract code out into a more reusable function!