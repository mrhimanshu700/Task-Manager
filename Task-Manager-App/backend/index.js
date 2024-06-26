const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db')
const cors = require('cors');
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from the server');
});
app.use(cors())
app.use(bodyParser.json());
app.use('/tasks', TaskRouter)
app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
})