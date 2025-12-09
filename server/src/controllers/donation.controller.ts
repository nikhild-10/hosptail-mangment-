import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getRequests = async (req: Request, res: Response) => {
    try {
        const requests = await prisma.bloodRequest.findMany({
            where: { status: 'ACTIVE' },
            orderBy: { createdAt: 'desc' },
            include: {
                responses: true
            }
        });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requests' });
    }
};

export const createRequest = async (req: Request, res: Response) => {
    try {
        const { bloodGroup, unitsNeeded, message } = req.body;

        const newRequest = await prisma.bloodRequest.create({
            data: {
                bloodGroup,
                unitsNeeded: Number(unitsNeeded),
                message,
                status: 'ACTIVE'
            }
        });

        // Simulating a broadcast to all users (In real app, filter by compatibility)
        // Creating a notification for demonstration
        const users = await prisma.user.findMany({ take: 50 }); // Limit for performance

        const notifications = users.map(user => ({
            userId: user.id,
            title: `Urgent: ${bloodGroup} Needed`,
            message: `Emergency request: ${message}`,
            type: 'critical'
        }));

        await prisma.notification.createMany({ data: notifications });

        res.status(201).json(newRequest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating request' });
    }
};

export const registerDonor = async (req: Request & { user?: any }, res: Response) => {
    try {
        const { bloodGroup } = req.body;
        const userId = req.user.id;

        const donor = await prisma.bloodDonor.upsert({
            where: { userId },
            update: { bloodGroup, availability: true },
            create: {
                userId,
                bloodGroup,
                availability: true,
                lastDonated: new Date()
            }
        });

        res.json(donor);
    } catch (error) {
        res.status(500).json({ message: 'Error registering donor' });
    }
};
