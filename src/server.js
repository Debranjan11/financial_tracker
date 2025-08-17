require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { sequelize } = require('./models');

const authRoutes = require('./routes/auth');
const budgetRoutes = require('./routes/budgets');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/budgets', budgetRoutes);

app.get('/', (req, res) => {
  res.send('Financial Tracker API is running 🚀');
});

sequelize.sync({ alter: false }).then(() => {
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
});
const db = require('./models');

db.sequelize.sync().then(() => {
  console.log('Database synced');
});
