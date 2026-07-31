//Swiper 初期化
const swiper = new Swiper(".hero-slider", {
    // ループ
    loop: true,

    // 自動再生
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    // 切り替え速度
    speed: 1000,

    // フェードではなくスライド
    effect: "slide",

    // ページネーション
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

