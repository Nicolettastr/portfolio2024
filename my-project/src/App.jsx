import { useState } from "react";
import "./App.css";
import "./Mode.css";

import Navbar from "./components/Navbar";
import Transition from "./components/Transition";

function App() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode((prevState) => !prevState);
    };

    return (
        <section>
            <Transition toggleDarkMode={toggleDarkMode} />
        </section>
    );
}

export default App;
