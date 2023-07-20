export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'server', 'client', or 'support' for Matrix

  const response = await fetch(
    `https://matrix.jackmerrill.com/.well-known/matrix/${slug}`
  );
  const headers = { "content-type": "application/json" };
  const body = JSON.stringify(await response.json());
  return new Response(body, { headers });
}
