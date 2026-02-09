const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'murdeshwar-secret-key-2024',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// In-memory data storage (replace with database in production)
let services = [
    {
        id: 1,
        name: 'Shiva Electricals',
        category: 'Electrician',
        description: 'Expert electrical services for homes and businesses',
        contact: '+91 9876543210',
        status: 'approved',
        addedBy: 'admin'
    },
    {
        id: 2,
        name: 'Beach View Hotel',
        category: 'Hotel',
        description: 'Comfortable rooms with ocean views',
        contact: '+91 9876543211',
        status: 'approved',
        addedBy: 'admin'
    },
    {
        id: 3,
        name: 'Quick Plumbing Services',
        category: 'Plumber',
        description: '24/7 plumbing solutions',
        contact: '+91 9876543212',
        status: 'approved',
        addedBy: 'admin'
    }
];

let nextId = 4;

// Admin credentials (in production, use hashed passwords and database)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Categories
const categories = [
    'Electrician',
    'Plumber',
    'Carpenter',
    'Painter',
    'Hotel',
    'Room Rental',
    'Restaurant',
    'Tour Guide',
    'Transport',
    'Auto Repair',
    'Medical Services',
    'Grocery Store',
    'Other'
];

// Middleware to check if user is admin
function isAdmin(req, res, next) {
    if (req.session.isAdmin) {
        next();
    } else {
        res.redirect('/admin/login');
    }
}

// Routes

// Home page
app.get('/', (req, res) => {
    const approvedServices = services.filter(s => s.status === 'approved');
    res.render('index', { services: approvedServices, categories });
});

// View services by category
app.get('/services/:category', (req, res) => {
    const category = req.params.category;
    const approvedServices = services.filter(s => s.status === 'approved' && s.category === category);
    res.render('category', { services: approvedServices, category, categories });
});

// Add service page (user)
app.get('/add-service', (req, res) => {
    res.render('add-service', { categories });
});

// Submit service (user)
app.post('/add-service', (req, res) => {
    const { name, category, description, contact } = req.body;
    
    const newService = {
        id: nextId++,
        name,
        category,
        description,
        contact,
        status: 'pending',
        addedBy: 'user'
    };
    
    services.push(newService);
    res.render('success', { message: 'Service submitted successfully! It will be visible after admin approval.' });
});

// Admin login page
app.get('/admin/login', (req, res) => {
    if (req.session.isAdmin) {
        return res.redirect('/admin/dashboard');
    }
    res.render('admin-login', { error: null });
});

// Admin login submit
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('admin-login', { error: 'Invalid credentials' });
    }
});

// Admin logout
app.get('/admin/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Admin dashboard
app.get('/admin/dashboard', isAdmin, (req, res) => {
    const pendingServices = services.filter(s => s.status === 'pending');
    const approvedServices = services.filter(s => s.status === 'approved');
    res.render('admin-dashboard', { 
        pendingServices, 
        approvedServices,
        categories 
    });
});

// Admin add service
app.post('/admin/add-service', isAdmin, (req, res) => {
    const { name, category, description, contact } = req.body;
    
    const newService = {
        id: nextId++,
        name,
        category,
        description,
        contact,
        status: 'approved',
        addedBy: 'admin'
    };
    
    services.push(newService);
    res.redirect('/admin/dashboard');
});

// Admin approve service
app.post('/admin/approve/:id', isAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    const service = services.find(s => s.id === id);
    
    if (service) {
        service.status = 'approved';
    }
    
    res.redirect('/admin/dashboard');
});

// Admin reject service
app.post('/admin/reject/:id', isAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    services = services.filter(s => s.id !== id);
    res.redirect('/admin/dashboard');
});

// Admin delete service
app.post('/admin/delete/:id', isAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    services = services.filter(s => s.id !== id);
    res.redirect('/admin/dashboard');
});

// Start server
app.listen(PORT, () => {
    console.log(`MurdeshwarOne server running on http://localhost:${PORT}`);
    console.log(`Admin login: username: admin, password: admin123`);
});
