import Link from "next/link";

export default function index(props) {
  console.log(props);
  return (
    <div>
      <h1>Le blog</h1>

      <div className="flex flex-wrap gap-5">
        {props.data.map((el, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <h3 className="font-bold text-xl">{el.title}</h3>
              <div>{el.body}</div>
              <Link
                className=" text-blue-900 underline text-xl"
                href={"/blog/" + el.id}
              >
                Lire ici
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const article = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await article.json();
  return {
    props: {
      data,
    },
  };
}
