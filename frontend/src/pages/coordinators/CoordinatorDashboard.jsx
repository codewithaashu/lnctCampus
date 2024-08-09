import StatsCard from "@/components/dashboard/superadmin/StatsCard";
import TopCompaniesStats from "@/components/dashboard/superadmin/TopCompaniesStats";
import UpcomingEventsCard from "@/components/dashboard/superadmin/UpcomingEventsCard";
import { coordinatorStats } from "@/db/coordinatorStats";
import { events } from "@/db/events";
import { superAdminChartsData } from "@/db/superAdminChartsData";
import React from "react";

const CoordinatorDashboard = () => {
  return (
    <div className="flex flex-col gap-7">
      {/* Stats Box */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {coordinatorStats?.map((curr, index) => (
          <StatsCard title={curr.label} value={curr.value} key={index} />
        ))}
      </div>
      {/*Top placement chart and Upcoming Events */}
      <div className="grid gap-5 md:grid-cols-2">
        <TopCompaniesStats chartData={superAdminChartsData} />
        <UpcomingEventsCard events={events} />
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
