'use client';

import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';

export function NotificationBell() {
    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 mr-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full border-2 border-white dark:border-slate-900 animate-bounce"></span>
                )}
            </button>

            {isOpen && (
                <div className="absolute top-12 right-0 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">Notifications ({unreadCount})</h3>
                        <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:text-blue-700 font-medium">Mark all read</button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center text-slate-500 text-sm">No new notifications</div>
                        ) : (
                            notifications.map((notif) => (
                                <div
                                    key={notif.id}
                                    onClick={() => markAsRead(notif.id)}
                                    className={`p-4 border-b border-slate-50 dark:border-slate-800/50 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${!notif.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`text-sm font-semibold ${notif.type === 'critical' ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                                            {notif.type === 'critical' && '🚨 '}{notif.title}
                                        </h4>
                                        <span className="text-[10px] text-slate-400">Now</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{notif.message}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {/* Backdrop to close */}
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            )}
        </div>
    );
}
