// Create Web Server
const app = express();

// Set up the port
const port = process.env.PORT || 3000;

// Set up the static directory
app.use(express.static(__dirname + '/public'));

// Set up the view engine
app.set('view engine', 'hbs');

// Register Partials
hbs.registerPartials(__dirname + '/views/partials');

// Register Helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// Register Helpers
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// Register Helpers
hbs.registerHelper('getAuthor', () => {
    return 'Saurabh Kumar';
});

// Set up the routes
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to handle request'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
