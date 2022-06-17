const res = require('express/lib/response');
const router = require('express').Router();

const { Routers, Posts } = require('../db/models');

// Ручка на все посты
router.get('/', async (req, res) => {
  const posts = await Routers.findAll();
  res.render('posts', { posts });
});

// Детальная информация
router.get('/more/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Routers.findAll({
    where: { id },
  });
  res.render('detailpost', { post });
});

// Ручка на добавление поста
router.route('/add')
  .get((req, res) => {
    res.render('addPost');
  })
  .post(async (req, res) => {
    const {
      title, location, start, finish, lengthRoad, user_id,
    } = req.body;
    const newRout = await Routers.create(
      {
        title, location, start, finish, lengthRoad, user_id,
      },
    );
    res.redirect('/');
  });

module.exports = router;
