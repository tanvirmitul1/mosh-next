import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Example: Fetch user data based on the ID
  const user = { id, name: "John Doe", email: "john.doe@example.com" }; // Replace with actual data fetching logic

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();

  // Example: Update user data based on the ID
  const updatedUser = { id, ...body }; // Replace with actual update logic

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Example: Delete user data based on the ID
  // Replace with actual delete logic

  return NextResponse.json({
    message: `User with ID ${id} deleted successfully`,
  });
}
