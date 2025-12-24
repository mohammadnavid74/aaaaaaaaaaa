import { commodities } from '@/types/commo';
import { NextResponse } from 'next/server';

function findByCode(items: any[], code: string): any | null {
  for (const item of items) {
    if (item.code === code) return item;

    if (item.children?.length) {
      const found = findByCode(item.children, code);
      if (found) return found;
    }
  }
  return null;
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params; // اضافه کردن await
  
  const commodity = findByCode(commodities, code);

  if (!commodity) {
    return NextResponse.json(
      { message: 'Commodity not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(commodity);
}