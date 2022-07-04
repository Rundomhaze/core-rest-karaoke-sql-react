document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCard')) {
    event.preventDefault();
    const url = event.target.href
    const response = await fetch(url, {
      method: "DELETE",
    })
    const data = await response.json();
    if (data.status === 'ok') {
      event.target.closest('.entry').remove();
    }
  } 
  // else if (event.target.classList.contains('details')) {
  //   event.preventDefault();
  //   const url = event.target.href;
  //   console.log(url);
  // }
})
