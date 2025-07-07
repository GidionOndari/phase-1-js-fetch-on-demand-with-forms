const init = () => {
  // 1. Get the form element
  const inputForm = document.querySelector("form");

  // 2. Listen for submit
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

  // 3. Get the input value
    const input = document.querySelector("input#searchByID");

  // 4. Fetch movie with matching ID
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
 // 5. Get the DOM nodes to update
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

 // 6. Update with API data
        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => console.error("Error:", error));
  });
};
document.addEventListener('DOMContentLoaded', init);

