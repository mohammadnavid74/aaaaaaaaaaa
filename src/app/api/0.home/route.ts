import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

/**
 * 🎯 این API Route با Gateway شما ارتباط برقرار می‌کند
 */

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;

interface GatewayResponse {
  data: any;
  message?: string;
}

export async function GET() {
  try {
    const response = await axios.get<GatewayResponse>(`${GATEWAY_URL}/homeSiteSection`, {
      timeout: 15000
    });

    return NextResponse.json({
      success: true,
      data: response.data,
      source: 'gateway',
      timestamp: new Date().toISOString()
    });

  } catch (err: unknown) {
    console.error('Error calling gateway:', err);
    
    // استفاده از type guard برای AxiosError
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError<{ message?: string }>;
      
      if (error.response?.status === 429) {
        return NextResponse.json(
          { success: false, error: 'محدودیت نرخ درخواست' },
          { status: 429 }
        );
      }
      
      return NextResponse.json(
        { 
          success: false, 
          error: error.response?.data?.message || 'خطا در ارتباط با Gateway' 
        },
        { status: error.response?.status || 500 }
      );
    }
    
    // بررسی سایر خطاهای شبکه
    if (err instanceof Error) {
      if ('code' in err && err.code === 'ECONNREFUSED') {
        return NextResponse.json(
          { success: false, error: 'Gateway در دسترس نیست' },
          { status: 503 }
        );
      }
    }
    
    // خطای پیش‌فرض
    return NextResponse.json(
      { 
        success: false, 
        error: 'خطای غیرمنتظره در ارتباط با Gateway' 
      },
      { status: 500 }
    );
  }
}