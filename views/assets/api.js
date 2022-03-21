const axios = require('axios').default

async function foto(perfil) {
    //var git = await axios.get('https://api.github.com/users/' + perfil)
    try {
        var git = await axios.get('https://api.github.com/users/' + perfil)
    } catch (error) {
        console.log (error)
        return {
            erro: true,
            erroapi : error.response.status == 403 ? true: false
        }
    }
    // console.log(git)
    return git
}
//foto()

module.exports = {
    foto
}