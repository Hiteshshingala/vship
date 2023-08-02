const users = require('../datas/user');
const jwtService = require('../services/jwtService');

  
module.exports = {
    login: function(req, res){
        // console.log(abc);
        const { username, password} = req.body;
        if(!username) {
            res.status(402).send('Invalid Username');
            return;
        }
        if(!password) {
            res.status(402).send('Invalid Password');
            return;
        }

        const foundUser = users.findIndex(el => el.username === username);

        if(foundUser === -1) {
            res.status(402).send('Invalid Username');
            return;
        } 

        if(users[foundUser].password !== password) {
            res.status(402).send('Invalid Password');
            return;
        } 

        let token = jwtService.signToken({ username : username, role: users[foundUser].role });
        res.status(200).send({token});
    }
}