// Importa el módulo vue-router y los componentes que quieres usar
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import { useHead } from '@vueuse/head'

// Define un array de objetos con las rutas
const routes = [
    {
        path: '/', // la ruta base
        name: 'Home', // el nombre de la ruta
        component: Home, // el componente que se renderiza
        meta: { analytics: true }
    },
    {
        path: '/about', // la ruta base
        name: 'About', // el nombre de la ruta
        component: () => import('./views/About.vue'),
        meta: { analytics: true }
    },
    {
        path: '/contacto', // la ruta base
        name: 'Contacto', // el nombre de la ruta
        component: () => import('./views/Contacto.vue'),
        meta: { analytics: true }
    },
    {
        path: '/premium', // otra ruta
        name: 'Premium',
        component: () => import('./views/Premium.vue'),
        meta: { analytics: true }
    },
    {
        path: '/anunciantes', // otra ruta
        name: 'Anunciantes',
        component: () => import('./views/Empresas.vue'),
        meta: { analytics: true }
    },
    {
        path: '/privacy',
        name: 'Priacy Policy',
        component: () => import('./views/PrivacyPolicy.vue'),
        meta: { analytics: false }
    },
    {
        path: '/DiabetesPremiumDeleteAccount',
        name: 'Delete Account',
        component: () => import('./views/DeleteAccount.vue'),
        meta: { analytics: true }
    },
    {
        path: '/isa',
        name: 'IsaLinktree',
        component: () => import('./views/extras/Isa.vue'),
        meta: { analytics: false }
    },
    {
        path: '/lab',
        name: 'SugarLab',
        component: () => import('./views/extras/Lab.vue'),
        meta: { analytics: false }
    },
    {
        path: '/terminos',
        name: 'Terms',
        component: () => import('./views/Terms.vue'),
        meta: { analytics: false }
    },
    {
        // Mantener compatibilidad con el link actual del header
        path: '/Terminos%20y%20condiciones',
        redirect: '/terminos'
    },
    {
        path: '/:catchAll(.*)', // otra ruta
        name: 'NotFound',
        component: () => import('./views/404.vue'),
        meta: { analytics: false }
    },
    {
        path: '/premium/checkout',
        name: 'PremiumCheckout',
        component: () => import('@/views/premium/Checkout.vue'),
        meta: { analytics: true }
    },
    {
        path: '/premium/premios',
        name: 'PremiumPremios',
        component: () => import('./views/premium/Premios.vue'),
        meta: { analytics: true }
    },
    {
        path: '/premium/success',
        name: 'PremiumSuccess',
        component: () => import('./views/premium/Success.vue'),
        meta: { analytics: true }
    },
    {
        path: '/premium/error',
        name: 'PremiumError',
        component: () => import('./views/premium/Error.vue'),
        meta: { analytics: true }
    }
]

// Crea una instancia del router y pasa las rutas como opción
const router = createRouter({
    history: createWebHistory(), //process.env.BASE_URL     usa el modo history para evitar el hash (#) en la URL
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path !== from.path) {
            return { left: 0, top: 0, behavior: 'instant' };
        }
    }
})

router.beforeEach((to, from, next) => {
    if (to.path === '/premium' && to.hash === '#premios') {
        next({ name: 'PremiumPremios' })
        return
    }
    // Si la ruta tiene el meta analytics en true, se agrega el script de Google Analytics al head
    if (to.meta.analytics && !window.__ga_loaded__) {
        useHead({
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-600XFCVLS9',
                    async: true
                },
                {
                    innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-600XFCVLS9');
                    `
                },
            ]
        })
    }
    // Se continúa con la navegación
    next()
})


// Exporta el router para usarlo en tu aplicación
export default router