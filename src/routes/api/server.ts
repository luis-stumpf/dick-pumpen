import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async () => {

  // log all fields

  const random = Math.random() * 10;

  return json({
    // get a specific field's value
    name: random
  });
}) satisfies RequestHandler;