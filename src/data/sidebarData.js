import {
  LayoutDashboard,
  ArrowUpDown,
  CalendarRange,
  SquarePlus,
  FileChartLine,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

const sidebarData = [
  {
    title: "General",
    items: [
      { icon: LayoutDashboard, label: "Dashboard" },
      { icon: ArrowUpDown, label: "History" },
      { icon: CalendarRange, label: "Calendar" },
      { icon: SquarePlus, label: "Appointments" },
      { icon: FileChartLine, label: "Statistics" },  
    ],
  },
  {
    title: "Tools",
    items: [
      { icon:  MessageCircleMore, label: "Chat" },
      { icon:  Phone , label: "Support" },
    ],
  },
  {
    title: "",
    items: [
      { icon:  Settings , label: "Settings" },
    ],
    extraStyle: "settings-section"
  },
];

export default sidebarData;
