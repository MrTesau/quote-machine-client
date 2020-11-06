import React from "react";
import DisplayQuote from "./DisplayQuote.js";
import QuoteForm from "./AddQuote.js";
import { listQuotes, deleteQuote } from "./API";
import "./styles.css";
// server Request to get saved quotes

export default function App() {
  const [quotes, setQuotes] = React.useState([]); // [{quote: "", author: ""}]
  const [randomIndex, setRandomIndex] = React.useState("");

  // Retrieve Quotes from DB
  const fetchQuotes = async () => {
    const storedQuotes = await listQuotes();
    setQuotes(storedQuotes); // new list of quotes from db
    // setRandomIndex(Math.floor(Math.random() * quotes.length)); // optional -> randomly display new quote
    //console.log(quotes);
  };

  // my attempt at recursion
  // makes sure a unique quote is always generated on click
  const generateIndex = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    newIndex === randomIndex ? generateIndex() : setRandomIndex(newIndex);
  };
  // retrieve on initial page loading
  // Trigger API call with useEffect
  React.useEffect(() => {
    fetchQuotes();
  }, []);

  const Delete = () => {
    // Logic to find current quote and delete from db
    //find Quote
    let id = quotes[randomIndex]._id;
    deleteQuote(id);
    // remove from local quotes for performance
    // prob less than optimal
    let removedQuotes = [...quotes];
    removedQuotes.splice(randomIndex, 1);
    setQuotes(removedQuotes);
    generateIndex();
  };

  return (
    <>
      <div>
        <DisplayQuote
          {...quotes[randomIndex]}
          generateIndex={generateIndex}
          randomIndex={randomIndex}
          delete={Delete}
        />
      </div>
      <QuoteForm
        onClose={() => {
          fetchQuotes();
        }}
      />
    </>
  );
}
