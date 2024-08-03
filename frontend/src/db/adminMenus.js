import {
  BriefcaseBusiness,
  BriefcaseMedical,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MailPlus,
  User,
} from "lucide-react";

export const adminMenus = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: GraduationCap, label: "Students", path: "/students" },
  { icon: BriefcaseBusiness, label: "Jobs", path: "/jobs" },
  { icon: BriefcaseMedical, label: "Create Job", path: "/create-job" },
  { icon: Mail, label: "Posts", path: "/posts" },
  { icon: MailPlus, label: "Create Post", path: "/create-post" },
  { icon: User, label: "Coordinators", path: "/coordinators" },
];
