/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.InfiniteSlider = publicWidget.Widget.extend({
    selector: ".custom-slider-snippet",

    start() {
        this.container = this.el.querySelector(".slider-container");
        this.track = this.el.querySelector(".slider-track");
        this.slides = this.el.querySelectorAll(".slide");

        if (!this.track || this.slides.length === 0) return;

        this._cloneSlides();
        this._setInitialState();
        this._bindEvents();

        return this._super(...arguments);
    },

    _cloneSlides() {
        const firstClone = this.slides[0].cloneNode(true);
        const lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        firstClone.id = "first-clone";
        lastClone.id = "last-clone";

        this.track.appendChild(firstClone);
        this.track.insertBefore(lastClone, this.slides[0]);

        // Refresh slides list with clones
        this.slides = this.el.querySelectorAll(".slide");
    },

    _setInitialState() {
        this.slideWidth = this.slides[0].clientWidth;
        this.counter = 1;
        this.track.style.transform = `translateX(-${this.slideWidth * this.counter}px)`;
    },

    _bindEvents() {
        const nextBtn = this.el.querySelector(".slider-next");
        const prevBtn = this.el.querySelector(".slider-prev");

        nextBtn?.addEventListener("click", () => this._nextSlide());
        prevBtn?.addEventListener("click", () => this._prevSlide());

        this.track.addEventListener("transitionend", () => this._handleTransitionEnd());

        window.addEventListener("resize", () => this._onResize());
    },

    _nextSlide() {
        if (this.counter >= this.slides.length - 1) return;
        this.counter++;
        this._slideToCurrent();
    },

    _prevSlide() {
        if (this.counter <= 0) return;
        this.counter--;
        this._slideToCurrent();
    },

    _slideToCurrent() {
        this.track.style.transition = "transform 0.5s ease-in-out";
        this.track.style.transform = `translateX(-${this.slideWidth * this.counter}px)`;
    },

    _handleTransitionEnd() {
        if (this.slides[this.counter].id === "first-clone") {
            this.track.style.transition = "none";
            this.counter = 1;
            this.track.style.transform = `translateX(-${this.slideWidth * this.counter}px)`;
        } else if (this.slides[this.counter].id === "last-clone") {
            this.track.style.transition = "none";
            this.counter = this.slides.length - 2;
            this.track.style.transform = `translateX(-${this.slideWidth * this.counter}px)`;
        }
    },

    _onResize() {
        this.slideWidth = this.slides[0].clientWidth;
        this.track.style.transition = "none";
        this.track.style.transform = `translateX(-${this.slideWidth * this.counter}px)`;
    },
});
