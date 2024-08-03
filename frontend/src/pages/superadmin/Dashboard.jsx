import PlacedStudentStats from "@/components/dashboard/superadmin/PlacedStudentStats";
import RecentPlacedCard from "@/components/dashboard/superadmin/RecentPlacedCard";
import StatsCard from "@/components/dashboard/superadmin/StatsCard";
import TopCompaniesStats from "@/components/dashboard/superadmin/TopCompaniesStats";
import UpcomingEventsCard from "@/components/dashboard/superadmin/UpcomingEventsCard";
import { events } from "@/db/events";
import { placedData } from "@/db/placedData";
import { placementStats } from "@/db/placementStats";
import { superAdminChartsData } from "@/db/superAdminChartsData";
import { superAdminStats } from "@/db/superAdminStats";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        {/* Stats Box */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {superAdminStats.map((curr, index) => (
            <StatsCard title={curr.label} value={curr.value} key={index} />
          ))}
        </div>
        {/*Top placement chart and Upcoming Events */}
        <div className="grid gap-5 md:grid-cols-2">
          <TopCompaniesStats chartData={superAdminChartsData} />
          <UpcomingEventsCard events={events} />
        </div>
        {/* Placed Students and Placed student stats */}
        <div className="grid gap-5 md:grid-cols-3">
          <RecentPlacedCard placedData={placedData} />
          <PlacedStudentStats placedStats={placementStats} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
