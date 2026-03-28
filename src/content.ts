import "./styles.css"

const return_link = document.referrer === "" ? "https://www.youtube.com/" : document.referrer

console.log("hello world")
const regex = /youtube.com\/shorts/ 
console.log(regex.test(window.location.href))
console.log(window.location.href)
if (regex.test(window.location.href)) {
  window.location.replace(return_link)
}