const express = require('express');
const { createBudget, getBudgets } = require('../controllers/budgetController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createBudget);
router.get('/', auth, getBudgets);

module.exports = router;
