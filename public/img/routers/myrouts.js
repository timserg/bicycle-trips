const router = require('express').Router();
const { Routers } = require('../db/models'); // сделали видимой базу данных
router.get('/:num', async (req, res) => { // /:num - параметризованный запрос на этот адрес
  const { num } = req.params //
  const routers = await Routers.findAll({
    where: { user_id: num },
  });
  res.render('myrouts', { routers } );
});
module.exports = router;
