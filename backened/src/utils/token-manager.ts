import jwt from 'jsonwebtoken'


export const createToken = (id: string, email: string, expiresIn:string) => {
    const playload= { id, email };
    const token =  jwt.sign(playload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};