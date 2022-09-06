import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// DELIVERABLES 
    // The sushi list is properly received from the server and displayed in our app.
    // Only 4 sushi are rendered at a time.
    // Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.
    // Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
    // We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component.
    // No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.

// NOTE: Make sure you know where the intergers are 
    // boolean always try to set at false so it won't look like you ate it all 

ReactDOM.render(<App />, document.getElementById("root"));
