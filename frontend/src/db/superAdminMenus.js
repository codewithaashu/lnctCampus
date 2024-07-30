import {
  CalendarDays,
  CalendarPlus,
  LayoutDashboard,
  Mail,
  MailPlus,
  User,
} from "lucide-react";

export const superAdminMenus = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: CalendarDays, label: "Drives", path: "/drives" },
  { icon: CalendarPlus, label: "Create Drive", path: "/create-drive" },
  { icon: Mail, label: "Posts", path: "/posts" },
  { icon: MailPlus, label: "Create Post", path: "/create-post" },
  { icon: User, label: "TPO List", path: "/tpo" },
];
