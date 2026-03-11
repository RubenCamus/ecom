import { Component,} from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { NavList } from "./navList";
import { Logo } from "./logo";

@Component({
    selector: 'nav-bar',
    template: `<nav><logo/> <nav-list/></nav>`,
    imports: [NavList, Logo],
    styles: `nav { 
        display: flex;
        padding: 10px 10px;
        margin-left: 10vh;
        width: fit-content;
        background-color: rgb(145, 176, 201);
        border-radius: 5px;
    }`
})

export class NavBar {}