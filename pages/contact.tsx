import React from "react";

export default function contact(props) {
  console.log(props);
  return (
    <div>
      <h1>Contact :</h1>
    </div>
  );
}

export async function getStaticProps() {
  const quote = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=happiness"
  );
  const data = await quote.json();
  return {
    props: {
      data,
    },
  };
}
