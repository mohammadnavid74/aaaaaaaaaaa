import { commodities } from "@/types/commo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(commodities);
}
