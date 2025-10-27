"use client";

import React from "react";
import { tasks } from "@/components/data/taskDummy";
import { DashboardLayout } from "@/components/layout/dashboard/Layout";

export default function AdminTasksPage() {
  const getStatusBadge = (status: string) => {
    const baseStyle =
      "px-3 py-1 text-xs font-semibold rounded-full inline-block text-center";

    switch (status) {
      case "Pending":
        return `${baseStyle} bg-yellow-100 text-yellow-800`;
      case "In Progress":
        return `${baseStyle} bg-blue-100 text-blue-700`;
      case "Completed":
        return `${baseStyle} bg-green-100 text-green-700`;
      case "Overdue":
        return `${baseStyle} bg-red-100 text-red-700`;
      default:
        return baseStyle;
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Task Overview</h1>
            <p className="text-gray-500 text-sm mt-1">
              View and manage all assigned tasks
            </p>
          </div>

          <button className="px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg shadow hover:bg-green-700 transition">
            + Add New Task
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-semibold text-gray-700">Task</th>
                <th className="p-4 font-semibold text-gray-700">Description</th>
                <th className="p-4 font-semibold text-gray-700">Assigned To</th>
                <th className="p-4 font-semibold text-gray-700">Due Date</th>
                <th className="p-4 font-semibold text-gray-700">Status</th>
                <th className="p-4 text-right font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr
                  key={task.id}
                  className={`transition hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="p-4 font-medium text-gray-900">
                    {task.title}
                  </td>
                  <td className="p-4 text-gray-600">{task.description}</td>
                  <td className="p-4 text-gray-800">{task.employeeName}</td>
                  <td className="p-4 text-gray-600">{task.dueDate}</td>
                  <td className="p-4">
                    <span className={getStatusBadge(task.status)}>
                      {task.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:underline text-sm mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
