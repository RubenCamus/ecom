import { ResolveFn, Routes } from '@angular/router';
import { HomePage } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Products } from './products/catalog/products';
import { ProductPage } from './products/product-page/product-page';
import { Login } from './login/login';
const titleResolver:  ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: titleResolver,
    },
    {
        path: 'contact',
        component: Contact,
        title: titleResolver,
    },
    {
        path: 'about',
        component: About,
        title: titleResolver,
    },
    {
        path: 'products',
        component: Products,
        title: titleResolver,
    },
    {
        path: 'product-page',
        component: ProductPage,
        title: titleResolver,
    },
    {
        path: 'login',
        component: Login,
        title: titleResolver,
    }
];
