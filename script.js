function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  /*if(html.classList.contains ('light')){
    html.classList.remove('light')
} else {
    html.classList.add('light')
}
ou usa a funçao toggle*/

  const img = document.querySelector("#profile img");

  if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  //peguei a tag image
  //substituit a imagem 
  //se tiver lght adiciona a imagem light
  //se tiver sem moodoo light manter a imagem normal
}
