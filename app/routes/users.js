module.exports = app => {

    app.get('/users', (req, res) => {

        res.statusCode = 200; // connection succeed 
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                id: 1,
                name: 'Batata',
                email: 'batata@feira.com'
            }]
        });

    });

    app.post('/users', (req, res) => {
        res.json(req.body);
    });
};