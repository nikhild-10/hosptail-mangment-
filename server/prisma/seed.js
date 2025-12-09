"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Seeding database...');
        // 1. Create Admin
        const adminPassword = yield bcrypt_1.default.hash('admin123', 10);
        const admin = yield prisma.user.upsert({
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
        const doctorPassword = yield bcrypt_1.default.hash('doctor123', 10);
        const doc1 = yield prisma.user.upsert({
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
        const doc2 = yield prisma.user.upsert({
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
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
