import { NextResponse } from 'next/server';
import { generateAnalyticsData } from '@/src/lib/analytics';
import { AnalyticsData } from '@/src/types';

export async function GET() {
  try {
    const analyticsData: AnalyticsData = generateAnalyticsData();

    return NextResponse.json(
      {
        success: true,
        data: analyticsData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch analytics',
      },
      { status: 500 }
    );
  }
}

