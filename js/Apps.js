let cursor = document.querySelector(`.cursor`);
function customMouseCursor(event) {
  let left = event.clientX;
  let top = event.clientY;

  cursor.style.top = `${top}px`
  cursor.style.left = `${left}px`
}

window.addEventListener(`mousemove`, customMouseCursor );