import UserInput from "./Components/UserInput";
import ClickInput from "./Components/ClickInput";
import PassValue from "./Components/PassValue";
import MultipleEvents from "./Components/MultipleEvents";
import BlurInput from "./Components/BlurInput";

function App() {
    return (
        <div>

            <h1>React Event Handling</h1>

            {/* Assignment 1 */}
            <UserInput />

            <hr />

            {/* Assignment 2 */}
            <ClickInput />

            <hr />

            {/* Assignment 3 */}
            <PassValue />

            <hr />

            {/* Assignment 4 */}
            <MultipleEvents />

            <hr />

            {/* Assignment 5 */}
            <BlurInput />

        </div>
    );
}

export default App;