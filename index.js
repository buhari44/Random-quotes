const smallLetter = "a";
const capLetter = smallLetter.toUpperCase();
console.log(capLetter);
smallLetter === capLetter
  ? console.log()
  : console.log("lolz");
// function loads() {
//   const loading = document.querySelector(".loader");
//   loading.classList.add("load");
// }
// loads();
const loader = document.querySelector(".loader");
const randomQuote = [
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand  – Martin Fowler",
  "First, solve the problem. Then, write the code.  – John Johnson",
  "In order to be irreplaceable, one must always be different",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery",
  "“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov",
  "Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "Fix the cause, not the symptom.” – Steve Maguire",
  "Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck",
  "When to use iterative development? You should use iterative development only on projects that you want to succeed. – Martin Fowler",
  "Simplicity is the soul of efficiency.” – Austin Freeman",
  "Before software can be reusable it first has to be usable. – Ralph Johnson",
  "Make it work, make it right, make it fast.” – Kent Beck",
  "Talk is cheap. Show me the code.",
  " One man’s crappy software is another man’s full time job.",
  "Most good programmers do programming not because they expect to get paid or get adulation by the public, but it is fun to program.",
  "There are two ways to write error-free programs; only the third one works.",
  "Perfection [in design] is achieved, not when there is nothing more to add, but when there is noting left to take away.",
  " Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "Measuring programming progress by the lines of code is like measuring aircraft building progress by weight.",
  "Good design adds value faster than it adds cost.",
  "Without requirements or design, programming is the art of adding bugs to an empty text file.",
  "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
  " Programs must be written for people to read, and only incidentally for machines to execute.",
];
console.log(randomQuote.length);

function displayQuote() {
  const index = Math.floor(Math.random() * randomQuote.length);
  loader.innerHTML = `<div class="text">${randomQuote[index]}
  </div>`;
  console.log(randomQuote[index]);
}
