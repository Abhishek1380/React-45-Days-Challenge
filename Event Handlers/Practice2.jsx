// 2. Passing Arguments
// Build a component where clicking a button shows an alert with a custom message passed as an argument to the event handler.

export default function App() {

    const handleClick = (message) => {
        alert(message);
    }
    return (
        <button onClick={() => handleClick("This is a user alert")}>Click Me</button>
    )
}