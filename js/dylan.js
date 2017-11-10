// Hero Noun Changing
document.onreadystatechange = () => {
  const noun = document.querySelector("#noun");
  let nouns = ["Developer", "Designer", "Bartender", "Tea Enthusiast","Dog Owner"];
  noun.innerHTML = nouns[0];
  let num = 0;

  window.setInterval(() => {
    num >= nouns.length - 1 ? num = 0 : num++;
    noun.innerHTML = nouns[num];
  }, 1000)
}