  
const User = require('../models/User')

module.exports = async function (req, res, next) {
    try {
        // Get user information by Id
        const user = await User.findById(
            req.header('userid')
        )

        if (user.role === 0) {
            return res.status(403).json({
                error: 'Admin resources access denied'
            })
        }

        next()
    } catch (error) {
        console.log('no user found')
        res.status(500).send('Server Error')
    }
}