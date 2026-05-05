import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";


@Component ({
    selector: 'logo',
    template: `<div class="logo-container"> <img class="logo-image" ngSrc="../../favicon.ico" width="20" height="20" alt="logo"/></div>`,
    imports: [NgOptimizedImage],
    styles: `
    .logo-container{
        padding: 1.5rem 0 0 4rem;
    }
    .logo-image { 
        margin-right: 5rem;
    }`
})

export class Logo {}