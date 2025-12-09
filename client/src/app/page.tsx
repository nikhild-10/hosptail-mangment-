import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="w-full max-w-5xl items-center justify-center font-mono text-sm flex mb-12">
                <p className="flex w-auto justify-center border rounded-full border-gray-200 bg-white/50 px-8 py-3 backdrop-blur-xl shadow-sm text-slate-600 hover:shadow-md transition-all cursor-default">
                    Hospital Management System & Telemedicine Platform
                </p>
            </div>

            <div className="relative flex flex-col items-center place-items-center mb-16">
                <div className="relative w-[600px] h-[400px] mb-8 group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse"></div>
                    <Image
                        src={getImagePath("/hero.png")}
                        alt="Hospital Building and Telemedicine"
                        fill
                        className="object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:rotate-1"
                        priority
                    />
                </div>
                <div className="text-center space-y-6 max-w-3xl">
                    <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight">
                        HealWaitless
                    </h1>
                    <div className="space-y-4">
                        <p className="text-2xl font-medium text-slate-700">
                            The advanced healthcare platform for everyone.
                        </p>
                        <blockquote className="text-xl italic text-slate-500 font-light border-l-4 border-blue-400 pl-4 py-1 mx-auto max-w-2xl bg-white/50 rounded-r-lg">
                            "Bridging the gap between care and convenience, because your health can't wait."
                        </blockquote>
                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8 px-4">

                <Link
                    href="/portal/patient/login"
                    className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-blue-400 hover:shadow-lg hover:bg-blue-50"
                >
                    <div className="flex flex-col items-center mb-4">
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src={getImagePath("/patient.png")}
                                alt="Patient Portal"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className={`text-2xl font-semibold text-blue-900`}>
                            Patient Portal{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </div>
                    <p className={`m-0 text-center text-sm text-slate-600`}>
                        Book appointments, view reports, and consult doctors online.
                    </p>
                </Link>


                <Link
                    href="/portal/doctor/login"
                    className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-blue-400 hover:shadow-lg hover:bg-blue-50"
                >
                    <div className="flex flex-col items-center mb-4">
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src={getImagePath("/doctor.png")}
                                alt="Doctor Portal"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className={`text-2xl font-semibold text-blue-900`}>
                            Doctor Portal{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </div>
                    <p className={`m-0 text-center text-sm text-slate-600`}>
                        Manage patients, appointments, and provide telemedicine consults.
                    </p>
                </Link>


                <Link
                    href="/portal/admin/login"
                    className="group rounded-xl border border-gray-200 p-6 transition-all hover:border-purple-400 hover:shadow-lg hover:bg-purple-50"
                >
                    <div className="flex flex-col items-center mb-4">
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src={getImagePath("/admin.png")}
                                alt="Admin Portal"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className={`text-2xl font-semibold text-purple-900`}>
                            Admin Portal{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </div>
                    <p className={`m-0 text-center text-sm text-slate-600`}>
                        Hospital management, staff controls, and analytics.
                    </p>
                </Link>
            </div>
        </main>
    );
}
