import PlacedStudentStats from "@/components/dashboard/superadmin/PlacedStudentStats";
import RecentPlacedCard from "@/components/dashboard/superadmin/RecentPlacedCard";
import StatsCard from "@/components/dashboard/superadmin/StatsCard";
import TopCompaniesStats from "@/components/dashboard/superadmin/TopCompaniesStats";
import UpcomingCard from "@/components/dashboard/superadmin/UpcomingCard";
import { superAdminStats } from "@/db/superAdminStats";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-7">
        {/* Stats Box */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {superAdminStats.map((curr, index) => (
            <StatsCard title={curr.title} value={curr.value} key={index} />
          ))}
        </div>
        {/* Recent Placements and Upcoming Events */}
        {/* <div className="flex gap-5">
          <RecentPlacedCard />
          <UpcomingCard />
        </div> */}
        {/* Placed Students and Top Companies */}
        <div className="flex justify-between gap-8">
          <PlacedStudentStats />
          <TopCompaniesStats />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
