const User = require('../models').User;

const getAllUsers = async (req, res) => {
    try {
        console.log(User)
        const users = await User.findAll();
        res.status(200).json({
            status: "200",
            message: "berhasil",
            data: users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal mengambil pengguna' });
    }
};

module.exports = {
    getAllUsers,
}