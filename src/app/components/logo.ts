import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";


@Component ({
    selector: 'logo',
    template: `<img ngSrc="../../favicon.ico" width="20" height="20" alt="logo"/>`,
    imports: [NgOptimizedImage],
})

export class Logo {}