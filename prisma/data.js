const { Prisma } = require('@prisma/client');

const comments = [
    {
        postId: "we-are-updating-many-of-our-sites.",
        authorId: "clkwo2btr00006w1kcopiii52",
        body: "Hello World!"
    },
    {
        postId: "we-are-updating-many-of-our-sites.",
        authorId: "clkwo2btr00006w1kcopiii52",
        body: "Test Comment"
    },
    {
        postId: "test",
        authorId: "clkwo2btr00006w1kcopiii52",
        body: "Hello World, another post..."
    }
];

module.exports = {
    comments,
};