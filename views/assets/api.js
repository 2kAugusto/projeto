const axios = require('axios').default
async function foto(perfil) {
    var git = await axios.get('https://api.github.com/users/' + perfil)
    // console.log(git)
    return git
}
//foto()

module.exports = {
    foto
}