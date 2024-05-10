import React from "react";

export default function liste(props) {
  return (
    <div>
      <h1>hello liste</h1>
      <table>
        <tbody>
          {props.listeEnCours.map((el: {}) => (
            <tr key={el.fr}>
              <td>{el.en}</td>
              <td>{el.fr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.liste;
  console.log("cecic est dzzadazda  " + slug);
  const data = await import("/data/listes.json");
  const listeEnCours = data.englishList.find((list) => list.name === slug);

  return {
    props: {
      listeEnCours: listeEnCours.data,
    },
  };
}

export async function getStaticPaths() {
  const data = await import("/data/listes.json");

  const paths = data.englishList.map((item) => ({
    params: { liste: item.name },
  }));
  

  return {
    paths,
    fallback: false,
  };
}
