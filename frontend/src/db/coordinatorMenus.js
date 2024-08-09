import {
  BriefcaseBusiness,
  BriefcaseMedical,
  CalendarClock,
  LayoutDashboard,
  Mail,
  MailPlus,
} from "lucide-react";

export const coordinatorMenus = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BriefcaseBusiness, label: "Jobs", path: "/jobs" },
  { icon: BriefcaseMedical, label: "Create Job", path: "/create-job" },
  { icon: Mail, label: "Posts", path: "/posts" },
  { icon: MailPlus, label: "Create Post", path: "/create-post" },
  { icon: CalendarClock, label: "Events", path: "/events" },
];
