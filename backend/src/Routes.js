const { Router } = require('express');

const routes = Router();

routes.post('/devs', (req, res) => {
    console.log(req.body);
    return res.json({message: "Hello World "});
});

module.exports = routes;