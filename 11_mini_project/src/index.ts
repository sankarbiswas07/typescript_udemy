function printDouble(msg: string) {
  console.log(msg)
  console.log(msg)
}


document.getElementById("btn")?.addEventListener("click", () => {
  printDouble("Hello World!!! ")
})