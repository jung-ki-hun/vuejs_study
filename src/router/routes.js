export default [
    {
        path: '/',
        name: 'HellloWord',
        component: () => import('../components/HelloWorld'),
    },
    {
        path: '/pages1',
        name: 'HellloWord1_1',
        component: () => import('../components/HelloWorld1_1'),
    },
    {
        path: '/pages2',
        name: 'HellloWord2',
        component: () => import('../components/HelloWorld2'),
    },
    {
        path: '/pages3',
        name: 'HellloWord3',
        component: () => import('../components/HelloWorld3'),
    },
    {
        path:'*',
        redirect:"/"
    }

]
