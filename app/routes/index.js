module.exports = app => {

    app.get('/', (req, res) => {

        res.statusCode = 200; // connection succeed 
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Olá<h1>");

    });
};