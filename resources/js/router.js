import Vue from 'vue'
import VueRouter from 'vue-router'
import store from'./store'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: () => import('./components/Home'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: () => import('./components/About'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },
        },
        {
            path: '/services',
            name: 'services',
            components: {
                default: () => import('./components/Services'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },
        },
        {
            path: '/faqs',
            name: 'faqs',
            components: {
                default: () => import('./components/FAQs'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },
        },
        {
            path: '/booking',
            name: 'booking',
            components: {
                default: () => import('./components/Booking'),
                header: () => import('./components/Navbar'),
            },

            beforeEnter(to,from,next){
                store.state.ServiceID ? next() : next({path: '/services', replace: true})
            }
        },
        {
            path: '/customerinfo',
            name: 'customerinfo',
            components: {
                default: () => import('./components/Customerinfo'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },

            beforeEnter(to,from,next){
                store.state.selectedDateAndTime.Date && store.state.selectedDateAndTime.Time ? next() : next({path: '/booking', replace: true})
            }
        },
        {
            path: '/feedbacks',
            name: 'feedbacks',
            components: {
                default: () => import('./components/Feedbacks'),
                header: () => import('./components/Navbar'),
                // footer: () => import('./components/Footer'),
            },
        },
        {
            path: '/login',
            name: 'login',
            components: {
                default: () => import('./components/Login'),
            },
        },
        {
            path: '/admin',
            name: 'admin',
            components: {
                default: () => import('./components/Admin'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        // {
        //     path: '/upload',
        //     name: 'upload',
        //     components: {
        //         default: () => import ('./components/UploadFile'),
        //         header: () => import('./components/AdminNavbar'),
        //     },

        //     beforeEnter(to,from,next){
        //         const myCookie = Vue.$cookies.get('myCookie')
        //         if(myCookie){
        //             next();
        //         }else{
        //             next({path: '/', replace: true})
        //         }
        //     }
        // },
        {
            path: '/adminservices',
            name: 'adminservices',
            components: {
                default: () => import('./components/AdminServices'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        {
            path: '/schedules',
            name: 'schedules',
            components: {
                default: () => import('./components/Schedules'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        {
            path: '/customizehomepage',
            name: 'customizehomepage',
            components: {
                default: () => import('./components/CustomizeHomePage'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        {
            path: '/customizefeedback',
            name: 'customizefeedback',
            components: {
                default: () => import('./components/CustomizeFeedback'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        {
            path: '/customizeabout',
            name: 'customizeabout',
            components: {
                default: () => import('./components/CustomizeAbout'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
        {
            path: '/maintenance',
            name: 'maintenance',
            components: {
                default: () => import('./components/Maintenance'),
                header: () => import('./components/AdminNavbar'),
            },

            beforeEnter(to, from, next) {
                const myCookie = Vue.$cookies.get('myCookie')
                if (myCookie) {
                    next();
                } else {
                    next({ path: '/', replace: true })
                }
            }
        },
    ],
});

export default router