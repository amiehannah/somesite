export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const street = data.get("street");
  const suburb = data.get("suburb");
  const service = data.get("service");
  const comments = data.get("comments");

  // validate the data - you'll probably want to do more than this
  if (
    !name ||
    !email ||
    !phone ||
    !street ||
    !suburb ||
    !service ||
    !comments
  ) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  //   Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
