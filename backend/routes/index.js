const { Router } = require('express');
const router = Router();

router.post('/submit', (req, res) => {
    console.log(req.body);
    // const { name, email } = req.body;
    res.send('received');
});

module.exports = router;