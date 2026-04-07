import { ResolveFn, Routes } from '@angular/router';
import { HomePage } from './components/home';
import { Contact } from './components/contact';
import { About } from './components/about';
import { Products } from './components/catalog/products';

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
];
