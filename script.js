function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const image = document.querySelector("#header img")
  if (html.classList.contains("dark")) {
    image.setAttribute(
      "src",
      "http://www.fillster.com/images/pictures/358n.jpg"
    )
  } else {
    image.setAttribute(
      "src",
      "http://www.fillster.com/images/pictures/139g.jpg"
    )
  }
}
