// удаление карточек
document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    event.preventDefault()
    const url = event.target.href
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const data = await response.json();
    if (data.deleted === true) {
      event.target.closest('.entry').remove();
    }
  } 
});

// Изменение (отрисовка формы и сохранение изменений)
document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('editBtn')) {
    event.preventDefault()
    const url = event.target.href
    const response = await fetch(url, {method:"GET"})
    const data = await response.text();
    event.target.closest('.entry').insertAdjacentHTML('afterend', data)
    event.target.closest('.entry').remove(); 
  } 
  if (event.target.classList.contains('buttonEdit')) {
    event.preventDefault()
    const url = event.target.closest('.formEdit').action
    const singer = event.target.closest('.formEdit').singer.value
    const songTitle = event.target.closest('.formEdit').songTitle.value
    const response = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        singer,
        songTitle
      }),
    })
    const data = await response.json();
    console.log(data);
    if (data.edit === true) {
      event.target.closest('.formDiv').remove();  
      window.location.href = '/all-the-entries'
    }
  }
});


// Детали одной карты (отрисовка)
document.querySelector('.entries').addEventListener('click', async (event) => {
  if (event.target.classList.contains('detailsBtn')) {
    event.preventDefault()
    const url = event.target.href
    const response = await fetch(url, {method:"GET"})
    const data = await response.text();
    event.target.closest('.entry').insertAdjacentHTML('afterend', data);
    event.target.closest('.entry').remove(); 
  }
});

// Добавление карточки (отрисовка формы и сохранение)
document.querySelector('.container').addEventListener('click', async(event)=> {
  if (event.target.classList.contains('signup')) {
    event.preventDefault()
    const response = await fetch("/new-entry-form", {method:"GET"})
    const data = await response.text();
    event.target.closest('.header').insertAdjacentHTML('afterend', data);
    event.target.closest('.header').remove();
  }
  if (event.target.classList.contains('addBtn')) {
    event.preventDefault();
    const url = event.target.closest('.addForm').action;
    const singer = event.target.closest('.addForm').singer.value;
    const songTitle = event.target.closest('.addForm').songTitle.value;
    const response = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        singer,
        songTitle
      })
    })
    const data = await response.json();
    console.log(data);
    if (data.add === true) {
      event.target.closest('.formAdd').remove();  
      window.location.href = '/all-the-entries'
    }
  }
})



