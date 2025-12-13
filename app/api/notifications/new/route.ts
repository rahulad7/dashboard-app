import { NextResponse } from 'next/server';
import { generateMockNotification } from '@/src/lib/mockData';
import { Notification } from '@/src/types';

export async function GET() {
  try {
    const newNotification: Notification = generateMockNotification(undefined, false);

    return NextResponse.json(
      {
        success: true,
        data: newNotification,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error generating new notification:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate new notification',
      },
      { status: 500 }
    );
  }
}

