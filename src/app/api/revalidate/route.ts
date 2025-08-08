import type { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    // Revalidate the blogs page
    revalidatePath("/blog");
    return Response.json({ revalidated: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return new Response("Error revalidating", { status: 500 });
  }
}
