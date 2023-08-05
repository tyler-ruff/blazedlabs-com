const { PrismaClient } = require('@prisma/client');
const { comments } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.comment.deleteMany();
        console.log('Deleted records in comments table');

        await prisma.comment.createMany({
            data: comments,
        });
        console.log('Added test comments');
    } catch(error){
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
        console.log('Seed job completed with zero errors.');
    }
}

load();