import { store } from './store.js';
import i18n from './i18n';



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
const SearchResults = () => import('./components/SearchResults.vue');

//No / Auth
const Index = () => import('./components/Index.vue');

//CODE
const CreateCode = () => import('./components/code/CreateCode.vue');
const ShowAllCode = () => import('./components/code/ShowCode.vue');
const UpdateCode = () => import('./components/code/UpdateCode.vue');
const MyCode = () => import('./components/users/Profile.vue');
const CodeOther = () => import('./components/users/ProfileOthers.vue');

//Errors
const PermissError = () => import('./components/errors/Permiss.vue')

/* ===============< MIDDLEWARES >=============== */
const noAuth = (to, from, next) => {
    if (store.state.isAuthenticated) {
        next(`/${i18n.locale}/home`);
    }else{
        next();
    }
}

const auth = (to, from, next) => {
    if (store.state.auth.permissions != 0) {
        next();
    }else{
        next(`/${i18n.locale}/login`);
    }
}

const admin = (to, from, next) => {
    if (store.state.auth.permissions > 1) {
        next();
    }else{
        next(`/${i18n.locale}/login`);
    }
}


/* ===============< ROUTES >=============== */
export const routes = [
    {
        //All
        path:'',
        component:Base,

        children:[
            {
                path: '/',
                redirect: `/${i18n.locale}`
            },
            {
                name:'permissError',
                path:'/:lang/error/permiss',
                component:PermissError,
                props:true,
            },
            {
                name:'home',
                path:'/:lang/home',
                component:Home,
            },
        ]
    },
    {
        //No Auth
        path:'/:lang',
        component:Base,
        beforeEnter: noAuth,

        children:[
            {
                //Index
                name:'index',
                path:'',
                component:Index,
            },
            {
                name:'search',
                path:'search/:name',
                component:SearchResults,
            },
            {
                name:'login',
                path:'login',
                component:Login,
            },
            {
                name:'register',
                path:'register',
                component:Register,
            },
        ],
    },{
        //Auth
        path:'/:lang',
        component:Base,
        beforeEnter: auth,
        children:[
            {
                name:'create-code',
                path:'create/code',
                component:CreateCode,
            },
            {
                name:'show-code',
                path:'show/code/:id',
                component:ShowAllCode,
            },
            {
                name:'my-code',
                path:'show/profile/',
                component:MyCode,
            },
            {
                name:'code-others',
                path:'code/profile/:idUsu',
                component:CodeOther,
            },
            {
                name:'update-code',
                path:'code/update/:id',
                component:UpdateCode,
            },
            
        ]
    },{
        //Admins
        path:'/:lang',
        component:Base,
        beforeEnter: admin,
        children:[
            {
                name:'dashboard',
                path:'dashboard',
                component:Dashboard,
            }
        ]
    },

];

