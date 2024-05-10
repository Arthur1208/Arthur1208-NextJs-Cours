import { Inter } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

export default function Home(props: []) {
  const [state, setState] = useState();
  console.log(props);
  const newWord = () => {
    fetch("api/vocapi")
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  let randomWord;
  console.log(state);

  useEffect(() => {
    newWord();
  }, []);

  if (state) {
    const array = state.englishList[0].data;
    randomWord = array[Math.floor(Math.random() * array.length)].en;
    console.log(randomWord);
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Le blog</title>
      </Head>
      <h1>Le blog exercide</h1>
      <div>
        <h2>Le blog avec des articles</h2>
        <Link className=" text-blue-900 underline text-xl" href={"/blog"}>
          ici
        </Link>
      </div>
      <div>
        <h2>La liste des utilisateurs</h2>
        <Link className=" text-blue-900 underline text-xl" href={"/users"}>
          ici
        </Link>
      </div>
      <div>
        <h2>Mot hasard</h2>
        <button onClick={newWord}>random</button>
        <h2>{randomWord}</h2>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await import("/data/vocabulary.json");
  const array = data.vocabulary;
  return {
    props: {
      array,
    },
  };
}
