import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, MessageSquare, Phone } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export default function StatsCard({ title, value, change, icon, trend = 'neutral' }: StatsCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${getTrendColor()}`}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Pre-configured stats cards for common metrics
export function MessageStatsCard() {
  return (
    <StatsCard
      title="Total Messages"
      value="2,847"
      change="+12% from last month"
      trend="up"
      icon={<MessageSquare className="h-4 w-4" />}
    />
  );
}

export function UserStatsCard() {
  return (
    <StatsCard
      title="Active Users"
      value="1,234"
      change="+8% from last month"
      trend="up"
      icon={<Users className="h-4 w-4" />}
    />
  );
}

export function CallStatsCard() {
  return (
    <StatsCard
      title="Phone Calls"
      value="456"
      change="+3% from last month"
      trend="up"
      icon={<Phone className="h-4 w-4" />}
    />
  );
}

export function GrowthStatsCard() {
  return (
    <StatsCard
      title="Growth Rate"
      value="23.5%"
      change="+2.1% from last month"
      trend="up"
      icon={<TrendingUp className="h-4 w-4" />}
    />
  );
}
