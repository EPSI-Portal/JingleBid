import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebase/firebaseInit';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/views/Home.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/Login.vue'),
		},
		{
			path: '/register',
			name: 'Register',
			component: () => import('@/views/Register.vue'),
		},
		{
			path: '/products',
			name: 'Products',
			component: () => import('@/views/Products.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/bid/:id',
			name: 'Product',
			component: () => import('@/views/Product.vue'),
			props: true,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/profile',
			name: 'Profile',
			component: () => import('@/views/Profile.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/account',
			name: 'Account',
			component: () => import('@/views/Account.vue'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/createBid',
			name: 'CreateBid',
			component: () => import('@/views/CreateBid.vue'),
			meta: {
				requiresAuth: true,
			},
		},
	],
});


router.beforeEach((to, from, next) => {
	const isAuthenticated = auth.currentUser;

	if (to.meta.requiresAuth && !isAuthenticated) {
		next('/login');
	} else {
		next();
	}
});

export default router;
