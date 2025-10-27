export type Employee = {
  _id: string;
  name: string;
  email: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignedTo: string;
  employeeName: string;
  status: "Pending" | "In Progress" | "Completed" | "Overdue";
};

export const employees: Employee[] = [
  { _id: "1", name: "Shiloh Johnson", email: "shiloh@example.com" },
  { _id: "2", name: "Fiyin Balogun", email: "fiyin@example.com" },
  { _id: "3", name: "Samuel Jasper", email: "samuel@example.com" },
  { _id: "4", name: "Mercy Crown", email: "mercy@example.com" },
];

export const tasks: Task[] = [
  {
    id: "t1",
    title: "Prepare Weekly Report",
    description: "Summarize team progress and submit by Friday.",
    dueDate: "2025-10-30",
    assignedTo: "1",
    employeeName: "Shiloh Johnson",
    status: "Pending",
  },
  {
    id: "t2",
    title: "Update Client Records",
    description: "Review client data and correct inconsistencies.",
    dueDate: "2025-11-02",
    assignedTo: "2",
    employeeName: "Fiyin Balogun",
    status: "In Progress",
  },
  {
    id: "t3",
    title: "Inventory Check",
    description: "Complete the monthly warehouse stock verification.",
    dueDate: "2025-11-05",
    assignedTo: "3",
    employeeName: "Samuel Jasper",
    status: "Completed",
  },
  {
    id: "t4",
    title: "Follow up with Vendors",
    description: "Ensure all supply chain communications are updated.",
    dueDate: "2025-10-25",
    assignedTo: "4",
    employeeName: "Mercy Crown",
    status: "Overdue",
  },
];
