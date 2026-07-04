import jwt from 'jsonwebtoken';


const login = async (username, password) => {
    if (username !== 'admin' || password !== 'admin') {
        return null; // Retornar null si el usuario no es válido
    };
    const token = jwt.sign(
    {
        username
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1h"
    }
);

return token;
}

export { login }