function NavClick() {
    $(".nav-click").on("click", function () {
        return $(".nav-click").hasClass("active") ? ($(".nav").scrollTop(0), requestAnimationFrame(Collapse)) : ($(".nav").scrollTop(0), requestAnimationFrame(Expand)), !1
    }), $(".subscribe").on("click", function () {
        return document.getElementById("register").reset(), $(".holder").removeClass("hide"), $("html, body").addClass("no-scroll"), $(".register-form").scrollTop(0), $(".subscribe").addClass("active"), $(".register-form").addClass("show"), $(".show-box-pic").removeClass("showup"), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".youtube-video iframe").length && $(".pause-button").trigger("click"), $(".wave-ani").hasClass("in-play") && $(".stop-svg").trigger("click"), $(".loadx").length && $(".loadx").remove(), !1
    }), $(".close, .register-form > span").on("click", function () {
        return $("html, body").removeClass("no-scroll"), $(".register-form").scrollTop(0), $(".subscribe").removeClass("active"), $(".register-form").removeClass("show"), $(".register-form .title-main").removeClass("show"), $(".show-text .wave-ani").length && $(".play-svg").trigger("click"), $(".youtube-video iframe").length && $('.group-central[data-name="video-home"]').hasClass("show-text") && ($(".nav-click").hasClass("active") ? $(".pause-button").trigger("click") : $(".play-button").trigger("click")), $(".loadx").length && $(".loadx").remove(), !1
    }), $(".overlay-menu").on("click", function () {
        $(".nav-click").hasClass("active") && $(".nav-click").trigger("click")
    })
}

function BoxSlide() {
    function e() {
        setTimeout(function () {
            TweenLite.set($(".group-central").not($(".group-central")[l]), {y: "100%"}), i = !1
        }, 1e3)
    }

    function t() {
        i = !0, TweenLite.set($(".group-central"), {zIndex: ""}), $(".footer").removeClass("end"), $(".wheel").addClass("show"), $(".go-top, .copyright").removeClass("show"), $(".box-nav li").removeClass("current"), $(".box-nav").removeClass("blue"), clearTimeout(timer), $(".dot-num").removeClass("show"), $(".num").removeClass("fadeinup"), $(".youtube-video iframe").length && ($(".pause-button").trigger("click"), clearInterval(timer)), $(".logo").removeClass("out"), $(".logo, .hotline, .nav-click").removeClass("brown"), $(".map-svg").removeClass("show"), $(".wave-ani").hasClass("in-play") && $(".stop-svg").trigger("click"), $("#about-page").length && requestAnimationFrame(SvgCollapse), TweenLite.fromTo($(".group-central")[l], .8, {zIndex: 2}, {
            y: "0%", ease: Quad.easeOut, onComplete: function () {
                if ($("div").removeClass("sunlight lighting rotatenew"), $(".group-central").removeClass("show-text"), $(".group-central").eq(l).addClass("show-text"), $(".box-nav li").eq(l).addClass("current"), $(".grid-item-bg canvas").removeClass("show"), $(".group-central .thumb-image").length && CancelMove(), $(".show-text .wave-ani").length && $(".play-svg").trigger("click"), $('.group-central[data-name="home-banner"]').hasClass("show-text") ? ($(".logo").addClass("scale"), $(".logo, .hotline, .nav-click").addClass("white")) : ($(".logo").removeClass("scale"), $(".logo, .hotline, .nav-click").removeClass("white")), ($('.group-central[data-name="home-intro"]').hasClass("show-text") || $('.group-central[data-name="home-library"]').hasClass("show-text")) && $(".logo, .hotline, .nav-click").addClass("brown"), $(".group-central.show-text .slide-pic").length && setTimeout(function () {
                    $(".slide-pic").trigger("next.btq.slidebox", 1500)
                }, 800), $('.group-central[data-name="home-location"]').hasClass("show-text") && setTimeout(function () {
                    $(".map-svg").addClass("show")
                }, 800), $('.group-central[data-name="home-contact"]').hasClass("show-text") && $(".logo").addClass("out"), ($('.group-central[data-name="home-facilities"]').hasClass("show-text") || $('.group-central[data-name="home-contact"]').hasClass("show-text")) && $(".box-nav").addClass("blue"), $("#apartment-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? $(".fix-footer, .wheel, .go-top").addClass("brown") : $(".fix-footer, .wheel, .go-top").removeClass("brown")), $(".group-central.show-text .thumb-image").length && MoveBackground(), $(".group-central.show-text .grid-item-bg").length && requestAnimationFrame(BgEffect), $(".youtube-video iframe").length && $('.group-central[data-name="video-home"]').hasClass("show-text") && (clearInterval(timer), timer = setInterval(function () {
                    $(".play-button").trigger("click")
                }, 800)), $("#facilities-page").length && $(".group-central").hasClass("show-text") && $(".show-text .all-dot-top").children().each(function (e) {
                    var t = $(this);
                    timer = setTimeout(function () {
                        $(t).addClass("show")
                    }, 100 * (e + 1))
                }), $("#facilities-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? ($(".fix-footer, .wheel, .go-top").removeClass("brown").addClass("blue"), $(".box-nav").addClass("blue")) : ($(".fix-footer, .wheel, .go-top").removeClass("blue").addClass("brown"), $(".box-nav").removeClass("blue"))), $("#about-page").length && $(".group-central").hasClass("show-text") && requestAnimationFrame(SvgExpand), $("#library-page").length && $(".group-central").hasClass("show-text") && AniTitle(), $(".group-central:last-child").hasClass("show-text") && ($(".wheel").removeClass("show"), $(".go-top").addClass("show"), $(".copyright").addClass("show")), $("#about-page, #facilities-page, #apartment-page, #library-page").length) {
                    var t = ($(".group-central.show-text").attr("data-name"), $(".box-nav li, .sub-nav li").eq(l).find("a").attr("href")),
                        a = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-title"),
                        o = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-keyword"),
                        i = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-description"),
                        s = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-page");
                    changeUrl(t, a, i, o, s, a, i)
                }
                e()
            }
        })
    }

    function a() {
        i = !0, TweenLite.set($(".group-central"), {zIndex: ""}), $(".footer").removeClass("end"), $(".wheel").addClass("show"), $(".go-top, .copyright").removeClass("show"), $(".box-nav li").removeClass("current"), $(".box-nav").removeClass("blue"), clearTimeout(timer), $(".dot-num").removeClass("show"), $(".num").removeClass("fadeinup"), $(".youtube-video iframe").length && ($(".pause-button").trigger("click"), clearInterval(timer)), $(".logo").removeClass("out"), $(".logo, .hotline, .nav-click").removeClass("brown"), $(".map-svg").removeClass("show"), $(".wave-ani").hasClass("in-play") && $(".stop-svg").trigger("click"), $("#about-page").length && requestAnimationFrame(SvgCollapse), TweenLite.fromTo($(".group-central")[l], .8, {
            y: "-100%",
            zIndex: 2
        }, {
            y: "0%", ease: Quad.easeOut, onComplete: function () {
                if ($("div").removeClass("sunlight lighting rotatenew"), $(".group-central").removeClass("show-text"), $(".group-central").eq(l).addClass("show-text"), $(".box-nav li").eq(l).addClass("current"), $(".grid-item-bg canvas").removeClass("show"), $(".group-central .thumb-image").length && CancelMove(), $(".show-text .wave-ani").length && $(".play-svg").trigger("click"), $('.group-central[data-name="home-banner"]').hasClass("show-text") ? ($(".logo").addClass("scale"), $(".logo, .hotline, .nav-click").addClass("white")) : ($(".logo").removeClass("scale"), $(".logo, .hotline, .nav-click").removeClass("white")), ($('.group-central[data-name="home-intro"]').hasClass("show-text") || $('.group-central[data-name="home-library"]').hasClass("show-text")) && $(".logo, .hotline, .nav-click").addClass("brown"), $(".group-central.show-text .slide-pic").length && setTimeout(function () {
                    $(".slide-pic").trigger("next.btq.slidebox", 1500)
                }, 800), $('.group-central[data-name="home-location"]').hasClass("show-text") && setTimeout(function () {
                    $(".map-svg").addClass("show")
                }, 800), $('.group-central[data-name="home-contact"]').hasClass("show-text") && $(".logo").addClass("out"), ($('.group-central[data-name="home-facilities"]').hasClass("show-text") || $('.group-central[data-name="home-contact"]').hasClass("show-text")) && $(".box-nav").addClass("blue"), $("#apartment-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? $(".fix-footer, .wheel, .go-top").addClass("brown") : $(".fix-footer, .wheel, .go-top").removeClass("brown")), $(".group-central.show-text .thumb-image").length && MoveBackground(), $(".group-central.show-text .grid-item-bg").length && requestAnimationFrame(BgEffect), $(".youtube-video iframe").length && $('.group-central[data-name="video-home"]').hasClass("show-text") && (clearInterval(timer), timer = setInterval(function () {
                    $(".play-button").trigger("click")
                }, 800)), $("#facilities-page").length && $(".group-central").hasClass("show-text") && $(".show-text .all-dot-top").children().each(function (e) {
                    var t = $(this);
                    timer = setTimeout(function () {
                        $(t).addClass("show")
                    }, 100 * (e + 1))
                }), $("#facilities-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? ($(".fix-footer, .wheel, .go-top").removeClass("brown").addClass("blue"), $(".box-nav").addClass("blue")) : ($(".fix-footer, .wheel, .go-top").removeClass("blue").addClass("brown"), $(".box-nav").removeClass("blue"))), $("#about-page").length && $(".group-central").hasClass("show-text") && requestAnimationFrame(SvgExpand), $("#library-page").length && $(".group-central").hasClass("show-text") && AniTitle(), $(".group-central:last-child").hasClass("show-text") && ($(".wheel").removeClass("show"), $(".go-top").addClass("show"), $(".copyright").addClass("show")), $("#about-page, #facilities-page, #apartment-page, #library-page").length) {
                    var t = ($(".group-central.show-text").attr("data-name"), $(".box-nav li, .sub-nav li").eq(l).find("a").attr("href")),
                        a = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-title"),
                        o = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-keyword"),
                        i = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-description"),
                        s = $(".box-nav li, .sub-nav li").eq(l).find("a").attr("data-page");
                    changeUrl(t, a, i, o, s, a, i)
                }
                e()
            }
        })
    }

    var o = $(".group-central").length, l = $(".group-central").index(), i = !1;
    TweenLite.set($(".group-central").not($(".group-central")[l]), {y: "100%"});
    $(window).width() > 1100 && !$("body").hasClass("fullscreen") && ($(".box-slider:not(.single)").on("mousewheel", function (e) {
        var s;
        i === !1 && (s = function () {
            var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY || -e.detail));
            return t
        }()), $(window).width() > 1100 && !$("body").hasClass("fullscreen") && (null != $(".group-central")[l] && 1 === parseInt(s) ? (l >= o - 1 ? l = 0 : l++, t()) : null != $(".group-central")[l] && -1 === parseInt(s) && (0 >= l ? l = o - 1 : l--, a()))
    }), $(".box-slider:not(.single)").on("swipeup", function () {
        doTouch && (doTouch = !1, $(window).width() > 1100 && !$("body").hasClass("fullscreen") && ($(".box-nav li.current").next().trigger("click"), setTimeout(turnWheelTouch, 500)))
    }).on("swipedown", function () {
        doTouch && (doTouch = !1, $(window).width() > 1100 && !$("body").hasClass("fullscreen") && ($(".box-nav li.current").prev().trigger("click"), setTimeout(turnWheelTouch, 500)))
    })), $(".box-nav li").on("click", function () {
        var e = $(this).index();
        return i ? !1 : (!i && e > l ? (l = e, t()) : !i && l > e && (l = e, a()), !1)
    }), setTimeout(function () {
        $(".group-central:first-child").addClass("show-text"), $(".box-nav li:first-child").addClass("current"), $('.group-central[data-name="home-banner"]').hasClass("show-text") && ($(".logo").addClass("scale"), $(".logo, .hotline, .nav-click").addClass("white")), $('.group-central[data-name="contact"]').hasClass("show-text") && $(".logo").addClass("out")
    }, 500), setTimeout(function () {
        $(".show-text .wave-ani").length && $(".play-svg").trigger("click"), $("#about-page").length && $(".group-central").hasClass("show-text") && requestAnimationFrame(SvgExpand), $("#library-page").length && $(".group-central").hasClass("show-text") && AniTitle(), $("#location-page").length && $(".group-central").hasClass("show-text") && $(".map-svg").addClass("show"), $("#facilities-page").length && $(".group-central").hasClass("show-text") && $(".show-text .all-dot-top").children().each(function (e) {
            var t = $(this);
            timer = setTimeout(function () {
                $(t).addClass("show")
            }, 100 * (e + 1))
        }), $("#facilities-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? ($(".fix-footer, .wheel, .go-top").removeClass("brown").addClass("blue"), $(".box-nav").addClass("blue")) : ($(".fix-footer, .wheel, .go-top").removeClass("blue").addClass("brown"), $(".box-nav").removeClass("blue"))), $("#apartment-page").length && ($(".group-central:nth-child(odd)").hasClass("show-text") ? $(".fix-footer, .wheel, .go-top").addClass("brown") : $(".fix-footer, .wheel, .go-top").removeClass("brown"))
    }, 2e3)
}

function SlidePicture() {
    $(".slide-library").length && $(".slide-library").each(function (e, t) {
        $(t).on("initialized.btq.slidebox", function () {
            $(".slide-item.active").addClass("hover"), AniTitle()
        }).BTQSlider({
            items: 1,
            margin: 50,
            smartSpeed: 800,
            mouseDrag: !1,
            loop: !0,
            nav: !0,
            dots: !0,
            center: !0,
            dotNum: !0,
            responsiveRefreshRate: 150,
            responsive: {
                0: {nav: !1, margin: 5, smartSpeed: 600},
                600: {nav: !1, margin: 10, smartSpeed: 600},
                1e3: {nav: !1, margin: 30, smartSpeed: 600},
                1100: {nav: !0, margin: 50}
            }
        }), $(t).on("translate.btq.slidebox", function () {
            $(".slide-item").removeClass("hover"), $(window).width() > 1100 && (clearTimeout(timer), $(".title-pic h3 span").removeClass("move"))
        }), $(t).on("translated.btq.slidebox", function () {
            $(".slide-item.active").addClass("hover"), AniTitle()
        }), $(".slide-item:not(.active)").on("click", function (e) {
            e.preventDefault(), $(window).width() > 1100 && $(t).trigger("next.btq.slidebox")
        })
    }), $(".slide-pic").length && $(".slide-pic").each(function (e, t) {
        $(t).BTQSlider({margin: 0, smartSpeed: 600, items: 1, loop: !0, nav: !0, dots: !0, responsiveRefreshRate: 150})
    })
}

function VideoLoad(e, t) {
    $.ajax({
        url: e, cache: !1, success: function (e) {
            function a() {
                s.play()
            }

            function o() {
                s.pause()
            }

            function l() {
                n = new YT.Player("VYT", {events: {onReady: i}})
            }

            function i(e) {
                (1 == TouchLenght || isTouchDevice) && (e.target.mute(), e.target.playVideo())
            }

            $(".allvideo").append(e);
            $("#view-video").length;
            if ($("#view-video").length) var s = document.getElementById("view-video");
            if (void 0 !== t) {
                $(".video-wrap").append(t);
                var n;
                $(".loadx").fadeOut(500, "linear", function () {
                    l(), $(".loadx").remove()
                })
            } else $(".loadx").fadeOut(400, "linear", function () {
                $("#view-video").length && a(), $(".loadx").remove()
            });
            $(".close-video").addClass("show"), $(".close-video").on("click", function () {
                $("#view-video").length && o(), $(".allvideo").fadeOut(500, "linear", function () {
                    if ($(".overlay-dark, .close-video").removeClass("show"), $(".allvideo .video-list").remove(), $("html, body").removeClass("no-scroll"), $(".to-scrollV").length) {
                        var e = $(".to-scrollV").offset().top - 120;
                        $(window).width() <= 1100 && $("html, body").scrollTop(e), $(".to-scrollV").removeClass("to-scrollV")
                    }
                })
            })
        }
    })
}

function AlbumLoad(e) {
    $.ajax({
        url: e, cache: !1, success: function (e) {
            function t(e) {
                var t = e.item.Count - 1, a = e.item.index;
                0 > a && (a = t), a > t && (a = 0), $(".thumbs").find(".slide-item").removeClass("current").eq(a).addClass("current");
                var o = $(".thumbs").find(".slide-item.active").length - 1,
                    l = $(".thumbs").find(".slide-item.active").first().index(),
                    i = $(".thumbs").find(".slide-item.active").last().index();
                a >= i - 1 && $(".thumbs").data("btq.slidebox").to(a, 300, !0), l >= a && $(".thumbs").data("btq.slidebox").to(a - o, 300, !0)
            }

            function a() {
                clearTimeout(timex), $(".pic-name").removeClass("move"), $(".pic-name h3").children().children().removeClass("move"), $(".selected").find(".pic-name").addClass("move"), $(".move h3").children().children().each(function (e) {
                    var t = $(this);
                    setTimeout(function () {
                        $(t).addClass("move")
                    }, 50 * (e + 1))
                })
            }

            0 != TouchLenght && isTouchDevice || $(".slide-slidebox").length && $(".slide-slidebox").trigger("stop.btq.autoplay"), $(".slide-video-playing").length && $(".pause-button").trigger("click"), $(".all-album").append(e), $(".all-album .album-load").length > 1 && $(".all-album .album-load").last().remove(), Loadpic(), $(".pic-name > h3").lettering("words").children("span").lettering().children("span").lettering(), $(".album-center").on("initialized.btq.slidebox", function () {
                $(".container-zoom").each(function (e, t) {
                    new PinchZoom["default"](t, {draggableUnzoomed: !1})
                }), $(".album-center").find(".slide-item.active").addClass("selected"), a()
            }).BTQSlider({
                items: 1,
                margin: 0,
                smartSpeed: 600,
                loop: !1,
                dots: !0,
                nav: !0,
                responsiveRefreshRate: 150
            }).on("changed.btq.slidebox", function (e) {
                $(".thumbs").length && t(e)
            }).on("translate.btq.slidebox", function () {
                $(".album-center").find(".slide-item").removeClass("selected")
            }).on("translated.btq.slidebox", function () {
                $(".album-center").find(".slide-item.active").addClass("selected"), a()
            }), $(".thumbs").on("initialized.btq.slidebox", function () {
                var e = $(".thumbs").find(".slide-item").length;
                $(window).width() >= 600 ? 6 >= e ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox") : 3 >= e ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox"), $(".thumbs").find(".slide-item").eq(0).addClass("current")
            }).BTQSlider({
                margin: 5,
                smartSpeed: 300,
                dots: !1,
                nav: !1,
                responsiveRefreshRate: 100,
                responsive: {0: {items: 3, slideBy: 3}, 600: {items: 6, slideBy: 6}}
            }), $(".thumbs").on("click", ".slide-item", function (e) {
                e.preventDefault();
                var t = $(this).index();
                $(".album-center").data("btq.slidebox").to(t, 600, !0)
            }), $(".all-album").on("mousewheel", ".album-center", function (e) {
                if (e.deltaY > 0) {
                    if (!doWheel) return;
                    doWheel = !1, $(".album-center").trigger("prev.btq.slidebox"), setTimeout(turnWheelTouch, 500)
                } else {
                    if (!doWheel) return;
                    doWheel = !1, $(".album-center").trigger("next.btq.slidebox"), setTimeout(turnWheelTouch, 500)
                }
                e.preventDefault()
            }), $(".album-load").animate({opacity: 1}, 100, "linear", function () {
                $(".loadx").fadeOut(400, "linear", function () {
                    $(".loadx").remove()
                })
            }), $(".close-album").on("click", function () {
                return $(".all-album").fadeOut(500, "linear", function () {
                    $(".overlay-dark").removeClass("show"), $(".album-load").remove()
                }), $("html, body").removeClass("no-scroll"), !1
            })
        }
    })
}

function ApartmentLoad(e, t, a) {
    $.ajax({
        url: e, cache: !1, success: function (e) {
            $(".load-apartment").append(e), $(".slide-pic-nav").length || ($(".load-apartment").append('<div class="slide-pic-nav"><div class="next-pic"></div><div class="prev-pic"></div></div>'), $(".slide-pic-nav").fadeIn(400, "linear")), $(".load-apartment .house-detail").length > 1 && $(".load-apartment .house-detail").last().remove(), $(".title-tel span").text(a), $(".title-box h2 strong").text(t), $(".scale-pic").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
                new PinchZoom["default"](t, {draggableUnzoomed: !1})
            });
            var o = $(".house-text.current");
            LoadNext(o), $(".loadx").stop().fadeOut(400, "linear", function () {
                $(".bg-house").hasClass("show") || requestAnimationFrame(SvgExpand), $(".house-detail").addClass("show-house"), $(".go-back").addClass("show"), $(".logo").addClass("center");
                var e = $(".content-house").offset().left;
                $(".logo.center").css({left: e - 10}), $(".loadx").remove()
            }), $(".go-back").on("click", function () {
                if ($(window).width() >= 1100) var e = $(".box-nav li.current a").attr("href"),
                    t = $(".box-nav li.current a").attr("data-title"),
                    a = $(".box-nav li.current a").attr("data-keyword"),
                    o = $(".box-nav li.current a").attr("data-description"),
                    l = $(".box-nav li.current a").attr("data-page"); else var e = $(".nav li.current a").attr("href"),
                    t = $(".nav li.current a").attr("data-title"), a = $(".nav li.current a").attr("data-keyword"),
                    o = $(".nav li.current a").attr("data-description"), l = $(".nav li.current a").attr("data-name");
                return changeUrl(e, t, o, a, l, t, o), $(".logo").removeClass("center"), $(".logo").removeAttr("style"), $(".house-text.current").parent().parent().removeClass("on-slide"), $(".house-text").removeClass("current"), requestAnimationFrame(SvgCollapse), $(".load-apartment").stop().fadeOut(500, "linear", function () {
                    $(".overlay-dark").removeClass("wave-bg show"), $(".go-back, .mouse").removeClass("show"), $(".nav-click").removeClass("hide"), $(".house-detail, .slide-pic-nav").remove(), $("html, body").removeClass("no-scroll"), $(".num").removeClass("staying"), $(".fix-footer").removeClass("go-bottom")
                }), !1
            })
        }
    })
}

function checkNum(e, t) {
    var a = $(".on-slide .house-text").index(t);
    a == e - 1 ? $(".next-pic").addClass("disabled") : 0 >= a ? $(".prev-pic").addClass("disabled") : ($(".next-pic").removeClass("disabled"), $(".prev-pic").removeClass("disabled"))
}

function LoadNext() {
    var e = $(".on-slide .info-house").find(".house-text").length, t = $(".on-slide .info-house .house-text.current");
    checkNum(e, t), $(".next-pic").on("click", function () {
        return $(".house-detail").addClass("moveleft"), $(t).next().trigger("click"), !1
    }), $(".prev-pic").on("click", function () {
        return $(".house-detail").addClass("moveright"), $(t).prev().trigger("click"), !1
    }), $(".load-apartment").on("swipeleft", function () {
        return $(".next-pic").hasClass("disabled") ? void 0 : ($(".house-detail").addClass("moveleft"), $(t).next().trigger("click"), !1)
    }).on("swiperight", function () {
        return $(".prev-pic").hasClass("disabled") ? void 0 : ($(".house-detail").addClass("moveright"), $(t).prev().trigger("click"), !1)
    }), $(".load-apartment").on("swipeup", function () {
        return $(window).width() > 1100 && !$(".next-pic").hasClass("disabled") ? ($(".house-detail").addClass("moveleft"), $(t).next().trigger("click"), !1) : void 0
    }).on("swipedown", function () {
        return $(window).width() > 1100 && !$(".prev-pic").hasClass("disabled") ? ($(".house-detail").addClass("moveright"), $(t).prev().trigger("click"), !1) : void 0
    }), $(window).width() > 1100 && $("body").on("mousewheel", ".load-apartment", function (e) {
        e.deltaY > 0 ? $(window).width() > 1100 && ($(".prev-pic").hasClass("disabled") || ($(".house-detail").addClass("moveright"), $(t).prev().trigger("click"))) : $(window).width() > 1100 && ($(".next-pic").hasClass("disabled") || ($(".house-detail").addClass("moveleft"), $(t).next().trigger("click")))
    })
}

function NewsLoad(e, t) {
    $(".news-text").length && $(".news-text").remove(), $.ajax({
        url: e, cache: !1, success: function (e) {
            $(t).find(".news-content").append(e), $(window).width() <= 1100 ? $(".news-text img").addClass("zoom-pic") : $(".news-text img").removeClass("zoom-pic"), ZoomPic(), $(".news-text a, .news-text p a").on("click", function (e) {
                e.preventDefault();
                var t = $(this).attr("href");
                return window.open(t, "_blank"), !1
            }), $(t).find(".news-content").stop().animate({opacity: 1}, 1e3, "linear", function () {
                $(t).addClass("show"), $(".click-hover").fadeIn(600, "linear"), $(".loadx").fadeOut(400, "linear", function () {
                    $(".news-content").addClass("show"), $(".loadx").remove()
                }), $(window).width() > 1100 ? setTimeout(function () {
                    ScrollNiceC()
                }, 500) : detectBut()
            }), $(".close-news, .click-hover").on("click", function () {
                var e = $(".nav li.current a").attr("href"), t = $(".nav li.current a").attr("data-title"),
                    a = $(".nav li.current a").attr("data-keyword"),
                    o = $(".nav li.current a").attr("data-description"), l = $(".nav li.current a").attr("data-name");
                changeUrl(e, t, o, a, l, t, o), $(".colum-box-news").removeClass("show"), $(".news-content").stop().animate({opacity: 0}, 500, "linear", function () {
                    $(".click-hover").fadeOut(600, "linear"), $(".news-list").removeClass("hide").addClass("fadein"), $(".wheel").removeClass("hide"), $(".scrollC").scrollTop(0), $(".scrollC").getNiceScroll().remove(), $(".news-content").children().remove(), $(".footer").addClass("align"), ScrollNiceB(), $(".show-text .wave-ani").length && $(".play-svg").trigger("click")
                })
            })
        }
    })
}

function LoadProgress(e, t) {
    $(".scrollB").children().length && $(".scrollB").children().remove(), $.ajax({
        url: e,
        cache: !1,
        success: function (e) {
            $(".scrollB").append(e), Loadpic(), $(".title-main h2").text(t), $(".title-main h2").lettering(), $(".progress-list").stop().animate({opacity: 1}, 800, "linear", function () {
                Option(), $(".box-progress").on("click", function (e) {
                    e.preventDefault(), $(this).find(".view-album").trigger("click")
                }), TweenLite.fromTo($(".title-main h2  > span"), .5, {opacity: 0}, {
                    opacity: 1,
                    delay: RanDom(.1, .15),
                    ease: Power0.easeOut
                }), $(".box-progress").each(function (e) {
                    var t = $(this);
                    setTimeout(function () {
                        $(t).addClass("show")
                    }, 100 * (e + 1))
                }), 0 == News && ($(".select-list").addClass("fadein"), News = 1), $(window).width() > 1100 && setTimeout(function () {
                    ScrollNiceB(), "block" == $(".progress-list .nicescroll-rails").css("display") && $(".wheel").addClass("show")
                }, 1e3), $(".loadx").fadeOut(400, "linear", function () {
                    $(".loadx").remove()
                })
            })
        }
    })
}

function CancelMove() {
    $(".thumb-image, .box-image").removeClass("moving"), TweenLite.set($(".thumb-image"), {
        x: 0,
        y: 0,
        z: 0
    }), TweenLite.set($(".thumb-image svg"), {x: 0, y: 0, z: 0})
}

function MoveBackground() {
    function e() {
        TweenLite.to(".moving", 1, {x: 0, y: 0, ease: Power2.easeOut}), TweenLite.to(".moving  svg", 1, {
            x: 0,
            y: 0,
            ease: Power2.easeOut
        })
    }

    function t() {
        DX = o.X - l, DY = o.Y - i, MoveX = DY / i, MoveY = -(DX / l), Radius = Math.sqrt(Math.pow(MoveX, 2) + Math.pow(MoveY, 2)), Degree = 2 * Radius, TweenLite.to(".moving", 1, {
            x: 30 * MoveX,
            y: 30 * MoveY,
            ease: Power2.easeOut
        }), TweenLite.to(".moving  svg", 1, {x: 60 * MoveX, y: 60 * MoveY, ease: Power2.easeOut})
    }

    var a = null, o = {X: 0, Y: 0}, l = $(window).width() / 2, i = $(window).height() / 2;
    $(".show-text .thumb-image").addClass("moving"), $(".nav-click, .hotline, .subscribe, .box-nav").on("mouseenter", function () {
        cancelAnimationFrame(a), e()
    }), $(window).width() > 1100 ? $(".box-slider").on("mousemove", function (e) {
        o.X = e.pageX, o.Y = e.pageY, cancelAnimationFrame(a), a = requestAnimationFrame(t)
    }) : $(".box-slider").on("mousemove", function () {
        cancelAnimationFrame(a), e()
    }), $(window).resize(function () {
        $(window).width() > 1100 ? (l = $(window).width() / 2, i = $(window).height() / 2) : e()
    })
}

function ZoomMap() {
    $(".viewer").addClass("desktop");
    var e = $(".viewer");
    e.find(".panzoom").panzoom({
        $zoomIn: $(".pic-zoom-in"),
        $zoomOut: $(".pic-zoom-out"),
        maxScale: 3,
        minScale: 1,
        increment: .3,
        contain: "automatic"
    }).panzoom("zoom");
    var t = e.find(".panzoom").panzoom();
    t.on("mousewheel.focal", function (e) {
        e.preventDefault();
        var a = e.delta || e.originalEvent.wheelDelta, o = a ? 0 > a : e.originalEvent.deltaY > 0;
        t.panzoom("zoom", o, {increment: .1, animate: !1, focal: e})
    }), ScaleMap(), setTimeout(function () {
        $(".apartment-pointer").addClass("show")
    }, 1e3)
}

function FocusText() {
    $("input, textarea").focus(function () {
        $(this).parent().find(".holder").addClass("hide")
    }).focusout(function () {
        "" == $(this).val() && $(this).parent().find(".holder").removeClass("hide")
    })
}

function ScrollNiceA() {
    $(window).width() <= 1100 ? ($(".scrollA").getNiceScroll().remove(), $(".scrollA").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".show-text .scrollA").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }), $(".show-text .scrollA").getNiceScroll().show(), $(".show-text .scrollA").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }), $(".show-text .scrollA").animate({scrollTop: "0px"}))
}

function ScrollNiceB() {
    $(window).width() <= 1100 ? ($(".scrollB").getNiceScroll().remove(), $(".scrollB").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".scrollB").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }), $(".scrollB").getNiceScroll().show(), $(".scrollB").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }), 0 == News && $(".scrollB").animate({scrollTop: "0px"}))
}

function ScrollNiceC() {
    $(window).width() <= 1100 ? ($(".scrollC").getNiceScroll().remove(), $(".scrollC").css({
        "overflow-x": "visible",
        "overflow-y": "visible"
    })) : ($(".scrollC").css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    }), $(".scrollC").getNiceScroll().show(), $(".scrollC").niceScroll({
        touchbehavior: !0,
        horizrailenabled: !1,
        cursordragontouch: !0,
        grabcursorenabled: !1
    }), $(".scrollC").animate({scrollTop: "0px"}))
}

function ScrollNiceHide() {
    $(".scrollA, .scrollB, .scrollC").getNiceScroll().remove()
}

function AniText() {
    $(".title-page").hasClass("on-show") || ($(".title-page").addClass("on-show"), $(".title-page h1").children().children().each(function (e) {
        var t = $(this);
        setTimeout(function () {
            $(t).addClass("move")
        }, 100 * (e + 1))
    }))
}

function AniTitle() {
    var e = new TimelineLite;
    $(".hover .title-pic h3 span").length && ($(window).width() > 1100 ? (e.set($(".title-pic h3 span"), {opacity: 0}), $(".hover .title-pic h3 span").each(function (e, t) {
        TweenLite.to($(t), .6, {opacity: 1, delay: RanDom(.3, .6), ease: Power0.easeOut})
    })) : e.set($(".title-pic h3 span"), {opacity: 1}))
}

function LinkPage() {
    $(".link-home, .link-load, .view-more, .pointer-map, .go-page").on("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".mask").removeClass("finish");
        var a = $(".shape-svg path").attr("pathdata"), o = new TimelineLite({paused: !1});
        return o.play(), o.to($(".shape-svg path"), RanDom(.1, .6), {
            attr: {d: a},
            repeat: -1,
            yoyo: !0,
            ease: Power2.easeInOut
        }), TweenLite.to($(".mask"), 1.2, {
            y: "0%", ease: Quad.easeOut, onComplete: function () {
                window.location = t
            }
        }), !1
    }), $(".link-blank, .item-brochure").on("click", function (e) {
        e.preventDefault();
        var t = $(this).find("a").attr("href");
        return window.open(t, "_blank"), !1
    })
}

function popupLoad(e) {
    $.ajax({
        url: e, cache: !1, success: function (e) {
            $(".details-content").remove(), $("body").prepend(e), $(".details-content").stop().animate({opacity: 1}, 600, "linear", function () {
                $(".details-center").addClass("fadeinup"), $(".loadicon").fadeOut(300, "linear", function () {
                    $(".loadicon").removeClass("loader"), $(".loadicon").removeClass("show")
                })
            }), $(".close-pics, .close-pics-small , .details-content span").on("click", function () {
                return $(".details-content").stop().animate({opacity: 0}, 600, "linear", function () {
                    $(".details-content").remove(), $(".overlay-dark").removeClass("show"), $("html, body").removeClass("no-scroll")
                }), !1
            })
        }
    })
}

function ContentLoad() {
    function e() {
        var e = new Date, t = e.getMonth() + 1;
        10 > t && (t = "0" + t);
        var a = e.getFullYear(), o = 0;
        $(".select-box li a").each(function (e, l) {
            $(l).attr("data-month") == t + "-" + a && (o = 1)
        }), 1 == o ? $(".select-box li a[data-month='" + t + "-" + a + "']").trigger("click") : $(".select-box li:first-child a").trigger("click")
    }

    if (ResizeWindows(), LinkPage(), FocusText(), NavClick(), Option(), ZoomPic(), $("html, body").removeClass("no-scroll"), $("#home-page").length || ($(".logo").addClass("cursor"), $(".logo").on("click", function () {
        $(".link-home").trigger("click")
    })), $(".header, .footer").addClass("show"), setTimeout(function () {
        AniText()
    }, 1300), setTimeout(function () {
        $(".box-nav, .sub-news, .fix-footer").addClass("show")
    }, 1e3), setTimeout(function () {
        $(".mask").addClass("finish")
    }, 1200), setTimeout(function () {
        $("#location-page, #news-page,#contact-page,#progress-page, #thankyou-page").length || $(".wheel").addClass("show")
    }, 800), $(".open-click").length && NavAni(), $("#home-page").length && ($(".home-popup").length && setTimeout(function () {
        var e = $(".home-popup").attr("data-href");
        return $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), popupLoad(e), !1
    }, 500), $(".item-video-home, .item-news-home").on("click", function () {
        $(this).find("a").trigger("click")
    }), $(window).width() > 1100 ? ScaleMap() : ($(".map-mobile, .map-svg").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
        new PinchZoom["default"](t, {draggableUnzoomed: !1})
    })), $(".bottom-link, .bottom-link > a").addClass("hidden")), $("#about-page").length) if ($(window).width() > 1100) $(".box-nav li.current").length && setTimeout(function () {
        $(".box-nav li.current a").trigger("click")
    }, 1e3); else if ($(".group-central.current").length) {
        var t = $(".group-central.current").offset().top - 60;
        setTimeout(function () {
            $("html, body").stop().animate({scrollTop: t}, 1500, "easeInOutExpo")
        }, 1e3)
    }
    if ($("#location-page").length && ($(".footer").addClass("align"), $(window).width() > 1100 ? ZoomMap() : ($(".map-mobile, .pointer-map,  .map-svg").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
        new PinchZoom["default"](t, {draggableUnzoomed: !1})
    })), $(".dot-p").on("mouseenter", function () {
        var e = $(this).attr("data-dot"), t = $(this).offset().left, a = $(this).offset().top;
        "dot-10" == e || "dot-11" == e || "dot-12" == e ? $('.show-box[data-box= "' + e + '"]').css({
            left: t - 250,
            top: a - 100
        }) : "dot-09" == e ? $('.show-box[data-box= "' + e + '"]').css({
            left: t + 60,
            top: a - 150
        }) : $('.show-box[data-box= "' + e + '"]').css({
            left: t + 60,
            top: a - 100
        }), $('.show-box[data-box= "' + e + '"]').addClass("showup")
    }), $(".dot-p").on("mouseleave", function () {
        $(".show-box").removeClass("showup")
    })), $("#facilities-page").length) if ($(".footer").addClass("align"), $(".bottom-link a:first-child").addClass("hidden"), $(".all-dot-top a").on("mouseenter click", function (e) {
        e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(this).addClass("current"), $(".show-box-pic").removeClass("showup");
        var t = $(this).attr("data-name"), a = $(this).offset().left, o = $(this).offset().top,
            l = $(this).attr("data-box"), i = $(".show-box-pic[data-pic='" + l + "']").innerHeight(),
            s = $(".show-box-pic[data-pic='" + l + "']").innerHeight();
        return $(window).width() > 1100 ? ($(".show-box-pic.no-pic[data-pic='" + l + "']").css({
            left: a - s / 2,
            top: o - (i + 20)
        }).addClass("showup"), $(".show-box-pic:not(.no-pic)[data-pic='" + l + "']").css({
            left: a + 60,
            top: o - i / 2
        }).addClass("showup"), $(".note-facilities li[data-text='" + t + "']").addClass("current")) : ($(".show-box-pic[data-pic='" + l + "']").css({
            left: a - (s / 2 + 10), top: o - (i + 80)
        }).addClass("showup"), $(".note-facilities li[data-text='" + t + "']").addClass("current")), !1
    }), $(".note-facilities li, .all-dot-top a").on("mouseleave", function () {
        $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("showup")
    }), $(".all-dot-top a:not(.no-pic)").on("click", function (e) {
        if (e.preventDefault(), e.stopPropagation(), $(".show-box-pic").removeClass("current"), $(window).width() > 1100) {
            var t = $(this).attr("data-name");
            if ($(".show-box-pic[data-pic='" + t + "']").removeClass("showup").addClass("current"), "" !== t) {
                var a = $(".show-box-pic[data-pic='" + t + "']").find("img").attr("data-src"),
                    o = $(".show-box-pic[data-pic='" + t + "']").find(".faci-text h3").text();
                ThumbZoom(a, o), $(".all-dot-top a, .note-facilities li").removeClass("current")
            }
        }
        return !1
    }), $(".note-facilities li").on("mouseenter click", function (e) {
        e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("showup"), $(this).addClass("current");
        var t = $(this).attr("data-text");
        $(".all-dot-top a[data-name='" + t + "']").trigger("mouseenter")
    }), $(".show-box-pic:not(.no-pic)").on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("current"), $(this).removeClass("showup").addClass("current");
        var t = $(this).find("img").attr("data-src"), a = $(this).find(".faci-text h3").text();
        return ThumbZoom(t, a), $(".show-box-pic").removeClass("showup"), !1
    }), $(".show-box-pic.no-pic").on("click", function (e) {
        return e.preventDefault(), e.stopPropagation(), $(".show-box-pic").removeClass("showup"), $(".all-dot-top a, .note-facilities li").removeClass("current"), !1
    }), $(".container").on("click", function (e) {
        return e.preventDefault(), $(".all-dot-top a, .note-facilities li").removeClass("current"), $(".show-box-pic").removeClass("current"), $(".show-box-pic").removeClass("showup"), !1
    }), $(window).width() <= 1100 && $(".note-facilities").mousewheel(function (e, t) {
        $(this).scrollLeft(this.scrollLeft + 40 * -t), e.preventDefault()
    }), $(window).width() > 1100) $(".box-nav li.current").length && setTimeout(function () {
        $(".box-nav li.current a").trigger("click")
    }, 1e3); else if ($(".group-central.current").length) {
        var t = $(".group-central.current").offset().top - 60;
        setTimeout(function () {
            $("html, body").stop().animate({scrollTop: t}, 1500, "easeInOutExpo")
        }, 1e3)
    }
    if ($("#apartment-page").length) {
        if ($(".footer").addClass("align"), $(".copyright").addClass("white"), $(".bottom-link a:nth-child(2)").addClass("hidden"), $(".onarea").hover(function (e) {
            if ($(window).width() > 1100) {
                $(".house-text").removeClass("show");
                var t = $(this).attr("data-name"), a = e.clientX, o = e.clientY,
                    l = $(".house-text[data-block='" + t + "']").width();
                $(".house-text[data-block='" + t + "']").innerHeight();
                $(".house-text[data-block='" + t + "']").css({
                    left: a + l / 2,
                    top: o - 50
                }), $(".house-text[data-block='" + t + "']").addClass("show"), $(".num[data-num='" + t + "']").addClass("hide")
            }
        }, function () {
            $(window).width() > 1100 && ($(".house-text").removeClass("show"), $(".num").removeClass("hide"))
        }), $(".onarea").on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("href"), a = $(this).attr("data-title"), o = $(this).attr("data-keyword"),
                l = $(this).attr("data-description"), i = $(this).attr("data-name");
            changeUrl(t, a, l, o, i, a, l);
            var s = $(this).attr("href"), n = $(this).attr("data-name"),
                r = $(this).parent().parent().parent().parent().find(".title-main h2").text(),
                c = $(".house-text[data-block='" + n + "'] .num-block").text();
            return $(".num").addClass("staying"), $(".house-text").removeClass("current"), $(".house-text[data-block='" + n + "']").addClass("current"), $(".house-text.current").parent().parent().addClass("on-slide"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("wave-bg show"), $(".nav-click").addClass("hide"), $(".mouse").addClass("show"), $(".fix-footer").addClass("go-bottom"), $(".load-apartment").stop().fadeIn(300, "linear", function () {
                $(".house-detail").length && $(".house-detail").remove(), ApartmentLoad(s, c, r)
            }), !1
        }), $(".house-text").on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("data-block");
            return $(".house-detail").length ? $(".house-detail").stop().fadeOut(500, "linear", function () {
                $(".house-detail").remove(), $(".onarea[data-name='" + t + "']").trigger("click")
            }) : $(".load-apartment").stop().fadeIn(300, "linear", function () {
                $(".onarea[data-name='" + t + "']").trigger("click")
            }), !1
        }), $(window).width() > 1100) $(".box-nav li.current").length && setTimeout(function () {
            $(".box-nav li.current a").trigger("click")
        }, 1e3); else if ($(".group-central.current").length) {
            var t = $(".group-central.current").offset().top - 60;
            setTimeout(function () {
                $("html, body").stop().animate({scrollTop: t}, 1500, "easeInOutExpo")
            }, 1e3)
        }
        $(".onarea.current").length && setTimeout(function () {
            $(".onarea.current").trigger("click")
        }, 2e3)
    }
    if ($("#news-page").length && ($(".footer").addClass("align"), $(".link-page").each(function (e) {
        var t = $(this);
        setTimeout(function () {
            $(t).addClass("show")
        }, 100 * (e + 1))
    }), $(".link-page").on("click", function (e) {
        e.preventDefault(), News = 1, $(window).width() > 1100 && requestAnimationFrame(BgEffect), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".link-page").removeClass("current"), $(this).addClass("current");
        var t = $(".colum-box-news"),
            a = ($(this).find(".head-text a").attr("data-name"), $(this).find(".head-text a").attr("href")),
            o = $(this).find(".head-text a").attr("data-title"), l = $(this).find(".head-text a").attr("data-keyword"),
            i = $(this).find(".head-text a").attr("data-description"),
            s = $(this).find(".head-text a").attr("data-name");
        changeUrl(a, o, i, l, s, o, i);
        var n = $(this).find(".head-text a").attr("href");
        return $(".news-content").removeClass("show"), $(".footer").removeClass("align"), $(".wave-ani").length && $(".stop-svg").trigger("click"), $(".news-list, .wheel").addClass("hide"), $(".scrollB").getNiceScroll().hide(), $(".news-content").stop().animate({opacity: 0}, 600, "linear", function () {
            NewsLoad(n, t)
        }), !1
    }), $(window).width() <= 1100 && $(".news-list").mousewheel(function (e, t) {
        $(this).scrollLeft(this.scrollLeft + 40 * -t), e.preventDefault()
    }), $(window).width() > 1100 ? (setTimeout(function () {
        ScrollNiceB()
    }, 300), setTimeout(function () {
        "block" == $(".news-list .nicescroll-rails").css("display") && $(".wheel").addClass("show")
    }, 1e3)) : $(".colum-box-news").hasClass("show") || $(".news-list").each(function (e, t) {
        $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".group:first-child .link-page:first-child").trigger("click")
    }), $(".link-page.current").length && $(".link-page.current").trigger("click")), $("#progress-page").length && ($(".footer").addClass("align"), $(".select-header").bind("click", function () {
        $(".select-header").hasClass("onclick") ? ($(".select-header").removeClass("onclick"), $(this).next(".select-box").fadeOut(200, "linear")) : ($(this).addClass("onclick"), $(this).next(".select-box").fadeIn(200, "linear"), $(this).closest(".select-list").on("mouseleave", function () {
            $(this).find(".select-box").fadeOut(200, "linear"), $(".select-header").removeClass("onclick")
        }))
    }), $(".select-box li a").on("click", function (e) {
        e.preventDefault(), $(this).parent().parent().find("li").removeClass("selected"), $(this).parent().parent().parent().parent().find(".select-header h3").text($(this).text()), $(this).parent().addClass("selected"), $(this).closest(".select-box").fadeOut(200, "linear"), $(".select-header").removeClass("onclick");
        var t = ($(this).attr("data-month"), $(this).attr("href")), a = $(this).find("h3").text();
        ScrollNiceHide();
        var o = $(this).attr("href"), l = $(this).attr("data-title"), i = $(this).attr("data-keyword"),
            s = $(this).attr("data-description"), n = $(this).attr("data-month");
        return changeUrl(o, l, s, i, n, l, s), $(".progress-list").stop().animate({opacity: 0}, 500, "linear", function () {
            $(".wheel").removeClass("show"), $(window).width() > 1100 && requestAnimationFrame(BgEffect), LoadProgress(t, a)
        }), !1
    }), $(".select-box li.selected").length ? $(".select-box li.selected a").trigger("click") : e()), $("#library-page").length) if ($(".pic-library, .box-pdf").on("click", function (e) {
        return e.preventDefault(), $(this).find("a").trigger("click"), !1
    }), $(window).width() > 1100) $(".box-nav li.current").length && setTimeout(function () {
        $(".box-nav li.current a").trigger("click")
    }, 1e3); else if ($(".group-central.current").length) {
        var t = $(".group-central.current").offset().top - 60;
        setTimeout(function () {
            $("html, body").stop().animate({scrollTop: t}, 1500, "easeInOutExpo")
        }, 1e3)
    }
    $("#contact-page").length && ($(".footer").addClass("center"), $(".copyright").addClass("show"), $(".logo-center").addClass("cursor"), $(".logo-center").on("click", function () {
        $(".link-home").trigger("click")
    }), $(window).width() > 1100 && requestAnimationFrame(BgEffect)), $("#thankyou-page").length && $(".footer").addClass("align")
}

function ThumbZoom(e, t) {
    $("html, body").addClass("no-scroll"), $(this).parent().addClass("to-scroll"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".overlay-dark").addClass("show");
    var a = e;
    $(".all-pics").find(".full").append('<img src ="' + a + '" alt="pic" >'), $(".all-pics").find(".full").append("<span></span>"), $(".all-pics").append('<a class="close-pics" href="javascript:void(0);"></a><a class="close-pics-small" href="javascript:void(0);"></a>'), $(".all-pics").prepend('<div class="text-length"><h3></h3></div>'), $(".all-pics img").on("load", function () {
        $(".all-pics").addClass("show"), $(".text-length h3").text(t), 0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
            new PinchZoom["default"](t, {})
        })) : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch()), $(".full img").length > 1 && $(".full img").last().remove(), $(".loadx").fadeOut(500, function () {
            0 != TouchLenght && isTouchDevice || detectMargin(), $(".full img").addClass("fadein"), $(".text-length").addClass("fadeindown"), $(".loadx").remove()
        })
    }), $(window).width() > 1100 && $(".full span").on("click", function () {
        $(".close-pics").trigger("click")
    }), $(".close-pics, .close-pics-small").on("click", function () {
        $(".loadx").remove(), $(".full").fadeOut(300, "linear", function () {
            if ($(".overlay-dark").removeClass("show"), $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(), $(".close-pics, .close-pics-small").remove(), $(".all-pics").removeClass("show"), $("html, body").removeClass("no-scroll"), $(".to-scroll").length) {
                var e = $(".to-scroll").offset().top;
                $(window).width() < 1100 && $("html, body").scrollTop(e - 60), $(".to-scroll").removeClass("to-scroll")
            }
        })
    })
}

function ZoomPic() {
    $("img").on("click", function () {
        if ($(this).hasClass("zoom-pic") && $(window).width() <= 1100) {
            $("html, body").addClass("no-scroll"), $(this).parent().addClass("to-scrollZ"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".details-content").length ? $(".overlay-dark").addClass("level-index-in") : $(".overlay-dark").addClass("show");
            var e = $(this).attr("src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics").append('<div class="close-pics-small"></div>'), $(".all-pics img").on("load", function () {
                $(".all-pics").addClass("show"), 0 != TouchLenght && isTouchDevice ? ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
                    new PinchZoom["default"](t, {draggableUnzoomed: !1})
                })) : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch()), $(".full img").length > 1 && $(".full img").last().remove(), $(".loadx").fadeOut(400, "linear", function () {
                    0 != TouchLenght && isTouchDevice || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove()
                })
            }), $(window).width() > 1100 && $(".full span").on("click", function () {
                $(".close-pics").trigger("click")
            }), $(".close-pics-small, .close-pics").on("click", function () {
                $(".loadx").remove(), $(".full").fadeOut(300, "linear", function () {
                    if ($(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics-small, .close-pics").remove(), $(".all-pics").removeClass("show"), $(".details-content").length) $(".overlay-dark").removeClass("level-index-in"); else if ($("html, body").removeClass("no-scroll"), $(".overlay-dark").removeClass("show"), $(".to-scrollZ").length) {
                        var e = $(".to-scrollZ").offset().top;
                        $(".to-scrollZ").removeClass("to-scrollZ"), $(window).width() < 1100 && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
        return !1
    })
}

function Option() {
    $(".download-pdf").on("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return window.open(t, "_blank"), !1
    }), $(".view-album").on("click", function (e) {
        e.preventDefault();
        var t = $(this).attr("data-href") || $(this).attr("href");
        return $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), $(".all-album").fadeIn(300, "linear", function () {
            AlbumLoad(t, 0)
        }), !1
    }), $(".player").on("click", function (e) {
        e.preventDefault(), $(this).parent().addClass("to-scrollV");
        var t, a = $(this).attr("data-href") || $(this).attr("href"), o = $(this).attr("data-embed"),
            l = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/, i = o.match(l);
        if (t = i && 11 == i[2].length ? i[2] : "no video found", "" !== o) var s = '<iframe id="VYT" src="https://www.youtube.com/embed/' + t + "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + t + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
        return $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), $(".allvideo").fadeIn(300, "linear", function () {
            VideoLoad(a, s, t)
        }), !1
    }), $(".zoom:not(.album)").on("click", function () {
        $("html, body").addClass("no-scroll"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"  style="display:block"></div>'), $(".overlay-dark").addClass("show");
        var e = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src") || $(this).attr("data-src");
        if ($(this).attr("data-src")) var t = $(this).attr("data-src"); else var t = e;
        return $(".all-pics").find(".full").append('<img src ="' + t + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<a class="close-pics" href="javascript:void(0);"><svg viewBox="0 0 100 100"><path fill="currentColor" d="M50,54 27.2,76.8 23.2,72.8 46,50 23.2,27.2 27.2,23.2 50,46 72.8,23.2 76.8,27.2 54,50 76.8,72.8 72.8,76.8z"></path></a>'), $(".all-pics").append('<a class="close-pics-small" href="javascript:void(0);"></a>'), $(".all-pics img").on("load", function () {
            $(".all-pics").addClass("show"), 0 != TouchLenght && isTouchDevice ? ($(".full img").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
                new PinchZoom["default"](t, {draggableUnzoomed: !1})
            })) : ($(".full").addClass("dragscroll"), $(".dragscroll").draptouch()), $(".full img").length > 1 && $(".full img").last().remove(), $(".loadx").fadeOut(400, "linear", function () {
                0 != TouchLenght && isTouchDevice || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove()
            })
        }), $(window).width() > 1100 && $(".full span").on("click", function () {
            $(".close-pics").trigger("click")
        }), $(".close-pics, .close-pics-small").on("click", function () {
            $(".loadx").remove(), $(".full").fadeOut(300, "linear", function () {
                $(".overlay-dark").removeClass("show"), $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(), $(".close-pics, .close-pics-small").remove(), $(".all-pics").removeClass("show"), $("html, body").removeClass("no-scroll")
            })
        }), !1
    })
}

function turnWheelTouch() {
    doWheel = !0, doTouch = !0
}

function detectBut() {
    $("#news-page").length && $(".link-page").hasClass("current") && $(window).width() <= 1100 && $(".news-list").each(function (e, t) {
        var a = $(t), o = $(t).find(".grid").offset().left, l = $(t).find(".link-page.current").offset().left,
            i = $(".news-list").width() / 2 - $(".link-page").width() / 2;
        $(a).stop().animate({scrollLeft: l - i - o}, "slow")
    })
}

function detectMargin() {
    var e = $(".full img").width(), t = $(".full  img").height(), a = $(window).height(), o = $(window).width();
    o > e ? $(".full img").css({"margin-left": o / 2 - e / 2}) : $(".full img").css({"margin-left": 0}), a > t ? $(".full img").css({"margin-top": a / 2 - t / 2}) : $(".full img").css({"margin-top": 0})
}

function LocationHash() {
    var e = window.location.hash;
    e = e.slice(1), $(".link-page .head-text a[data-name='" + e + "']").trigger("click"), $(".select-box li a[data-month='" + e + "']").trigger("click"), $(".box-nav li a[data-page='" + e + "']").trigger("click")
}

!function (e) {
    var t = {on: e.fn.on, bind: e.fn.bind};
    e.each(t, function (a) {
        e.fn[a] = function () {
            var e, o = [].slice.call(arguments), l = o.pop(), i = o.pop();
            return o.push(function () {
                var t = this, a = arguments;
                clearTimeout(e), e = setTimeout(function () {
                    i.apply(t, [].slice.call(a))
                }, l)
            }), t[a].apply(this, isNaN(l) ? arguments : o)
        }
    })
}(jQuery), $(document).ready(function () {
    $("#contact").length && (document.getElementById("contact").reset(), $(".holder").removeClass("hide")), $("#register").length && (document.getElementById("register").reset(), $(".holder").removeClass("hide")), $(document).bind("scroll", function () {
        var e = $(document).scrollTop();
        $(window).width() <= 1100 && (e > $(window).height() / 2 ? $(".go-top").addClass("show") : $(".go-top").removeClass("show"), windscroll <= e && windscroll >= 70 ? ($(".header").addClass("hide"), $(".hotline").addClass("fixed")) : ($(".header").removeClass("hide"), $(".hotline").removeClass("fixed")), $("#thankyou-page").length ? $(".social, .subscribe").addClass("fixed") : windscroll <= e && windscroll >= 70 ? $(".social, .subscribe").addClass("fixed") : $(".social, .subscribe").removeClass("fixed"), windscroll = e)
    }), document.addEventListener("keydown", function (e) {
        var t = e.keyCode || e.which;
        38 === t && $(".box-nav li.current").prev().trigger("click"), 40 === t && $(".box-nav li.current").next().trigger("click"), 27 === t && $(".full img").length && $(".close-pics").trigger("click")
    }), $(".go-top").on("click", function () {
        $(window).width() > 1100 && $(".box-nav, .sub-product").length ? $(".box-nav li:first-child,  .sub-product li:first-child").trigger("click") : $("html, body").animate({scrollTop: 0}, "slow")
    }), $("#home-page").length ? setTimeout(function () {
        0 == Loadx && (Loadx = 1, Done())
    }, 2e3) : setTimeout(function () {
        0 == Loadx && (Loadx = 1, Done())
    }, 1500)
}), window.onorientationchange = ResizeWindows, $(window).on("orientationchange", function () {
    $(window).width() <= 1100 && $(".colum-box-news").hasClass("show") && detectBut()
}), $(window).resize(function () {
    $(window).width() > 1100 && $(".news-text img").hasClass("zoom-pic") && $(".close-pics-small").trigger("click"), ResizeWindows()
}), $(window).on("resize", function () {
    if (ResizeWindows(), detectMargin(), $(window).width() > 1100) {
        $(".group-central").hasClass("show-text") || (BoxSlide(), $(".go-top").removeClass("show")), $(".grid-item-bg").length && !$(".grid-item-bg").hasClass("three") && requestAnimationFrame(BgEffect), $("#contact-page").length && $(".grid-item-bg").hasClass("three") && requestAnimationFrame(BgEffect), $(".show-text .wave-ani").length && $(".play-svg").trigger("click"), $(".dragscroll").length && (detectMargin(), $(".dragscroll").draptouch()), $("#home-page").length && ScaleMap(), $("#location-page").length && (ScaleMap(), $(".map-mobile .map-svg").removeClass("show"), $(".viewer").hasClass("desktop") || ZoomMap(), $(".pointer-map").hasClass("show") || $(".pointer-map").addClass("show")), $("#about-page, #facilities-page, #library-page").length && ($(".box-nav li").hasClass("current") ? setTimeout(function () {
            $(".box-nav li.current").trigger("click")
        }, 1e3) : $(".box-nav li:first-child ").trigger("click")), $("#progress-page, #contact-page").length && BgEffect(), $("#apartment-page").length && ($("img.map").hasClass("area") || $(".map-background").length || $(".map").maphilight(), $(".house-detail").length && !$(".bg-house").hasClass("show") && requestAnimationFrame(SvgExpand)), $(".home-product, .projects").hasClass("moving") || MoveBackground(), $("div").hasClass("dragscroll") && ($("div").removeClass("dragscroll draptouch-active draptouch-moving-left draptouch-moving-down"), $("div").css({overflow: "visible"})), $(".news-list").hasClass("hide") ? setTimeout(function () {
            ScrollNiceC()
        }, 250) : $(".scrollA, .scrollB").length && setTimeout(function () {
            ScrollNiceA(), ScrollNiceB()
        }, 250)
    } else {
        $(".wave-ani").length && $(".wave-ani").hasClass("in-play") && ($(".stop-svg").trigger("click"), $(".wave-ani").removeClass("in-play")), $("#home-page").length && ($(".map-mobile").hasClass("show") || ($(".map-mobile, .map-svg").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
            new PinchZoom["default"](t, {draggableUnzoomed: !1})
        }))), $("#news-page").length && ($(".colum-box-news").hasClass("show") || $(".news-list").each(function (e, t) {
            $(".link-page.current").length ? $(t).find(".link-page.current").trigger("click") : $(t).find(".group:first-child .link-page:first-child").trigger("click")
        })), $("#location-page").length && ($(".map-mobile").hasClass("show") || ($(".map-mobile .map-svg").addClass("show"), $(".map-mobile").addClass("show"), $(".map-mobile.show .map-img").addClass("pinch-zoom"), $(".pinch-zoom").each(function (e, t) {
            new PinchZoom["default"](t, {draggableUnzoomed: !1})
        })), $(".pointer-map").hasClass("show") && $(".pointer-map").removeClass("show")), $("#apartment-page").length && $("img.map").hasClass("area") && $(".map").removeClass("area"), 0 != TouchLenght && isTouchDevice || $("#news-page").length && detectBut()
    }
}, 250), $(window).bind("popstate", function (e) {
    $(window).width() > 1100 && (e.preventDefault(), LinkPage());
    var t = $(".httpserver").text();
    if ($(window).width() > 1100) if (null !== e.originalEvent.state) {
        var a = e.originalEvent.state.path, o = e.originalEvent.state.dataName, l = e.originalEvent.state.title,
            i = document.URL;
        changeUrl(a, l, "", "", o, "", "");
        var s = a.replace(t, "");
        s.split("/");
        $("#about-page, #location-page, #facilities-page, #library-page, #progress-page, #contact-page").length && ($(".close-video").length && $(".close-video").trigger("click"), $(".close-album").length && $(".close-album").trigger("click"), $(".close-pics").length && $(".close-pics").trigger("click"), $(".close-map").length && $(".close-map").trigger("click"), $(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".sub-news li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".box-nav li a").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        }), $(".sub-nav li a").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        }), $(".select-box li a").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        })), $("#news-page").length && ($(".news-text").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".link-page a").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        }))), $("#apartment-page").length && ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && ($(".content-house").length ? $(".go-back").trigger("click") : window.history.back())
        }), $(".box-nav li a").each(function (e, t) {
            $(t).attr("href") == a && ($(".content-house").length ? $(".go-back").trigger("click") : $(t).trigger("click"))
        }), $(".onarea").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        }))
    } else {
        var i = document.URL, s = i.replace(t, "");
        s.split("/");
        $("#about-page, #location-page, #facilities-page, #library-page, #progress-page, #contact-page").length && ($(".close-video").length && $(".close-video").trigger("click"), $(".close-album").length && $(".close-album").trigger("click"), $(".close-pics").length && $(".close-pics").trigger("click"), $(".close-map").length && $(".close-map").trigger("click"), $(".nav li a").each(function (e, t) {
            $(t).attr("href") == i && window.history.back()
        }), $(".sub-news li a").each(function (e, t) {
            $(t).attr("href") == i && window.history.back()
        }), $(".box-nav li a").each(function (e, t) {
            $(t).attr("href") == i && $(t).trigger("click")
        }), $(".sub-nav li a").each(function (e, t) {
            $(t).attr("href") == i && $(t).trigger("click")
        }), $(".select-box li a").each(function (e, t) {
            $(t).attr("href") == i && $(t).trigger("click")
        })), $("#news-page").length && ($(".news-text").length ? $(".close-news").trigger("click") : ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == i && window.history.back()
        }), $(".link-page a").each(function (e, t) {
            $(t).attr("href") == i && $(t).trigger("click")
        }))), $("#apartment-page").length && ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == i && ($(".content-house").length ? $(".go-back").trigger("click") : window.history.back())
        }), $(".box-nav li a").each(function (e, t) {
            $(t).attr("href") == i && ($(".content-house").length ? $(".go-back").trigger("click") : $(t).trigger("click"))
        }), $(".onarea").each(function (e, t) {
            $(t).attr("href") == i && $(t).trigger("click")
        }))
    } else {
        if (null !== e.originalEvent.state) var a = e.originalEvent.state.path; else var a = document.URL;
        var s = a.replace(t, "");
        s.split("/");
        $("#progress-page").length && ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".sub-news li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".select-box li a").each(function (e, t) {
            $(t).attr("href") == a && (window.location = a)
        })), $("#news-page").length && ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && window.history.back()
        }), $(".link-page a").each(function (e, t) {
            $(t).attr("href") == a && (window.location = a)
        })), $("#apartment-page").length && ($(".nav li a").each(function (e, t) {
            $(t).attr("href") == a && ($(".content-house").length ? $(".go-back").trigger("click") : window.history.back())
        }), $(".box-nav li a").each(function (e, t) {
            $(t).attr("href") == a && ($(".content-house").length ? $(".go-back").trigger("click") : window.history.back())
        }), $(".onarea").each(function (e, t) {
            $(t).attr("href") == a && $(t).trigger("click")
        }))
    }
}), (iOS || isFirefox) && $(window).bind("pageshow", function (e) {
    e.originalEvent.persisted && window.location.reload()
});