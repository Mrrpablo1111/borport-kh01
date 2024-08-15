import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { PrismaClient, UserRole } from '@prisma/client';
import { getSession } from '../_utils/kinde-session'; // Adjust the path as necessary

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;
  const session = await getSession(req);
  const user = await session.getUser();

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { role: true },
  });

  if (!dbUser || dbUser.role !== UserRole.ADMIN) {
    return {
      redirect: {
        destination: '/user/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {
      isAdmin: true,
    },
  };
};
