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
        const nextBtn = this.el.querySelector(".card__next-btn");
        const prevBtn = this.el.querySelector(".card__prev-btn");

        nextBtn?.addEventListener("click", () => this._activateCard((this.index + 1) % this.cards.length));
        prevBtn?.addEventListener("click", () => this._activateCard((this.index - 1 + this.cards.length) % this.cards.length));

        this.cards.forEach((card, i) => {
            card.addEventListener("click", () => this._activateCard(i));
        });
    },

    _activateCard(index) {
        this.index = index;
        const activeCard = this.cards[index];
        
        // Update slider position
        const offset = 136 * (this.cards.length - 1 - index);
        this.wrapper.style.transform = `translateX(${offset}px)`;

        // Update active card styles
        this.cards.forEach(card => card.classList.remove("active"));
        activeCard.classList.add("active");

        // Update active content
        // const title = activeCard.dataset.title;
        // const desc = activeCard.dataset.desc;
        // const link = activeCard.dataset.link;
        // this.activeContent.title.textContent = title;
        // this.activeContent.desc.textContent = desc;
        // this.activeContent.btn.href = link;
    },
});
