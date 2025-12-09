import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // 1. Create Admin
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@healwaitless.com' },
        update: {},
        create: {
            email: 'admin@healwaitless.com',
            password: adminPassword,
            name: 'System Admin',
            role: 'ADMIN',
            phone: '1234567890'
        }
    });

    // 2. Create Doctors
    const doctorPassword = await bcrypt.hash('doctor123', 10);

    const doc1 = await prisma.user.upsert({
        where: { email: 'sarah.wilson@hospital.com' },
        update: {},
        create: {
            email: 'sarah.wilson@hospital.com',
            password: doctorPassword,
            name: 'Dr. Sarah Wilson',
            role: 'DOCTOR',
            phone: '555-0101',
            doctor: {
                create: {
                    specialization: 'Cardiology',
                    consultationFee: 150,
                    roomNumber: '304',
                    availability: JSON.stringify({ mon: ["09:00", "12:00"], wed: ["14:00", "17:00"] })
                }
            }
        }
    });

    const doc2 = await prisma.user.upsert({
        where: { email: 'james.chen@hospital.com' },
        update: {},
        create: {
            email: 'james.chen@hospital.com',
            password: doctorPassword,
            name: 'Dr. James Chen',
            role: 'DOCTOR',
            phone: '555-0102',
            doctor: {
                create: {
                    specialization: 'Cardiology',
                    consultationFee: 150,
                    roomNumber: '305'
                }
            }
        }
    });

    console.log('Seeding finished.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
