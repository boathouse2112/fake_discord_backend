import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
/*

describe('Postgres integration test', () => {
  beforeAll(async () => {
    await prisma.$connect();

    // Seed the database with users and posts
    await prisma.user.create({
      data: {
        email: 'alice@prisma.io',
        name: 'Alice',
        posts: {
          create: {
            title: 'Watch the talks from Prisma Day 2019',
            content: 'https://www.prisma.io/blog/z11sg6ipb3i1/',
            published: true,
          },
        },
      },
    });

    await prisma.user.create({
      data: {
        email: 'bob@prisma.io',
        name: 'Bob',
        posts: {
          create: [
            {
              title: 'Subscribe to GraphQL Weekly for community news',
              content: 'https://graphqlweekly.com/',
              published: true,
            },
            {
              title: 'Follow Prisma on Twitter',
              content: 'https://twitter.com/prisma/',
              published: false,
            },
          ],
        },
      },
    });
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should match the after count', async () => {
    const totalUser = await prisma.user.findMany();
    const totalPost = await prisma.post.findMany();
    expect(totalUser.length).toBe(2);
    expect(totalPost.length).toBe(3);
  });
});

*/
