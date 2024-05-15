function fetchGenreDataAndPopulateForm() {
  const path = window.location.pathname;
  const regex = /\/genre\/([^/]+)\/update/;
  const match = path.match(regex);
  const id = match[1];
  fetch('/catalog/api/genre/' + id + '/update')
    .then(response => response.json())
    .then(data => {
      const name = data.genre.name;
      const titleInput = document.getElementById('titleInput');
      if (titleInput) {
        titleInput.value = name;
      } else {
        console.error('Element with id "titleInput" not found');
      }

      const updateGenreBtn = document.getElementById('updateGenreBtn');
      if (updateGenreBtn) {
        updateGenreBtn.addEventListener('click', handleUpdateGenreClick); // Added event listener
      } else {
        console.error('Button with id "updateGenreBtn" not found');
      }

      function handleUpdateGenreClick(event) { // Moved event handler to separate function
        event.preventDefault();
        const newName = titleInput.value;
        const id = data.genre._id;
        updateGenre(id, newName);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

function updateGenre(id, newName) {
  fetch('/catalog/api/genre/' + id + '/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newName }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      window.location.href = '/catalog/genre/' + id;
    })
    .catch(error => console.error('Error:', error));
}

fetchGenreDataAndPopulateForm();
