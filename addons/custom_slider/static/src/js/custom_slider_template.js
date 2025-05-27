/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.CardZoomAnimation = publicWidget.Widget.extend({
    selector: "#custom_slider_solution",
    events: {
        "click .cards-wrapper .customCard": "_onCardClick",
        "click .card__prev-btn": "_onPrevClick",
        "click .card__next-btn": "_onNextClick",
    },

    start() {
        console.log("Card Animation Widget initialized!");

        this.currentIndex = 0;
        this.animationLock = false;

        this.$cards = this.$(".cards-wrapper .customCard");
        this.$contents = this.$(".card__content");

        this.$cards.each((i, el) => {
            $(el).attr("data-index", i);
        });

        this._zoomTo(0);
        this._startAutoRotate();
        this._resetTimer();

        return this._super(...arguments);
    },

    _resetTimer(duration = 10000) {
        this.animationLock = true;
        clearTimeout(this._animationTimeout);
        this._animationTimeout = setTimeout(() => {
            this.animationLock = false;
        }, duration);
    },

    _zoomTo(index) {
        const total = this.$cards.length;

        if (index < 0) index = total - 1;
        if (index >= total) index = 0;

        this.currentIndex = index;

        this.$cards.removeClass("active");
        this.$cards.eq(index).addClass("active");

        this.$contents.removeClass("active");
        this.$contents.eq(index).addClass("active");
    },

    _onCardClick(event) {
        const $card = $(event.currentTarget);
        const index = parseInt($card.data("index"));

        if ($card.hasClass("active")) {
            const link = $card.find(".card__btn").attr("href");
            if (link) {
                window.location.href = link;
                return;
            }
        }

        this._zoomTo(index);
        this._resetTimer();
    },

    _onNextClick() {
        this._zoomTo(this.currentIndex + 1);
        this._resetTimer();
    },

    _onPrevClick() {
        this._zoomTo(this.currentIndex - 1);
        this._resetTimer();
    },

    _startAutoRotate() {
        this._interval = setInterval(() => {
            if (!this.animationLock) {
                this._zoomTo(this.currentIndex + 1);
            }
        }, 5000);
    },
});
