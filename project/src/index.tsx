import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

//Rendering
ReactDOM.render(
    //Creating an instance of the imported Hello class
    <Hello compiler="TypeScript" framework="React" />,
    //Getting the element to insert the button in
    document.getElementById("button")
);