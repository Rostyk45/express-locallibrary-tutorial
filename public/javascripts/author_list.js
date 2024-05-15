document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded() {
  getData();
}

function getData() {
  fetch('http://localhost:3000/catalog/api/author_list')
    .then(response => response.json())
    .then(displayAuthors)
    .catch(error => console.error('Error fetching data:', error));
}

function displayAuthors(data) {
  const authors = data.author_list;
  const authorList = document.getElementById('author-list');
  authorList.innerHTML = '';

  authors.forEach(author => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/catalog/author/${author._id}`;
    link.textContent = `${author.first_name} ${author.family_name}`;
    link.classList.add('author-link');
    li.appendChild(link);
    authorList.appendChild(li);
  });
}
