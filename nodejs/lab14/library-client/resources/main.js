window.onload = function() {
    getBooks();

    document.getElementById('nav-home').onclick = function(event) {
        event.preventDefault();
        getBooks();
    }

    // add/update book
    document.getElementById('book-btn').onclick = function(event) {
        event.preventDefault();
        if (!document.getElementById('book-btn').dataset.id) {
            addBook();
        } else {
            editBook();
        }
    }
}

async function getBooks() {
    let books = await fetch('http://localhost:3000/books/').then(response => response.json());
    books.forEach(book => renderBook(book));
}

function renderBook(book) {
    const div = document.createElement('div');
    div.classList = 'col-lg-4';
    div.id = book.id;
    div.innerHTML = `<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
        dy=".3em">140x140</text>
    </svg>`;

    const h2 = document.createElement('h2');
    h2.textContent = book.title;

    const isbn = document.createElement('p');
    isbn.textContent = book.isbn + ` (${book.publishedDate})`;

    const author = document.createElement('p');
    author.textContent = book.author;

    div.appendChild(h2);
    div.appendChild(isbn);
    div.appendChild(author);

    const actions = document.createElement('p');
    const updateBtn = document.createElement('a');
    updateBtn.classList = 'btn btn-secondary';
    updateBtn.textContent = 'UPDATE';
    updateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('book-heading').textContent = 'Edit Book';
        document.getElementById('title').value = book.title;
        document.getElementById('isbn').value = book.isbn;
        document.getElementById('published-date').value = book.publishedDate;
        document.getElementById('author').value = book.author;
        document.getElementById('book-btn').dataset.id = book.id;

    });

    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'btn btn-secondary';
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', function(event) {
        event.preventDefault();

        fetch('http://localhost:3000/books/' + book.id, {
            method: 'DELETE',
        }).then(response => {
            alert('Delete Successfully!');
            div.remove();
        });
    });

    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);

    div.appendChild(actions);

    document.getElementById('books').appendChild(div);
}


async function addBook() {
    let result = await fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            isbn: document.getElementById('isbn').value,
            publishedDate: document.getElementById('published-date').value,
            author: document.getElementById('author').value
        })
    }).then(res => res.json());
    document.getElementById('book-form').reset();
    renderBook(result);
}

function editBook() {
    const bookId = document.getElementById('book-btn').dataset.id;
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('published-date').value;
    const author = document.getElementById('author').value;

    fetch('http://localhost:3000/books/' + bookId, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                isbn: isbn,
                publishedDate: publishedDate,
                author: author
            })
        }).then(response => response.json())
        .then(jsonObj => {
            const bookDiv = document.getElementById(bookId);
            bookDiv.querySelector('h2').textContent = title;
            const paragraphArr = bookDiv.querySelectorAll('p');
            paragraphArr[0].textContent = isbn;
            paragraphArr[1].textContent = author;

            document.getElementById('book-heading').textContent = 'Add a new Book';
            document.getElementById('book-btn').dataset.id = '';
            document.getElementById('book-form').reset();
        });
}