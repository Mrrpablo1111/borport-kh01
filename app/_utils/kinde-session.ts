// utils/kinde-session.ts
import { IncomingMessage } from 'http';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function getSession(req: IncomingMessage) {
  // Convert IncomingMessage to NextApiRequest format
  const nextApiRequest = req as any;
  const session = getKindeServerSession(nextApiRequest);
  return session;
}
