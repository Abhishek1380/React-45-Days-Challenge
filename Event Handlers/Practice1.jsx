// 1. Basic Click Event
// Create a React component with a button that shows an alert saying "Button clicked!" when the button is clicked.


export default function App() {

    const handleClick = () => {
        alert('Button Clicked !');
    }
    return (
        <>
            <button onClick={() => alert('Button Clicked')}>Hii</button>
            <button onClick={handleClick}>Hii there</button>
        </>
    )
}