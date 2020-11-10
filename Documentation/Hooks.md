## **Hooks**
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

useState is one of the hooks available to us and the goal of this function is to give access to the 'state system' in functional components.
```javascript
    const [activeIndex, setActiveIndex] = useState(null);
    // activeIndex = Piece of state.
    // setActiveIndex = Function to change this piece of state.
    // setState(null), here null is the initial value for this piece of state.
```

We use arrow functions to invoke the function component events, else the event is gonna fire up when the component is rendered.
```javascript
    import React from "react";
    import "./styles.css";

    export default function App() {
        function greetUser(name) {
            console.log(`Hi there, ${name}`);
        }

        return (
            <div>
            <button onClick={() => greetUser("John")}>Click me</button>
            </div>
        );
    }
    // onClick = () => handleEvent();
```

|  #  | ClassComponent | FunctionalComponent |
| --- | -------------- | ------------------- | 
| Initialization| state= {activeIndex:0} | useState(0)|
| Reference | this.state.activeIndex | activeIndex|
| Updates | this.setState({activeIndex: 10})| setActiveIndex(10)|

Whenever we call the setter function (setActiveIndex(10)) the entire component is rerendered. And when this happens the default value of the our useState function is going to fall. Because it is just an initialization value. So when we call the setter function second time, the state value is going to be the value when it is called first.

With functional components if we want to initialize multiple state we need to use useState() multiple time and to update the state we have to update them on different lines.

The 'useEffect' hook
- Allows funtion component to use something like lifecycle methods.
- We configure the hook to run some code automatically in one of the three senarios.
    - When the component is rerendered for the first time only
    - When the component is rerendered for **the first time and whenever it rerenders**.
    - When the component is rerendered for **the first time and *whenever it rerenders and some piece of data has changed*.**

useEffect has function as first argument and second argument is gonna be empty array, or array with searchTerm/ one or more elements in it or no value.
```javascript
    // Run at initial render
    useEffect(() => {
        console.log('only at initial render');
    }, [])

    // Run at initial render and
    // Run after every rerender
    useEffect(() => {
        console.log('Run at initial render and')
        console.log('Run after every rerender')
    })

    // Run at initial render
    // Run after every render if data has changed since last rerender
    useEffect(() => {
        console.log('Run at initial render')
        console.log('Run after every render if data has changed since last rerender')
    }, [data/searchTerm])
```

We cannot mark the function in useEffect async. We have 3 ways to get around

```javascript
    // 1st way
    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming')
        }
        search();
    }, [searchTerm])
    
    // 2nd way
    // defines and immediately invokes it
    useEffect(() => {
        (async () => {
            await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming')
        })();
    }, [searchTerm])

    // 3rd way
    // using promises
    useEffect(() => {
        axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming')
        .then((response, error) => {
            console.log(response.data);
        });
    }, [searchTerm])
```

useEffect cleanup function:
- We are allowed to return one function inside useEffect hook and this function is generally used for clean up. This function is usually invoked when component is rerendered.