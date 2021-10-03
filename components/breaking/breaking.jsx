import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../components/breaking/breaking.module.css";

const initialQuote = {
  text: "quote",
  auhtor: "autor xD",
};

export function Breaking() {
  const [quote, setQuote] = useState(initialQuote);
  const updateQuote = async () => {
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();

    setQuote({
      text: newQuote.quote,
      auhtor: newQuote.quote.auhtor,
    });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      ></img>
      <button onClick={() => updateQuote()}>Otra frase mas</button>
      <p>{quote.text}</p>
      <p>{quote.auhtor}</p>
    </>
  );
}
