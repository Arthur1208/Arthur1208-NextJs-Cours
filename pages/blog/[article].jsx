import React from "react";

export default function article(props) {
  console.log(props);
  return (
    <div>
      <h1 className="font-bold text-xl">{props.data.title}</h1>
      <p>{props.data.body}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.article;
  const article = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + slug
  );
  const data = await article.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const article = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await article.json();
  const paths = data.map((el) => ({
    params: { article: el.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
