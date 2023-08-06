import prisma from '../../../lib/prisma.js';

export default async function handler(req, res) {
    const { id } = req.query;
    if(req.method === 'GET'){
        try{
            const data = await prisma.user.findUnique({
                where: {
                    id: id
                }
            });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500);
        }
    } else {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
}