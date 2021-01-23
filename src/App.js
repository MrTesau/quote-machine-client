import React from "react";
import { listQuotes /*deleteQuote*/ } from "./API/API";
import "./styles.scss";
import DisplayQuote from "./Components/DisplayQuote";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomIndex, setRandomIndex] = React.useState("");

  const fetchQuotes = async () => {
    const storedQuotes = await listQuotes();
    setQuotes(storedQuotes);
  };
  const generateIndex = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    newIndex === randomIndex ? generateIndex() : setRandomIndex(newIndex);
  };
  React.useEffect(() => {
    fetchQuotes();
  }, []);
  const Delete = () => {
    // Removed delete Functionality
    // Added admin password req
  };

  return (
    <div className="body-wrapper">
      <DisplayQuote
        {...quotes[randomIndex]}
        generateIndex={generateIndex}
        randomIndex={randomIndex}
        delete={Delete}
        fetchQuotes={fetchQuotes}
      />
    </div>
  );
}

/* OLD DELETE FUNCTIONALITY TO INTEGRATE */

//console.log(quotes);
//let id = quotes[randomIndex]._id;
//deleteQuote(id);
// remove from local quotes for performance
// prob less than optimal
// let removedQuotes = [...quotes];
// removedQuotes.splice(randomIndex, 1);
// setQuotes(removedQuotes);
// generateIndex();
