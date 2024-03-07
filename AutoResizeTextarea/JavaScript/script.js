let textArea = document.querySelector("textarea");

textArea.addEventListener("keyup", e => {
    textArea.style.height = "63px"
    /* scrollHeight returns the entire height of an element in pixels, including padding
    but not border, scrollBar or margin */
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`
});