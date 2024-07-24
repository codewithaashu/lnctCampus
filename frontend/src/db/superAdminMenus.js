import {
  CalendarDays,
  CalendarPlus,
  LayoutDashboard,
  Mail,
  MailPlus,
  User,
} from "lucide-react";

export const superAdminMenus = [
  { icon: LayoutDashboard, title: "Dashboard", path: "/" },
  { icon: CalendarDays, title: "Drives", path: "/drives" },
  { icon: CalendarPlus, title: "Create Drive", path: "/create-drive" },
  { icon: Mail, title: "Posts", path: "/posts" },
  { icon: MailPlus, title: "Create Post", path: "/create-post" },
  { icon: User, title: "TPO List", path: "/tpo" },
];
