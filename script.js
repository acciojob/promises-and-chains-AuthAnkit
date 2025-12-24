//your JS code here. If required.
const form = document.getElementById("formageandname");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  // Validation
  if (age === "" || name === "") {
  alert("Please enter valid details");
  return;
}


  // Promise creation
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // Promise handling
  votePromise
    .then((username) => {
      alert(`Welcome, ${username}. You can vote.`);
    })
    .catch((username) => {
      alert(`Oh sorry ${username}. You aren't old enough.`);
    });
});
