import React, { useRef, useEffect, useState } from "react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };
    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="addEn">Ajouter mot anglais</label>
        <input ref={enWord} type="text" name="" id="addEn" />
        <label htmlFor="addFr">Ajouter mot fr</label>
        <input ref={frWord} type="text" name="" id="addFr" />
        <button>Ajouter</button>
      </form>
    </div>
  );
}
