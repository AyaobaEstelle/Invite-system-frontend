import React from "react";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";

type InviteTableProps = {
  headers: { name: string; value: string }[];
  rows: Record<string, unknown>[];
};

const InviteTable = ({ headers, rows }: InviteTableProps) => {
  return (
    <div className="relative overflow-x-auto rounded-xl border border-green-100 bg-white shadow-sm">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-green-50 text-green-900">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                scope="col"
                className={`px-6 py-3 font-semibold ${
                  idx === 0
                    ? "rounded-tl-xl"
                    : idx === headers.length - 1
                    ? "rounded-tr-xl"
                    : ""
                }`}
              >
                {header.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="text-center py-10 text-gray-400 italic"
              >
                No data available
              </td>
            </tr>
          ) : (
            rows.map((row, rowIdx) => (
              <tr
                key={String((row as { _id?: string | number })?._id ?? rowIdx)}
                className={`${
                  rowIdx % 2 === 0 ? "bg-white" : "bg-green-50/30"
                } hover:bg-green-100/40 transition-colors`}
              >
                {headers.map((header, colIdx) => {
                  const cellValue = String(row[header.value] ?? "");
                  const isUsedColumn = header.value === "used";
                  const isLinkColumn = header.value === "link";

                  return (
                    <td
                      key={header.value}
                      className={`px-6 py-4 ${
                        colIdx === 0
                          ? "font-medium text-gray-900 whitespace-nowrap"
                          : ""
                      }`}
                    >
                      {isUsedColumn ? (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            cellValue.toLowerCase() === "yes"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {cellValue.toLowerCase() === "yes" ? (
                            <CheckCircle size={12} />
                          ) : (
                            <XCircle size={12} />
                          )}
                          {cellValue}
                        </span>
                      ) : isLinkColumn ? (
                        <a
                          href={cellValue}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:text-green-900 flex items-center gap-1"
                        >
                          <span className="truncate max-w-[220px] block">
                            {cellValue}
                          </span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        cellValue
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InviteTable;
