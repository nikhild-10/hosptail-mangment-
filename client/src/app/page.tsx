import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Hospital Management System & Telemedicine Platform
                </p>
            </div>

            <div className="relative flex flex-col items-center place-items-center">
                <div className="mb-10 relative w-[600px] h-[400px]">
                    <Image
                        src={getImagePath("/hero.png")}
                        alt="Hospital Building and Telemedicine"
                        fill
                        className="object-cover rounded-2xl shadow-2xl"
                        priority
                    />
                </div>
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-slate-800 mb-6">HealWaitless</h1>
                    <p className="text-xl text-slate-600">The advanced healthcare platform for everyone.</p>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">

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
