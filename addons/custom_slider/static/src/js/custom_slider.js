/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.SolutionSlider = publicWidget.Widget.extend({
    selector: ".customContainer.solution",
    start() {
        this.index = 5;
        this.cards = this.el.querySelectorAll(".customCard");
        this.contents = this.el.querySelectorAll(".card__content");
        this.wrapper = this.el.querySelector(".cards-wrapper");

        this._bindEvents();
        this._activateCard(this.index);

        return this._super(...arguments);
    },

    _bindEvents() {
        this.el.querySelector(".card__next-btn")?.addEventListener("click", () => {
            if (this.index < this.cards.length - 1) this._activateCard(this.index + 1);
        });
        this.el.querySelector(".card__prev-btn")?.addEventListener("click", () => {
            if (this.index > 0) this._activateCard(this.index - 1);
        });

        this.cards.forEach((card, i) => {
            card.addEventListener("click", () => {
                this._activateCard(i);
            });
        });
    },

    _activateCard(index) {
        this.index = index;
        this.cards.forEach(card => card.classList.remove("active"));
        this.contents.forEach(content => content.classList.remove("active"));
        this.cards[index].classList.add("active");
        this.contents[index].classList.add("active");

        const offset = 136 * (5 - index);
        this.wrapper.style.transform = `translateX(${offset}px)`;
    },
});
