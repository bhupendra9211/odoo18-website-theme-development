/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.CardZoomAnimation = publicWidget.Widget.extend({
    selector: "#custom_slider_solution",
    events: {
        "click .cards-wrapper .customCard": "_activeCard",
        "click .card__prev-btn": "_prevBtnClick",
        "click .card__next-btn": "_nextBtnClick",
    },

    start() {
        console.log("Card Animation Widget initialized!");
        this.index = 0;
        this.n = 0;
        this.i = 0;
        this.t = 0;
        this.animationActive = false;
        this.customCards = [];
        this._px2rem();

        $(".customContainer.solution .cards-wrapper .customCard").each((i, el) => {
            $(el).attr("data-index", i + 1);
            this.customCards.push($(el).clone().removeClass("active").get(0));
        });

        this._setInterval();
        this._zoom(0);
        this._r();
        return this._super(...arguments);
    },

    _r: function(e = 10000) {
        this.animationActive = true;
        clearTimeout(this.a);
        this.a = setTimeout(() => {
            this.animationActive = false;
        }, e);
    },

    _px2rem: function(e) {
        return (e / 16).toFixed(3);
    },

    _zoom(e) {
        console.log("zoom function triggered!");

        let $cards = $(".customContainer.solution .customCard");
        let card = $cards.get(e);

        if (!card) return;

        this.index = parseInt($(card).data("index")) || 0;
        let shift = $cards.filter(".active").index() - $(card).index();

        for (let j = 0; j < shift; j++) {
            $(".customContainer.solution .cards-wrapper").prepend($(this.customCards[this.i]).clone());
            if (--this.i < 0) this.i = this.customCards.length - 1;
        }

        this.n += shift;

        $(".customContainer.solution .customCard.active").css({ transitionDuration: "1s" });
        $(card).css({ transitionDuration: "1s" });

        $cards.removeClass("active");
        $(card).addClass("active");

        $(".customContainer.solution .card__content").removeClass("active");
        $(".customContainer.solution .card__content").eq(this.index - 1).addClass("active");

        gsap.timeline().add(gsap.to(".customContainer.solution .cards-wrapper", 1, {
            x: this._px2rem(136 * this.n) + "rem"
        }));
    },

    _activeCard(event) {
        let card = $(event.currentTarget);
        if (card.hasClass("active")) {
            let link = card.find(".card__btn").attr("href");
            if (link) {
                window.location.href = link;
            }
        }
        this._zoom(card.index());
    },

    _nextBtnClick: function(e) {
        this._r();
        if (--this.n < 0) {
            this.n = 0;
        } else {
            gsap.timeline().add(gsap.to(".customContainer.solution .cards-wrapper", 1, {
                x: this._px2rem(136 * this.n) + "rem"
            }));
           
            this.t = $(".customContainer.solution .customCard.active").index() + 1;
            this.index = parseInt($(".customContainer.solution .customCard.active").data("index"));
            if (this.index === 6) this.index = 0;
            
            $(".customContainer.solution .customCard").removeClass("active");
            $(".customContainer.solution .customCard").eq(this.t).addClass("active");

            $(".customContainer.solution .card__content").removeClass("active");
            $(".customContainer.solution .card__content").eq(this.index).addClass("active");
        }
      
    },

    _prevBtnClick: function(e) {
        console.log("Zoom is getting triggered!");
        this._r();
        this._zoom($(".customContainer.solution .customCard.active").index() - 1);

       
    },

    _setInterval() {
        setInterval(() => {
            if (!this.animationActive) {
                let activeIndex = $(".customContainer.solution .customCard.active").index();
                if (activeIndex !== -1) {
                    this._zoom(activeIndex - 1);
                }
            }
        }, 5000);
    },
});



