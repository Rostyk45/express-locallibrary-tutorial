document.addEventListener('DOMContentLoaded', fetchDataAndPopulate);

function fetchDataAndPopulate() {
    fetch("/catalog/api/book/" + window.location.pathname.split("/").pop())
        .then(response => response.json())
        .then(data => {
            const bookDetail = document.getElementById('bookDetail');
            const bookTitle = createAndSetTextContent('h2', data.book.title);
            const authorLink = createAndSetAttribute('a', {
                className: 'author-link',
                href: `http://localhost:3000/catalog/author/${data.book.author._id}`,
                textContent: `${data.book.author.first_name} ${data.book.author.family_name}`
            });
            const summary = createAndSetTextContent('p', `Summary: ${data.book.summary}`);
            const isbn = createAndSetTextContent('p', `ISBN: ${data.book.isbn}`);
            appendChildren(bookDetail, [bookTitle, authorLink, summary, isbn]);
            const genre = createAndSetTextContent('p', `Genre: ${data.book.genre.map(genre => genre.name).join(', ')}`);
            bookDetail.appendChild(genre);
            const instancesHeader = createAndSetTextContent('h3', 'Book Instances');
            bookDetail.appendChild(instancesHeader);
            if (data.book_instances.length === 0) {
                const noInstancesMessage = createAndSetTextContent('p', 'N/A');
                bookDetail.appendChild(noInstancesMessage);
            } else {
                data.book_instances.forEach(instance => {
                    const instanceDiv = createAndSetClass('div', ['border-with-background', 'instance']);
                    const imprint = createAndSetTextContent('p', `Imprint: ${instance.imprint}`);
                    const status = createAndSetTextContent('p', `Status: ${instance.status}`);
                    const dueBack = createAndSetTextContent('p', `Due Back: ${instance.due_back ? new Date(instance.due_back).toLocaleString() : 'N/A'}`);
                    appendChildren(instanceDiv, [imprint, status, dueBack]);
                    bookDetail.appendChild(instanceDiv);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function createAndSetTextContent(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
}

function createAndSetAttribute(elementType, attributes) {
    const element = document.createElement(elementType);
    for (const key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element[key] = attributes[key];
        }
    }
    return element;
}

function createAndSetClass(elementType, classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}

function appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
}
