// Create web server
// 1. Import express
const express = require('express');
const router = express.Router();
// 2. Import controller
const commentsController = require('../controllers/commentsController.js');
// 3. Import middleware
const validationMiddleware = require('../middleware/validationMiddleware.js');
// 4. Create routes
router.get('/', commentsController.index);
router.get('/create', commentsController.create);
router.post('/create', validationMiddleware, commentsController.store);
router.get('/:id', commentsController.show);
router.get('/:id/edit', commentsController.edit);
router.put('/:id', validationMiddleware, commentsController.update);
router.delete('/:id', commentsController.destroy);

// 5. Export router
module.exports = router;