import { store } from './store.js';

/* ===============< COMPONENTS >=============== */
//Base
const Base = () => import('./components/Base.vue');

//Users
//No Auth
const Login = () => import('./components/users/Login.vue');
const Register = () => import('./components/users/Register.vue');
//Admin
const Dashboard = () => import('./components/Dashboard.vue');

//GENERALES
//Auth
const Home = () => import('./components/Home.vue');

//No / Auth
const Index = () => import('./components/Index.vue');

//CODE
const CreateCode = () => import('./components/code/CreateCode.vue');
const ShowAllCode = () => import('./components/code/ShowCode.vue');
const MyCode = () => import('./components/users/Profile.vue');
const CodeOther = () => import('./components/users/ProfileOthers.vue');

//Errors
const PermissError = () => import('./components/errors/Permiss.vue')

/* ===============< MIDDLEWARES >=============== */
const noAuth = (to, from, next) => {
    if (store.state.isAuthenticated) {
        next({name:'home'});
    }else{
        next();
    }
}

const auth = (to, from, next) => {
    if (store.state.auth.permissions != 0) {
        next();
    }else{
        next({name:'login'});
    }
}

const admin = (to, from, next) => {
    if (store.state.auth.permissions > 1) {
        next();
    }else{
        next({name:'login'});
    }
}


/* ===============< ROUTES >=============== */
export const routes = [
    {
        //Index
        name:'index',
        path:'/',
        component:Index,
    },
    {
        //All
        path:'/error',
        component:Base,

        children:[
            {
                name:'permissError',
                path:'/permiss',
                component:PermissError,
                props:true,
            },
        ]
    },
    {
        //No Auth
        path:'',
        component:Base,
        beforeEnter: noAuth,

        children:[
            {
                name:'login',
                path:'/login',
                component:Login,
            },
            {
                name:'register',
                path:'/register',
                component:Register,
            },
        ],
    },{
        //Auth
        path:'',
        component:Base,
        beforeEnter: auth,
        children:[
            {
                name:'home',
                path:'/home',
                component:Home,
            },
            {
                name:'create-code',
                path:'/create/code',
                component:CreateCode,
            },
            {
                name:'show-code',
                path:'/show/code/:id',
                component:ShowAllCode,
            },
            {
                name:'my-code',
                path:'/show/myCode/',
                component:MyCode,
            },
            {
                name:'code-others',
                path:'/code/others/:idUsu',
                component:CodeOther,
            },
            
        ]
    },{
        //Admins
        path:'',
        component:Base,
        beforeEnter: admin,
        children:[
            {
                name:'dashboard',
                path:'/dashboard',
                component:Dashboard,
            }
        ]
    },

];