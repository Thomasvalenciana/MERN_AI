import jwt from 'jsonwebtoken';
export const createToken = (id, email, expiresIn) => {
    const playload = { id, email };
    const token = jwt.sign(playload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map