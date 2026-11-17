import customFilter from "./utils.js";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    const filteredPosts = customFilter(data, (post) => post.title.length < 25);

    console.log(filteredPosts);
  } catch (err) {
    console.log(err);
  } finally {
    console.log(".....Done");
  }
}

getData();
