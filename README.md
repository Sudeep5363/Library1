# Library Management System

A responsive web application for managing and browsing library books. Built with HTML, CSS, and vanilla JavaScript.

![GitHub License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)

## Overview

Library Management System is a simple yet elegant web application that allows users to browse library books, search for specific titles, and view book details. The system is built with modern web technologies and follows best practices for responsive design.

## Features

- Browse library collection with book cards
- Search functionality to find books by title or author
- Responsive grid layout that adapts to all screen sizes
- Book availability status tracking
- Clean, modern user interface
- Fast loading with optimized assets
- Mobile-friendly design

## Project Structure

```
library/
├── index.html           # Main homepage
├── books.html           # Books listing page
├── css/
│   └── styles.css       # Main stylesheet
├── js/
│   └── app.js           # Application logic
├── assets/              # Images and static assets
├── README.md            # Project documentation
├── LICENSE              # MIT License
└── .gitignore           # Git ignore configuration
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for static file serving (open index.html directly)
- Optional: Local server for development

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/library-management.git
cd library-management
```

2. Open in browser
```bash
# Option 1: Direct file opening
open index.html

# Option 2: Using Python simple server
python -m http.server 8000
# Visit http://localhost:8000
```

## Usage

### Browsing Books

1. Open `index.html` to view the homepage
2. Books are displayed in a responsive grid
3. Hover over book cards for interactive effects

### Searching Books

1. Use the search box to filter books
2. Search works by title or author name
3. Results update in real-time

### Viewing Book Details

1. Click "View Details" on any book card
2. A modal will display book information
3. Shows title, author, publication year, and availability status

## Features Explained

### Responsive Design
- Mobile: 1 column layout
- Tablet: 2-3 column layout
- Desktop: 4+ column layout
- CSS Grid with auto-fill for flexibility

### Modern Styling
- Gradient background for visual appeal
- Smooth transitions and hover effects
- Clean typography with proper contrast
- Professional color scheme

### JavaScript Functionality
- Dynamic book rendering from data arrays
- Real-time search filtering
- Book availability toggle (for admin)
- Event handling for user interactions

## Browser Support

- Chrome (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)

## Development

### Adding More Books

Edit `js/app.js` and add entries to the `books` array:

```javascript
const books = [
    {
        id: 7,
        title: "Your Book Title",
        author: "Author Name",
        year: 2024,
        available: true
    }
];
```

### Customizing Styles

Modify `css/styles.css` to change:
- Colors and theme
- Layout and spacing
- Typography
- Responsive breakpoints

### API Integration

To connect to a backend API:

1. Replace the static `books` array with an API call:
```javascript
async function loadBooks() {
    const response = await fetch('/api/books');
    return await response.json();
}
```

2. Update `renderBooks()` to use fetched data

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by Sudeep | 2026

## Support

For issues or questions, please open an issue on GitHub.

## Future Enhancements

- Backend API integration
- User authentication system
- Book borrowing/returning functionality
- User wish lists
- Book ratings and reviews
- Admin dashboard for book management
- Database integration
- PDF export functionality

---

**Last Updated**: March 2026
