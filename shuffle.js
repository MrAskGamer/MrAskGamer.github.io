function shuffle(array) {let currentIndex = array.length,  randomIndex;while (currentIndex != 0) {randomIndex = Math.floor(Math.random() * currentIndex);currentIndex--;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];}return array;}

document.querySelectorAll(".correct").forEach(e => e.addEventListener('click', () => {e.style.background = '#90ee90'}))
document.querySelectorAll(".wrong").forEach(e => e.addEventListener('click', () => {e.style.background = '#FFCCCB'}))

function reset() {
        document.querySelectorAll(".correct, .wrong").forEach(e => e.style.background = '')
        let temp = shuffle(Array.prototype.slice.call(document.body.children)).filter(e => e.tagName == 'DIV')
        temp.forEach(e => {
            let temp1 = shuffle(Array.prototype.slice.call(e.children[1].children))
            e.children[1].innerHTML = ''
            temp1.forEach(j => e.children[1].appendChild(j))
        })
        document.body.innerHTML = ''
        temp.forEach(e => {document.body.appendChild(e)})
}
document.addEventListener('keypress', (e) => {
    if (e.key == 'r') {
        reset()
    }
})
reset()
