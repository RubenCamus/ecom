import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";


@Component ({
    selector: 'logo',
    template: `<img class="logo-image" ngSrc="../../favicon.ico" width="20" height="20" alt="logo"/>`,
    imports: [NgOptimizedImage],
    styles: `
    .logo-image { 
        margin-right: 5rem;
    }`
})

export class Logo {}