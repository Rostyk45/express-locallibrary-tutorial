document.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("/catalog/api/author/" + window.location.pathname.split("/").pop())
        .then(response => response.json())
        .then(data => {
            const authorDetailDiv = document.getElementById('authorDetail');
            const authorName = createHTMLElement('h2', `${data.author.first_name} ${data.author.family_name}`);
            const authorId = createHTMLElement('p', `Author ID: ${data.author._id}`);
            const authorBirth = createHTMLElement('p', data.author.date_of_birth ? `Date of birth: ${data.author.date_of_birth}` : 'Date of birth: N/A', 'author-birth');
            const authorDeath = createHTMLElement('p', data.author.date_of_death ? `Date of death: ${data.author.date_of_death}` : 'Date of death: N/A', 'author-death');

            const booksList = document.createElement('ul');
            data.author_books.forEach(book => {
                const bookItem = createHTMLElement('li', `${book.title}: ${book.summary}`);
                booksList.appendChild(bookItem);
            });

            const authorDelete = createHTMLElement('button', 'Delete', 'delete-button');
            const id = data.author._id;
            const books = data.author_books.length;
            authorDelete.onclick = () => {
                deleteAuthor(id, books)
                    .then(() => {
                        window.location.href = 'http://localhost:3000/catalog/authors';
                    })
                    .catch(error => {
                        console.error('Error executing the deleteAuthor function:', error);
                    });
            };

            const authorUpdate = createHTMLElement('button', 'Update', 'update-button');
            authorUpdate.onclick = () => updateAuthor(id);

            authorDetailDiv.innerHTML = '';

            appendChildren(authorDetailDiv, [authorName, authorId, authorBirth, authorDeath, booksList, authorDelete, authorUpdate]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

async function deleteAuthor(id, books) {
    if (books > 0) {
        alert('Author has books. Delete them first');
        return;
    } else {
        try {
            const response = await fetch(`/catalog/api/author/${id}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ authorid: id })
            });
            return response.json();
        } catch (error) {
            console.error('Error deleting author:', error);
        }
    }
}

async function updateAuthor(id) {
    window.location.href = 'http://localhost:3000/catalog/author/' + id + '/update';
}

function createHTMLElement(tag, textContent, className) {
    const element = document.createElement(tag);
    if (textContent) element.textContent = textContent;
    if (className) element.classList.add(className);
    return element;
}

function appendChildren(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}
