function fetchAndInsertData() {
    const processBookData = (data) => {
        const bookinstance = data.bookinstance;
        const book = bookinstance.book;

        const bookDetailDiv = document.getElementById('bookinstanceDetail');
        bookDetailDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Summary:</strong> ${book.summary}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Imprint:</strong> ${bookinstance.imprint}</p>
            <p><strong>Status:</strong> ${bookinstance.status}</p>
            <p><strong>Due Back:</strong> ${bookinstance.due_back}</p>
        `;
    };

    const handleFetchError = (error) => {
        console.error('Error fetching and inserting data:', error);
    };

    const bookInstanceId = window.location.pathname.split('/').pop();
    fetch(`/catalog/api/bookinstance/${bookInstanceId}`)
        .then(response => response.json())
        .then(processBookData)
        .catch(handleFetchError);
}

fetchAndInsertData();
