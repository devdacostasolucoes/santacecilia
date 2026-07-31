import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import '../css/output.css'

const pages = import.meta.glob('./Pages/**/*.jsx', {
    eager: true,
})

console.log('Páginas existentes:', pages)
createInertiaApp({
    resolve: name => {
        console.log('Página recebida pelo Inertia:', name)
        console.log('Páginas encontradas:', pages)

        return pages[`./Pages/${name}.jsx`]
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <App {...props} />
        )
    },
})
