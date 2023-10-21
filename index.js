const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const specs = require('./src/config/swagger.config')
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
require('dotenv').config();
const movieRouter = require('./src/routes/movie.routes')
const authRouter = require('./src/routes/auth.routes')
const userRouter = require('./src/routes/user.routes')
const path = require('path');

app.use(morgan('tiny'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(movieRouter) 
app.use(authRouter)
app.use(userRouter)
app.use('/upload', express.static(path.join(__dirname, '/src/assets/uploads')))
app.use(express.json);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is runing in port ${PORT}`)
})
