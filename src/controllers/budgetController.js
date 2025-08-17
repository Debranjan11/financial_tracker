const { Budget } = require('../models');

exports.createBudget = async (req, res) => {
  try {
    const budget = await Budget.create({
      name: req.body.name,
      currency: req.body.currency || 'INR',
      limit: req.body.limit,
      userId: req.userId
    });
    res.status(201).json(budget);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.findAll({ where: { userId: req.userId } });
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
