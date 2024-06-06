const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const housesRouter = require('./routes/housesRouter');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/houses', housesRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
