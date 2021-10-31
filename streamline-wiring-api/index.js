require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// NOTE: Express middleware to operate on incoming req to parse the body, making available before sending it off to the req handler
app.use(express.json());

app.use(cors());

// TODO - why did I have this line for? cant remember
//app.unsubscribe(express.urlencoded({ extended: false }));

require('./routes/emailRoutes')(app);

const PORT = process.env.PORT || 3001;

// using this just to console log the port number, second line is the minimun I need
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// app.listen(PORT);
