const router = require('express').Router();
const {getAll, getById, create, remove, update} = require(__dirname + '/users.controller');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id', remove);
router.put('/:id', update);

module.exports = router;