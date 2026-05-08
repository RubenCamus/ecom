import { Component } from "@angular/core";
import {RouterOutlet} from '@angular/router'

@Component ({
    selector: 'auth-layout',
    template: `
    <router-outlet/>`,
    styleUrl: './authLayout.css',
    imports: [RouterOutlet]
})

export class AuthLayout {

}