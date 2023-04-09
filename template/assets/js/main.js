const NFT_GAMES = [
    {
        id: 1,
        name: 'Bluey > Bluessette',
        image: 'assets/images/nft/nft-1.png',
        skills: ['assets/images/nft/nft-1.png', 'assets/images/nft/nft-1.png', 'assets/images/nft/nft-1.png', 'assets/images/nft/nft-1.png'],
        description: 'Bluessette is fun-loving & creative, she is the life of the party.'
    }, {
        id: 2,
        name: 'Bluey > Bluessette #2',
        image: 'assets/images/nft/nft-2.png',
        skills: ['assets/images/nft/nft-2.png', 'assets/images/nft/nft-2.png', 'assets/images/nft/nft-2.png', 'assets/images/nft/nft-2.png'],
        description: 'Bluessette is fun-loving & creative, she is the life of the party #2.'
    }, {
        id: 3,
        name: 'Bluey > Bluessette #3',
        image: 'assets/images/nft/nft-3.png',
        skills: ['assets/images/nft/nft-3.png', 'assets/images/nft/nft-3.png', 'assets/images/nft/nft-3.png', 'assets/images/nft/nft-3.png'],
        description: 'Bluessette is fun-loving & creative, she is the life of the party #3.'
    }, {
        id: 4,
        name: 'Bluey > Bluessette #4',
        image: 'assets/images/nft/nft-4.png',
        skills: ['assets/images/nft/nft-4.png', 'assets/images/nft/nft-4.png', 'assets/images/nft/nft-4.png', 'assets/images/nft/nft-4.png'],
        description: 'Bluessette is fun-loving & creative, she is the life of the party #4.'
    },
]
let selectedNFT = 3;
const triggerTabList = document.querySelectorAll('#GamingNFTTab button');
triggerTabList.forEach(triggerEl => {
    triggerEl.addEventListener('click', event => {
        const selectedId = event.target?.dataset?.id;
        if (selectedId) {
            selectedNFT = Number(selectedId);
            const selectedItem = NFT_GAMES.find(x => x.id == selectedId);
            document.getElementById('NFTImage').src = selectedItem.image;
            document.getElementById('NFTName').innerHTML = selectedItem.name;
            document.getElementById('NDTSkills').innerHTML = selectedItem.skills.map(x => `<img src="${x}" alt=""/>`).join('');
            document.getElementById('NDTDescription').innerHTML = selectedItem.description;
        }
    })
})

function removeMenuMobile(){
    if(window.innerWidth > 992){
        $('.nheader-nav').removeClass('show'); 
    }
}
window.onresize = function(){
    if(window.innerWidth > 992){
        removeMenuMobile(); 
    }
}
jQuery(window).scroll(function () {
    var wScroll = jQuery(this).scrollTop();
    if (wScroll >= 80) {
        jQuery('.nheader').addClass('nheader-fixed');
    } else {
        jQuery('.nheader').removeClass('nheader-fixed');
    }
});

jQuery(function () {
    removeMenuMobile();
    $('.nmenu-open').on('click', function () {
        $('.nheader-nav').addClass('show');
    })
    $('.nmenu-close').on('click', function () {
        $('.nheader-nav').removeClass('show');
    })
   
    $('.nheader-nav a').on('click', function () {
        $('.nheader-nav').removeClass('show');
    })


    if (jQuery(window).scrollTop() >= 80) {
        jQuery('.nheader').addClass('nheader-fixed');
    } else {
        jQuery('.nheader').removeClass('nheader-fixed');
    }

    jQuery('.narrow.prev').on('click', function () {
        selectedNFT = selectedNFT > 1 ? selectedNFT - 1 : 4;
        jQuery(`#GamingNFTTab button:nth-child(${selectedNFT})`).trigger('click');
    })
    jQuery('.narrow.next').on('click', function () {
        selectedNFT = selectedNFT < 4 ? selectedNFT + 1 : 1;
        jQuery(`#GamingNFTTab button:nth-child(${selectedNFT})`).trigger('click');
    })
    jQuery('.nnews-slide').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    })
    jQuery('.nproducts-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        centerPadding: '-100px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                }
            }
        ]
    })
})

window.onload = function(){
    $('.nloader').fadeOut(500);
    $('body').removeClass('overflow-hidden');
}