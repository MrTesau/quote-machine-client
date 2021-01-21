import React from "react";
import DisplayQuote from "./DisplayQuote.js";
import { listQuotes, deleteQuote } from "./API";
import "./styles.css";
// server Request to get saved quotes

export default function App() {
  const [quotes, setQuotes] = React.useState([]); // [{quote: "", author: ""}]
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
    console.log(quotes);
    //let id = quotes[randomIndex]._id;
    //deleteQuote(id);
    // remove from local quotes for performance
    // prob less than optimal
    // let removedQuotes = [...quotes];
    // removedQuotes.splice(randomIndex, 1);
    // setQuotes(removedQuotes);
    // generateIndex();
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
