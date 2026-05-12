import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component ({
    selector: 'logo',
    template: `<div class="logo-container"> <a routerLink=""><img class="logo-image" ngSrc="../../favicon.ico" width="100" height="50" alt="logo"/></a></div>`,
    imports: [NgOptimizedImage, RouterLink],
    styles: `
    .logo-container{
        padding: 1.5rem 0 0 4rem;
    }
    .logo-image { 
        margin-right: 5rem;
    }`
})

export class Logo {}