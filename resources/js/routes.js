
//Base
const Base = () => import('./components/Base.vue');

//Users
//No Auth
const Login = () => import('./components/users/Login.vue');
const Register = () => import('./components/users/Register.vue');
//Admin
const Dashboard = () => import('./components/users/Dashboard.vue');

//GENERALES
//Auth
const Home = () => import('./components/Home.vue');

//No / Auth
const Index = () => import('./components/Index.vue'


)
export const routes = [
    //No Auth (auth -> redirect to home)
    {
        path:'',
        component:Base,
        beforeEnter: (to, from, next) => {
            axios.get('/api/athenticated')
            .then((e)=>{
                if (e.data.permissions != 0) return next({name:'home'});
                else next();
            })
            .catch( e => next() );
        },

        children:[
            {
                name:'index',
                path:'/',
                component:Index,
            },
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
    },

    //Auth (no auth -> redirect to login)
    {
        path:'',
        component:Base,
        beforeEnter: (to, from, next) => {
            console.log("Voy a entrar bien")
            axios.get('/api/athenticated')
            .then((e)=>{
                if(e.data.permissions != 0) next()
                else return next({name:'login'});
            })
            .catch((e)=> next({name:'login'}))
        },
        children:[
            {
                name:'home',
                path:'/home',
                component:Home,
            },
            
        ]
    },

    {
        name:'dashboard',
        path:'/dashboard',
        component:Dashboard,
    },

];
