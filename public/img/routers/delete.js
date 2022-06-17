const router = require('express').Router();
const { Routers } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Routers.findAll({
    where: { id },
  });
  res.render('detailpost', { post });
});

router.delete('/:id', async (req, res) => {
  try {
    const num = Number(req.params.id);
    const routers = await Routers.destroy({ where: { id: num } });
    res.json({ routers });
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
