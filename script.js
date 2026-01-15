document.addEventListener("DOMContentLoaded", () => {
  const quote = document.querySelector(".quote");
  const btn = document.querySelector("#new-quote");
  const person = document.querySelector(".person");

  const url = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        quote.textContent = data.setup;
        person.textContent = data.punchline;
      })
      .catch(err => {
        quote.textContent = "Failed to load joke 😢";
        person.textContent = "";
        console.error(err);
      });
  };

  // load first joke
  getJoke();

  // button click
  btn.addEventListener("click", getJoke);
});


    // const url = "https://api.quotable.io/random";
    // let getQuote = () => {
    //     fetch(url)
    //       .then((data) => data.json())
    //       .then((item) => {
    //         quote.innerText = item.content;
    //         person.innerText = item.author;
    //       });
    //   };
    //   document.addEventListener("load", getQuote);
    //   btn.addEventListener("click", getQuote);

    
    //   const url = '';
    //   const options = {
    //       method: 'GET',
    //       headers: {
    //           Authorization: 'Token token=yd8WzkWNEEzGtqMSgiZBrwtt',
    //           'X-RapidAPI-Key': '3195cd427bmshc651f4ebc010d38p13a75djsn4547922fbdc4',
    //           'X-RapidAPI-Host': 'juanroldan1989-moviequotes-v1.p.rapidapi.com'
    //       }
    //   };
    //   let getQuote = () => {
    //     fetch(url, options)
    //       .then((data) => data.json())
    //       .then((item) => {
    //         quote.innerText = item.content;
    //         author.innerText = item.author;
    //       });
    //   };
  
     
// let random = Math.floor(Math.random() * quotes.length);
    // quote.innerHTML = quotes[random].quotes;
    // person.innerHTML = quotes[random].person;
