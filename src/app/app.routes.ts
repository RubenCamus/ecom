import { ResolveFn, Routes } from '@angular/router';
import { HomePage } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Products } from './products/catalog/products';
import { ProductPage } from './products/product-page/product-page';
import { Login } from './login/login';
import { SignUp } from './login/signup';
import { MainLayout } from './layouts/mainLayout';
import { AuthLayout } from './layouts/authLayout';
import { ShampooCategory } from './categories/shampoo-category';
import { CategoriesLayout } from './layouts/categoriesLayout';
import { CreamsCategory } from './categories/creams-category/creams-category';
import { LoginForm } from './login-form/login-form';
const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'about',
        component: About,
        title: titleResolver,
      },
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
    ],
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: Login,
        title: titleResolver,
      },
      {
        path: 'signup',
        component: SignUp,
        title: titleResolver,
      },
    ],
  },
  {
    path: 'categories',
    component: MainLayout,
    children: [
      {
        path: 'shampoo',
        component: ShampooCategory,
        title: titleResolver,
      },
      {
        path: 'creams',
        component: CreamsCategory,
        title: titleResolver,
      },
    ],
  },
  {
    path: 'product-page',
    component: ProductPage,
    title: titleResolver,
  },
];
