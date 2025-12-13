import { NextResponse } from 'next/server';
import { generateSampleNotifications } from '@/src/lib/mockData';
import { Notification } from '@/src/types';

export async function GET() {
  try {
    const notifications: Notification[] = generateSampleNotifications(15, true);

    return NextResponse.json(
      {
        success: true,
        data: notifications,
        count: notifications.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch notifications',
      },
      { status: 500 }
    );
  }
}

