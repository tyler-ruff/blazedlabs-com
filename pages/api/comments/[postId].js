import prisma from './../../../lib/prisma.js';
import { authOptions } from './../auth/[...nextauth]';
import { getServerSession } from "next-auth/next";

export const runtime = "edge"

export async function GET(req, res) {
    const { postId } = req.query;
    try{
        const data = await prisma.comment.findMany({
            where: {
                postId: postId
            }
        });
        return res.status(200).json({ data });
    } catch (error){

    }
}

export async function POST(req, res){
    const session = await getServerSession(req, res, authOptions);
    const body = req.body;
    
    // Auth Validation
    if(!session){
        return res.status(401).json({ data: 'You must be logged in to post' });
    }
    // Form validation
    if (!body.comment) {
        return res.status(400).json({ msg: 'Comment cannot be empty' });
    }

    try{
        const data = {
            postId: postId,
            authorId: session.user.id,
            body: body.comment
        };
        await prisma.comment.create({data});
        return res.redirect(303, `${process.env.SITE_URL}blog/${postId}`);
    } catch(exception){
        return res.status(500).json({ msg: "Unknown database error" })
    }
}