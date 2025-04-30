import { NextResponse } from 'next/server';
import { products } from '@/data/productsData';

export async function GET() {
  return NextResponse.json(products);
}
