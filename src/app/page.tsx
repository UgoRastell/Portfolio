"use client";

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Button label='Theme mode' onClick={toggleTheme} />
            <h1 className="text-4xl font-bold">Bienvenue sur mon portfolio</h1>
            <p className="mt-4 text-lg">Explorez mes projets ci-dessous :</p>

            <Link href="/projects" className="text-blue-500 hover:underline">
                Voir mes projets
            </Link>

            <nav className="mt-8">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/competence" className="text-blue-500 hover:underline">
                            Compétence
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-blue-500 hover:underline">
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-blue-500 hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}