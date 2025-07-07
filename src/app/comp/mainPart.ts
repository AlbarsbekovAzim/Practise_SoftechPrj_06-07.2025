import { CommonModule } from "@angular/common";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'mainPartApp',
    imports: [ CommonModule, FormsModule ],
    templateUrl: 'mainPart.html',
    styleUrl: 'mainPart.css',
})
export class MainPart {
    @Output() hovered = new EventEmitter<boolean>();

    hover(state: boolean) {
        this.hovered.emit(state);
    }


    images = [
        // 'assets/img1.jpg',
        // 'assets/img2.jpg',
        // 'assets/img3.jpg',
        // 'assets/img4.jpg'
        'bannery-velosipedy-new-size-1046x570.jpg',
        'new-size-uzspace-banner-1046x570.jpg'
    ];

    currentIndex = 0;
    intervalId: any;

    ngOnInit() {
        this.startAutoScroll();
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }

    getTransform(): string {
        return `translateX(-${this.currentIndex * 100}%)`;
    }

    selectImage(index: number) {
        this.currentIndex = index;
        this.resetAutoScroll();
    }

    startAutoScroll() {
        this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 3000);
    }

    resetAutoScroll() {
        clearInterval(this.intervalId);
        this.startAutoScroll();
    }

    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.resetAutoScroll();
    }
      
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.resetAutoScroll();
    }

    productsPromotions = [
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        },
        {
            img: '1-200x200.jpg',
            name: 'Беспроводная колонка Hoco HC17',
            currPrice: 800,
            prevPrice: 1200,
            discount: 33,
            amount: 1
        }
    ];
      
    changePrice(index: number, delta: number) {

        const product = this.productsPromotions[index];
        const newAmount = product.amount + delta;
        if (newAmount > 0) {
            product.amount = newAmount;
        }
    }
}