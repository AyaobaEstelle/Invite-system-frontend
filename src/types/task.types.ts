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
  assignedToName?: string; 
  status?: "Pending" | "In Progress" | "Completed";
};

export type TaskFormPayload = {
  title: string;
  description: string;
  dueDate: string;
  assignedTo: string;
};
