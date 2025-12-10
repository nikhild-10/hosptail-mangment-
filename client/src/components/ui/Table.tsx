'use client';

import React from 'react';

interface Column<T> {
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    className?: string;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyField: keyof T;
    onRowClick?: (row: T) => void;
    actions?: (row: T) => React.ReactNode;
}

export function Table<T>({ data, columns, keyField, onRowClick, actions }: TableProps<T>) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 font-medium border-b border-slate-200 dark:border-slate-700">
                        <tr>
                            {columns.map((col, i) => (
                                <th key={i} className={`px-6 py-4 ${col.className || ''}`}>
                                    {col.header}
                                </th>
                            ))}
                            {actions && <th className="px-6 py-4 text-right">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + (actions ? 1 : 0)} className="px-6 py-12 text-center text-slate-500">
                                    No data found.
                                </td>
                            </tr>
                        ) : (
                            data.map((row) => (
                                <tr
                                    key={String(row[keyField])}
                                    onClick={() => onRowClick && onRowClick(row)}
                                    className={`
                                        group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors
                                        ${onRowClick ? 'cursor-pointer' : ''}
                                    `}
                                >
                                    {columns.map((col, i) => (
                                        <td key={i} className="px-6 py-4 text-slate-900 dark:text-slate-200 align-middle">
                                            {typeof col.accessor === 'function'
                                                ? col.accessor(row)
                                                : (row[col.accessor] as React.ReactNode)}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className="px-6 py-4 text-right align-middle" onClick={(e) => e.stopPropagation()}>
                                            {actions(row)}
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
