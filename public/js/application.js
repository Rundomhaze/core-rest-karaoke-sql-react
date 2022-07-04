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
  };
});

document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('details')) {
    event.preventDefault();
    const url = event.target.href;
    const response = await fetch(url, {
      method: "GET",
    })
    const data = await response.text();    
      event.target.closest('.entry').insertAdjacentHTML('afterend', data);
      event.target.closest('.entry').remove();    
  };
});

document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('edit')) {
    event.preventDefault();
    const url = event.target.href;
    const response = await fetch(url, {
      method: "GET",
    })
    const data = await response.text();    
      event.target.closest('.entry').insertAdjacentHTML('afterend', data);
      event.target.closest('.entry').remove();    
  };
});
