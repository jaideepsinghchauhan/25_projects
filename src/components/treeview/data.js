export const treeData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    children: [
      {
        label: "Analytics",
        to: "/dashboard/analytics",
      },
      {
        label: "Reports",
        to: "/dashboard/reports",
        children: [
          {
            label: "Sales Report",
            to: "/dashboard/reports/sales",
          },
          {
            label: "User Report",
            to: "/dashboard/reports/users",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Profile",
        to: "/settings/profile",
      },
      {
        label: "Security",
        to: "/settings/security",
        children: [
          {
            label: "Password",
            to: "/settings/security/password",
          },
          {
            label: "2FA",
            to: "/settings/security/2fa",
          },
        ],
      },
    ],
  },
];