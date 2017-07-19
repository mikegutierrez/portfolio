const path = require('path');
const favicon = require('serve-favicon')
const express = require('express');

const app = express();

app.use(favicon(path.join(__dirname, '/build/assets/images', 'favicon.ico')));

app.use('/build', express.static(path.join(__dirname, '/build/')));

app.get('/resume', (req, res) => {
	res.download(path.join(__dirname, 'src/assets/documents/Gutierrez_Mike_Resume_2017.pdf'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
