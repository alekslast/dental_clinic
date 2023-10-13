import                   'dotenv/config';
import jsonWebToken from 'jsonwebtoken';


const phrase = process.env.NOTTHATSECRETPHRASE;
const secret = process.env.SECRET;


function createToken(identifier) {
    return jsonWebToken.sign({identifier}, secret, { expiresIn: '5h' })
}

// login admin
const adminLogin = (req, res) => {

    const savedName     = process.env.LOGIN
    const savedPassword = process.env.PASSWORD

    const adminName     = req.body.adminName
    const adminPassword = req.body.adminPassword

    const token = createToken(phrase)

    if (savedName === adminName && savedPassword === adminPassword) {

        res.status(200).json({ adminName, token })
    }
    else {
        res.status(403).json({isAuthenticated: false})
    }
    
}

export { adminLogin };