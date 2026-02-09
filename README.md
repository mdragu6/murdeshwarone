# 🕉️ MurdeshwarOne - Local Service & Tourist Guide Platform

A professional web application for managing local services and tourism in Murdeshwar. Users can browse services, add their own (pending approval), while admins can manage all services directly.

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Features

### User Features
- **Browse Services**: View all approved services by category
- **Category Filter**: Filter services by 13+ categories including:
  - Workers (Electrician, Plumber, Carpenter, Painter)
  - Accommodation (Hotels, Room Rentals)
  - Food & Dining (Restaurants)
  - Tourism (Tour Guides)
  - Transport & Auto Repair
  - Medical Services
  - Grocery Stores
  - And more...
- **Add Services**: Submit new services (pending admin approval)
- **Responsive Design**: Works seamlessly on desktop and mobile

### Admin Features
- **Dashboard**: View statistics and manage all services
- **Instant Service Addition**: Admin-added services are approved immediately
- **Approval System**: Review and approve/reject user-submitted services
- **Service Management**: Delete any approved service
- **Secure Login**: Protected admin panel

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**
```bash
git clone <your-repo-url>
cd murdeshwarone
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

4. **Access the application**
- Open your browser and go to: `http://localhost:3000`
- Admin panel: `http://localhost:3000/admin/login`

### Default Admin Credentials
```
Username: admin
Password: admin123
```

⚠️ **Important**: Change these credentials in production!

## 📁 Project Structure

```
murdeshwarone/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── public/               
│   └── css/
│       └── style.css      # Main stylesheet
├── views/                 # EJS templates
│   ├── index.ejs          # Home page
│   ├── category.ejs       # Category view
│   ├── add-service.ejs    # User service submission
│   ├── success.ejs        # Success page
│   ├── admin-login.ejs    # Admin login
│   └── admin-dashboard.ejs # Admin panel
└── README.md              # This file
```

## 🎨 Customization

### Changing the Site Name
Edit the logo in all EJS files:
```html
<a href="/" class="logo">🕉️ MurdeshwarOne</a>
```

### Adding New Categories
In `server.js`, add to the `categories` array:
```javascript
const categories = [
    'Electrician',
    'Your New Category',
    // ... rest
];
```

### Modifying Colors
Edit CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #f59e0b;
}
```

### Changing Admin Credentials
In `server.js`:
```javascript
const ADMIN_USERNAME = 'your_username';
const ADMIN_PASSWORD = 'your_secure_password';
```

## 🗄️ Data Storage

Currently uses **in-memory storage** (data is lost on server restart).

### For Production - Database Integration

Replace the in-memory arrays with a database. Example with MongoDB:

```javascript
// Install MongoDB
npm install mongoose

// Replace arrays with MongoDB models
const ServiceSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    contact: String,
    status: String,
    addedBy: String
});
```

Recommended databases:
- **MongoDB** (NoSQL, easy to use)
- **PostgreSQL** (SQL, robust)
- **SQLite** (Simple, file-based)

## 🔐 Security Considerations

Before deploying to production:

1. **Change admin credentials**
2. **Use environment variables** for sensitive data:
```javascript
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
```

3. **Hash passwords** (use bcrypt):
```bash
npm install bcrypt
```

4. **Add HTTPS** with SSL certificate
5. **Implement rate limiting**
6. **Add CSRF protection**
7. **Use a real database** with proper authentication

## 📦 Deployment

### Deploy to Heroku

1. Create a Heroku account
2. Install Heroku CLI
3. Run:
```bash
heroku login
heroku create murdeshwarone
git push heroku main
```

### Deploy to Render/Railway

1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Deploy!

### Deploy to VPS (DigitalOcean/AWS)

1. SSH into your server
2. Install Node.js
3. Clone the repository
4. Run with PM2:
```bash
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Session Management**: express-session
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Unicode Emoji

## 📝 API Endpoints

### Public Routes
- `GET /` - Home page
- `GET /services/:category` - View services by category
- `GET /add-service` - Service submission form
- `POST /add-service` - Submit new service

### Admin Routes
- `GET /admin/login` - Admin login page
- `POST /admin/login` - Admin authentication
- `GET /admin/logout` - Logout
- `GET /admin/dashboard` - Admin panel
- `POST /admin/add-service` - Add service (approved immediately)
- `POST /admin/approve/:id` - Approve pending service
- `POST /admin/reject/:id` - Reject pending service
- `POST /admin/delete/:id` - Delete approved service

## 🐛 Troubleshooting

### Port Already in Use
Change the port in `server.js`:
```javascript
const PORT = process.env.PORT || 3001;
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Session Not Working
Check if `express-session` is installed:
```bash
npm install express-session
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - free to use for personal and commercial projects.

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@murdeshwarone.com (update with your email)

## 🎯 Roadmap

- [ ] Add user registration/login
- [ ] Implement search functionality
- [ ] Add service ratings and reviews
- [ ] Image upload for services
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Payment integration for premium listings

## 🙏 Acknowledgments

Built for the beautiful town of Murdeshwar - home to the world's second-tallest Shiva statue!

---

**Made with ❤️ for Murdeshwar Community**
