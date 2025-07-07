import { Component, HostListener } from "@angular/core";

@Component({
    selector: 'headerApp',
    templateUrl: 'header.html',
    styleUrl: 'header.css',
})
export class Header {
    scrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const screenHeight = window.innerHeight;
        this.scrolled = window.scrollY > screenHeight - 120;
    }
}