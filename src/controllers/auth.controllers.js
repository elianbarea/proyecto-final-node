import * as authService from '../services/auth.service.js';

const login = async (req, res) => {
    const { username, password } = req.body;

    const token = await authService.login(username, password);

    if (!token) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.json({
        token
    });
}

export { login };