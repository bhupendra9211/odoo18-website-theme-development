/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.CustomStoriesSlider = publicWidget.Widget.extend({
    selector: "#custom_slider_stories",

    start() {
        this.slides = this.el.querySelectorAll(".wrapper-bg");
        this.pages = this.el.querySelectorAll(".page");
        this.images = this.el.querySelectorAll(".card__img");
        this.contents = this.el.querySelectorAll(".card__content");

        this.currentIndex = 0;
        this.zIndexCounter = 1;
        this.transitionDuration = 600;
        this.autoSlideDelay = 5000;

        this._goToSlide = this._goToSlide.bind(this);
        this._startAutoSlide = this._startAutoSlide.bind(this);
        this._resetAutoSlide = this._resetAutoSlide.bind(this);

        this._bindEvents();
        this._startAutoSlide();
        return this._super(...arguments);
    },

    _bindEvents() {
        this.pages.forEach((page, index) => {
            page.addEventListener("click", () => {
                this._resetAutoSlide();
                this._goToSlide(index);
            });
        });
    },

    _goToSlide(index) {
        if (index === this.currentIndex) return;

        this.pages.forEach(p => p.classList.remove("active"));
        this.pages[index].classList.add("active");

        const newSlide = this.slides[index];
        const newImage = this.images[index];
        const newContent = this.contents[index];
        const prevContent = this.contents[this.currentIndex];

        // Prepare incoming slide and image
        newSlide.style.transition = "none";
        newSlide.style.transform = "translateY(-100%)";
        newSlide.style.zIndex = ++this.zIndexCounter;

        newImage.style.transition = "none";
        newImage.style.transform = "translateY(-100%)";
        newImage.style.zIndex = ++this.zIndexCounter;

        void newSlide.offsetWidth; // reflow
        void newImage.offsetWidth;

        // Animate in
        newSlide.style.transition = "transform 1s ease";
        newSlide.classList.add("active");
        newSlide.style.transform = "translateY(0%)";

        newImage.style.transition = "transform 1s ease";
        newImage.classList.add("active");
        newImage.style.transform = "translateY(0%)";

        prevContent.classList.remove("active");
        newContent.classList.add("active");

        this.currentIndex = index;
    },

    _startAutoSlide() {
        this.autoSlide = setInterval(() => {
            const nextIndex = (this.currentIndex + 1) % this.slides.length;
            this._goToSlide(nextIndex);
        }, this.autoSlideDelay);
    },

    _resetAutoSlide() {
        clearInterval(this.autoSlide);
        this._startAutoSlide();
    },

    destroy() {
        clearInterval(this.autoSlide);
        return this._super(...arguments);
    }
});
