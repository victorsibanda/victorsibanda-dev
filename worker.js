export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Credly badge proxy — avoids browser CORS restrictions
    if (url.pathname === '/api/badges') {
      try {
        const resp = await fetch(
          'https://www.credly.com/users/victor-sibanda.a63512d6/badges.json',
          { headers: { Accept: 'application/json' } }
        );
        const json = await resp.json();
        return new Response(JSON.stringify(json), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch {
        return new Response('{"data":[]}', {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
