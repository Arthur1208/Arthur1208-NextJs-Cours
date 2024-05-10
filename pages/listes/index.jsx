import React from "react";
import Link from "next/link";

export default function listes(props) {
  console.log(props.data);
  return (
    <div className="flex justify-center items-center h-screen">
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        {props.data.map((category, index) => (
          <div key={index} className="flex flex-col pb-3">
            <dd className="text-lg font-semibold">
              <Link href={"/listes/" + category.name}>{category.name}</Link>
            </dd>
          </div>
        ))}
      </dl>

      <div>Autre :</div>
    </div>
  );
}

export async function getStaticProps() {
  const listes = await import("/data/listes.json");
  const data = await listes.englishList;
  return {
    props: {
      data,
    },
  };
}
