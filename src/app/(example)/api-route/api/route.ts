export async function GET() {
  return new Response(JSON.stringify({ message: "OK" }), { status: 200 });
}
