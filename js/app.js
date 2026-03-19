/* Library Management System - Main JavaScript */

/**
 * Sample books data
 * In a production app, this would come from a backend API
 */
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        available: true
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        available: true
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        available: false
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        available: true
    },
    {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        available: true
    },
    {
        id: 6,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        year: 1847,
        available: true
    }
];

/**
 * Render books to the grid
 */
function renderBooks(booksToRender = books) {
    const bookGrid = document.getElementById("bookGrid");
    
    if (!bookGrid) return;
    
    bookGrid.innerHTML = "";
    
    booksToRender.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        
        // Generate placeholder image
        const imageUrl = `https://picsum.photos/220/280?random=${book.id}`;
        
        // Status badge
        const statusClass = book.available ? "available" : "unavailable";
        const statusText = book.available ? "Available" : "Checked Out";
        
        bookCard.innerHTML = `
            <img src="${imageUrl}" alt="${book.title}" loading="lazy">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="year">Published: ${book.year}</p>
            <span class="status ${statusClass}">${statusText}</span>
            <a href="#" onclick="viewBookDetails(${book.id}); return false;">View Details</a>
        `;
        
        bookGrid.appendChild(bookCard);
    });
}

/**
 * View book details
 */
function viewBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        alert(`${book.title}\nBy ${book.author}\nStatus: ${book.available ? 'Available' : 'Checked Out'}`);
    }
}

/**
 * Filter books by search term
 */
function searchBooks(searchTerm) {
    if (!searchTerm) {
        renderBooks(books);
        return;
    }
    
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    renderBooks(filtered);
}

/**
 * Toggle book availability
 */
function toggleAvailability(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.available = !book.available;
        renderBooks();
    }
}

/**
 * Initialize the library app
 */
function initLibrary() {
    // Render initial books
    renderBooks();
    
    // Setup search functionality if search box exists
    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
        searchBox.addEventListener("keyup", (e) => {
            searchBooks(e.target.value);
        });
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initLibrary);
