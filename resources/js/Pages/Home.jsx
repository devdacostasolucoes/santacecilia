import React from 'react';
import { Head } from '@inertiajs/react';

export default function Home({ appName }) {
    return (
        <main className="home-page">
            <Head title="Inicio" />

            <section className="home-page__content">
                <p className="home-page__eyebrow">Laravel + Inertia + React</p>
                <h1>{appName || 'Santa Cecilia'}</h1>
                <p>
                    O frontend React esta configurado com Inertia e pronto para
                    receber as paginas da aplicacao.
                </p>
            </section>
        </main>
    );
}
