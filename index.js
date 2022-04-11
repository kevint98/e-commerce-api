const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT} `);
});
