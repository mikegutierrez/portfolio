const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const router = express.Router();

app.use(favicon(path.join(__dirname, '/build/assets/images', 'favicon.ico')));

app.use('/build', express.static(path.join(__dirname, '/build/')));

app.get('/resume', (req, res) => {
	res.download(path.join(__dirname, 'src/assets/documents/Gutierrez_Mike_Resume_2017.pdf'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

// Contact form
const handleContact = function handleContact(req, res) {
	let mailOptions = {
		from: 'contactmikegutierrez@gmail.com',
		to: 'mikeg610@gmail.com',
		subject: 'Email Example',
		// text: 'string'
		html: '<b>Hello world ✔</b>'
	};

	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'contactmikegutierrez@gmail.com',
			pass: 'M1keistheb0ss'
		}
	});

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.json({ error: 'error' });
		} else {
			console.log('Message sent: ' + info.response);
			res.json({ success: info.response });
		};
	});
};

app.use('/contactmike', router);
router.post('/', handleContact);

app.listen(3000, () => {
	console.log('listening on port 3000');
});
