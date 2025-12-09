'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export function useVoiceNavigation() {
    const router = useRouter();
    const { setTheme } = useTheme();
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) return;

        // @ts-ignore
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);

        recognition.onresult = (event: any) => {
            const command = event.results[0][0].transcript.toLowerCase();
            setTranscript(command);
            processCommand(command);
        };

        if (isListening) {
            recognition.start();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening]);

    const processCommand = (command: string) => {
        if (command.includes('home')) router.push('/');
        if (command.includes('patient') || command.includes('login')) router.push('/portal/patient/login');
        if (command.includes('doctor')) router.push('/portal/doctor/login');
        if (command.includes('admin')) router.push('/portal/admin/login');
        if (command.includes('dark mode') || command.includes('lights off')) setTheme('dark');
        if (command.includes('light mode') || command.includes('lights on')) setTheme('light');
        if (command.includes('sos') || command.includes('help')) {
            const sosButton = document.querySelector('button[title="Emergency SOS"]') as HTMLButtonElement;
            if (sosButton) sosButton.click();
        }
    };

    const startListening = () => setIsListening(true);

    return { isListening, transcript, startListening };
}
