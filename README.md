# 📚 Library1

A clean, responsive web-based library catalog that lets users browse a collection of books with cover images, titles, and author information.

## 🌟 Features

- Responsive book grid layout (adapts to any screen size)
- Dynamic book card generation with placeholder cover images
- Clean, modern UI with card-based design
- Navigation between pages

## 📁 Project Structure

```
Library1/
├── index.html      # Main library page — lists all available books
├── library.html    # Extended library page — full catalog view
└── README.md       # Project documentation (this file)
```

## 🚀 Getting Started

No build tools or dependencies are required. Simply open the HTML files in any modern web browser:

```bash
# Option 1: Open directly in your browser
open index.html

# Option 2: Serve locally with Python
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5      | Page structure and markup |
| CSS3       | Styling, grid layout, and responsive design |
| JavaScript | Dynamic book card rendering |

## 📖 Usage

1. Open `index.html` in a browser to see the main library book listing.
2. Each book card displays a cover image, title, and author.
3. Click **View Details** on any book to navigate to the book detail page.
4. Use the **Back to Login** link to return to the login screen.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
