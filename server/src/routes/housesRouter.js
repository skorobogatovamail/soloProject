const { Router } = require('express');
const { House, Host } = require('../../db/models');

const router = Router();

router.get('/', async (req, res) => {
  res.json(await House.findAll({ include: { model: Host } }));
});

module.exports = router;
