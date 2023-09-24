const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

function userLoggedMiddleware (req, res, next){
	
	let userCookie = req.cookies.perfil;
	let userCoInUsers = users.find(user => userCookie == user.email);

	if(userCoInUsers){
		req.session.userLogged = userCoInUsers;
	}


	if (req.session.userLogged){
		return res.redirect('/users/profile')
	}
	next()


	
};
module.exports = userLoggedMiddleware;