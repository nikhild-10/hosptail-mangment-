'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'critical';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    timestamp: number;
    read: boolean;
}

interface NotificationContextType {
    notifications: Notification[];
    unreadCount: number;
    addNotification: (title: string, message: string, type?: NotificationType) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Add initial dummy notification
    useEffect(() => {
        addNotification('Welcome to HealWaitless', 'We are glad to have you here. Stay safe!', 'info');
    }, []);

    const addNotification = (title: string, message: string, type: NotificationType = 'info') => {
        const newNotif: Notification = {
            id: Date.now().toString(),
            title,
            message,
            type,
            timestamp: Date.now(),
            read: false,
        };
        setNotifications((prev) => [newNotif, ...prev]);

        // If critical, play a sound or vibration (simulated)
        if (type === 'critical') {
            // In a real app, trigget alert sound
            console.log("CRITICAL ALERT RECEIVED");
        }
    };

    const markAsRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
        <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, markAsRead, markAllAsRead }}>
            {children}
        </NotificationContext.Provider>
    );
}

export function useNotifications() {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
