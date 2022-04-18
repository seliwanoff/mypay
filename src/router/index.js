import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/dashboard.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Data from '../views/data.vue'
import Airtime from '../views/airtime.vue'
import Mtnirtime from '../views/mtn-airtime.vue'
import Airtelairtime from '../views/airtel-topup.vue'
import Gloairtime from '../views/glo-topup.vue'
import mobileairtime from '../views/9mobile-topup.vue'
import Makepayment from '../views/make_payment.vue'
import Home from '../views/home.vue'
import Mtndata from '../views/mtn-data.vue'
import Glodata from '../views/glo-data.vue'
import Airteldata from '../views/airtel-data.vue'
import Mobiledata from '../views/9mobile-data.vue'
import Tvtopup from '../views/tv.vue'
import Dstvtopup from '../views/dstv-topup.vue'
import Gotvtopup from '../views/gotv-topup.vue'
import Comission from '../views/convert-comission.vue'
import Card from '../views/card.vue'
import Referral from '../views/referral.vue'
import Transfer from '../views/transfer.vue'
import { Store } from "vuex";
//import { Store } from "vuex";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                requiresAuth: false
            }

        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
            meta: {
                requiresAuth: true
            }

        },

        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                requiresAuth: false
            }

        },
        {
            path: '/login',
            name: "Login",
            component: Login,
            meta: {
                requiresAuth: false
            }

        },
        {
            path: '/data',
            name: "Data",
            component: Data,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/airtime',
            name: "Airtime",
            component: Airtime,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mtn-airtime',
            name: "MTN Topup",
            component: Mtnirtime,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/airtel-topup',
            name: "Airtel Topup",
            component: Airtelairtime,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/glo-topup',
            name: "Glo Topup",
            component: Gloairtime,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/9mobile-topup',
            name: "9mobile Topup",
            component: mobileairtime,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/make_payment/:id',
            name: "Make Payment",
            component: Makepayment,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/mtn-data',
            name: "MTN Data",
            component: Mtndata,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/glo-data',
            name: "Glo Data",
            component: Glodata,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/airtel-data',
            name: "Airtel Data",
            component: Airteldata,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/9mobile-data',
            name: "9mobile Data",
            component: Mobiledata,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/tv',
            name: "TV Topup",
            component: Tvtopup,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/dstv-topup',
            name: "DSTV Topup",
            component: Dstvtopup,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/gotv-topup',
            name: "GOTV Topup",
            component: Gotvtopup,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/convert-comission',
            name: "Convert Comission",
            component: Comission,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/card',
            name: "My Virtual Card",
            component: Card,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/referral',
            name: "Referral",
            component: Referral,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/transfer',
            name: "Transfer",
            component: Transfer,
            meta: {
                requiresAuth: true
            }
        },
    ],

});


router.beforeEach((to, from, next) => {

    document.title = `${ to.name}`
    next()

    if (to.name === 'Login') {
        next()
    } else if (to.meta && to.meta.requiresAuth === false) {
        next()
    } else if (Store.getters.user) {
        next()
    } else {
        next({ name: 'Login' })
    }
    // to and from are both route objects. must call `next`.
})
export default router