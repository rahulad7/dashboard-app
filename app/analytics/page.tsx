'use client';

import { useEffect, useState } from 'react';
import { AnalyticsData } from '@/src/types';
import Card from '@/src/components/ui/Card';
import NotificationsOverTimeChart from '@/src/components/charts/NotificationsOverTimeChart';
import ReadVsUnreadChart from '@/src/components/charts/ReadVsUnreadChart';

export default function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch('/api/analytics');
        const result = await response.json();

        if (result.success && result.data) {
          setAnalyticsData(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-brand-text mb-6">Analytics</h1>
        <div className="text-center py-12">
          <p className="text-gray-500">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-brand-text mb-6">Analytics</h1>
        <div className="text-center py-12">
          <p className="text-gray-500">No analytics data available</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-brand-text mb-6">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <h2 className="text-lg font-semibold text-brand-text mb-4">
            Notifications Over Time (Last 24 Hours)
          </h2>
          <NotificationsOverTimeChart data={analyticsData.notificationsOverTime} />
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-brand-text mb-4">
            Read vs Unread
          </h2>
          <ReadVsUnreadChart data={analyticsData.readVsUnread} />
        </Card>
      </div>
    </div>
  );
}

