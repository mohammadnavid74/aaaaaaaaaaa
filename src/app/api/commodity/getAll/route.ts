import { NextResponse } from 'next/server';
import { commodities } from '../getByCode/[code]/route';

export async function GET() {




  return NextResponse.json(commodities);
}
