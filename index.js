async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    } else {
      const data = await res.json();
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(".....Done");
  }
}
getData();

