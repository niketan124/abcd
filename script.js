var b = document.querySelector(".b")

function update() {
    b.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    console.log(b.style.width)
    requestAnimationFrame(update)
}
update();