import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { prisma } from "@/db";


export async function POST(req: Request) {
  const { title } = await req.json();

    if (typeof title !== "string" || title.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.todo.create({
      data: { title, complete: false, userId: '1' },
    });

    return NextResponse.json({ message: "Created Todo" }, { status: 200 });

}

export async function DELETE(req: Request) {
  await prisma.todo.deleteMany({});
  return NextResponse.json({ message: "All Todos Deleted" }, { status: 200 });
}
