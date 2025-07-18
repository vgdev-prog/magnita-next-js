$(document).ready(function () {


    setTimeout(function () {
        $('#page-loader').addClass('loaded');
    }, 750);

    $('.nav-block .search-field form svg').click(function () {
        $('.search-widget').toggleClass('show')
    })
    $('span.close-search-widget').click(function () {
        $('.search-widget').toggleClass('show')
    })

    $('#mobile-burger').click(function () {
        $('header .nav-block').toggleClass('show-mobile-menu')
        $(this).toggleClass('active')
    })
    $('section.contacts-block .container .left .contacts-block p.callback').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('a.get-consult-btn-otlivy').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('.measurer .content a.btn-o').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('#header-callback-btn').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('#footer-callback').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('#phone-widget').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('.dealer-page .product-items a.item').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('#get-consult-btn').click(function () {
        $('.dealer-form.dealer-form-widget').addClass('show')
        $('.dealer-form.dealer-form-widget .inner').addClass('move')
    })
    $('#form-cross-btn').click(function () {
        $('.dealer-form').removeClass('show')
        $('.dealer-form .inner').removeClass('move')
    })
    $('#form-thx-cross-btn').click(function () {
        $('.dealer-form').removeClass('show')
        $('.dealer-form .inner').removeClass('move')
    })

    $('#width-space-btn-big').click(function () {
        $('#width-space').removeClass('space_width')
    })
    $('#width-space-btn-sm').click(function () {
        $('#width-space').addClass('space_width')
    })
    $('#height-space-btn-sm').click(function () {
        $('#height-space').addClass('space_height')
    })
    $('#height-space-btn-big').click(function () {
        $('#height-space').removeClass('space_height')
    })
    $('#width-space-btn-big2').click(function () {
        $('#width-space2').removeClass('space_width')
    })
    $('#width-space-btn-sm2').click(function () {
        $('#width-space2').addClass('space_width')
    })
    $('#height-space-btn-sm2').click(function () {
        $('#height-space2').addClass('space_height')
    })
    $('#height-space-btn-big2').click(function () {
        $('#height-space2').removeClass('space_height')
    })

    $('#white-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_white_img').addClass('active')
        })
    })
    $('#brown-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_brown_img').addClass('active')
        })
    })
    $('#gray-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_gray_img').addClass('active')
        })
    })
    $('#bezh-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_bezh_img').addClass('active')
        })
    })
    $('#light-brown-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_light-brown_img').addClass('active')
        })
    })
    $('#dark-gray-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_dark-gray_img').addClass('active')
        })
    })
    $('#silver-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_silver_img').addClass('active')
        })
    })
    $('#ral-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_ral_img').addClass('active')
        })
    })
    $('#spec-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_spec_img').addClass('active')
        })
    })
    $('#clear-color-btn').click(function () {
        $('.big-color-img img').each(function () {
            $(this).removeClass("active");
            $('.color_clear_img').addClass('active')
        })
    })

    $('section.calculator-section .left ul li p.title.sizes').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.sizes').addClass('active')
        $('section.calculator-section .right .item.sizes').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.type').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.type').addClass('active')
        $('section.calculator-section .right .item.profiles').addClass('show')
    });
    $('#sizes_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.type').addClass('active')
        $('section.calculator-section .right .item.profiles').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.lifting').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.lifting').addClass('active')
        $('section.calculator-section .right .item.lifting').addClass('show')
    });
    $('#profiles_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.lifting').addClass('active')
        $('section.calculator-section .right .item.lifting').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.lock').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.lock').addClass('active')
        $('section.calculator-section .right .item.lock').addClass('show')
    });
    $('#lifting_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.lock').addClass('active')
        $('section.calculator-section .right .item.lock').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.angle').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.angle').addClass('active')
        $('section.calculator-section .right .item.angle').addClass('show')
    });
    $('#lock_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.angle').addClass('active')
        $('section.calculator-section .right .item.angle').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.color').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.color').addClass('active')
        $('section.calculator-section .right .item.color').addClass('show')
    });
    $('#angle_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.color').addClass('active')
        $('section.calculator-section .right .item.color').addClass('show')
    });

    $('section.calculator-section .left ul li p.title.control').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.control').addClass('active')
        $('section.calculator-section .right .item.control').addClass('show')
    });
    $('#color_forward').click(function () {
        $('section.calculator-section .right .item').removeClass('show')
        $('section.calculator-section .left ul li p.title').removeClass('active')
        $('section.calculator-section .left ul li p.title.control').addClass('active')
        $('section.calculator-section .right .item.control').addClass('show')
    });

    $('section.calculator-section .right .type-items .input-group').click(function () {
        $('section.calculator-section .right .type-items .input-group').removeClass('checked')
        $(this).addClass('checked')
    });
    $('section.calculator-section .right .lifting-items .input-group').click(function () {
        $('section.calculator-section .right .lifting-items .input-group').removeClass('checked')
        $(this).addClass('checked')
    });
    $('section.calculator-section .right .lock-items .input-group').click(function () {
        $('section.calculator-section .right .lock-items .input-group').removeClass('checked')
        $(this).addClass('checked')
    });
    $('section.calculator-section .right .angle-items .input-group').click(function () {
        $('section.calculator-section .right .angle-items .input-group').removeClass('checked')
        $(this).addClass('checked')
    });
    $('section.calculator-section .right .color-items .input-group').click(function () {
        $('section.calculator-section .right .color-items .input-group').removeClass('checked')
        $(this).addClass('checked')
    });
    $('section.calculator-section .right .color-additems .input-group').click(function () {
        $('section.calculator-section .right .color-additems .input-group').removeClass('checked')
        $(this).addClass('checked')
    });

    $('section.calculator-section form .bottom-row button.btn-o').click(function () {
        $('#basket-container').toggleClass('show')
        $('#basket-container .inner').toggleClass('show-inner')
    })
});

$('#header-basket-btn-icon').click(function () {
    $('#basket-container').toggleClass('show')
    $('#basket-container .inner').toggleClass('show-inner')
})

$('.fist-row .product-desc .info a.btn-o').click(function () {
    $('#basket-container').toggleClass('show')
    $('#basket-container .inner').toggleClass('show-inner')
})

$('#basket-container-close-btn').click(function () {
    $('#basket-container').toggleClass('show')
    $('#basket-container .inner').toggleClass('show-inner')
})

$('p.aside-widget-phones-btn').click(function () {
    $('.aside-widget-phones ul').toggleClass('hide')
})

function myFunction() {
    if (window.pageYOffset > 205) {
        $('.nav-block').addClass("fixed");
    } else {
        $('.nav-block').removeClass("fixed");
    }
}

window.onscroll = function () {
    myFunction()
};


$('.sidebar-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    dots: true
});
$('.hero-price-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    dots: true
});
$('.download-catalogue-section-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    dots: true
});
$('.sert-block').slick({
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    dots: true
});
$('.about-page-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    prevArrow: '<p class="slider-arr prev"><svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z" fill="#252C32"/> </svg></p>',
    nextArrow: '<p class="slider-arr next"><svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.17205 6.99999L0.222046 2.04999L1.63605 0.635986L8.00005 6.99999L1.63605 13.364L0.222046 11.95L5.17205 6.99999Z" fill="#252C32"/> </svg></p>',
});
$('input[name="phone"]').mask("+38(999) 999-99-99");
$(".dealer-form-widget form").submit(function (event) {
    var formData = {
        name: $("#widget_form_name").val(),
        phone: $("#widget_form_phone").val(),
        message: $("#widget_form_message").val(),
    };
    $.ajax({
        type: "POST",
        url: "/process.php",
        data: formData,
        dataType: "json",
        encode: true,
    }).done(function (data) {

    });
    $("#widget_form_name").val('');
    $("#widget_form_phone").val('');
    $("#widget_form_message").val('');
    $('.dealer-form-widget').removeClass('show');
    $('.dealer-form-sent').addClass('show');
    $('.dealer-form.dealer-form-sent .inner').addClass('move')
    event.preventDefault();
});
AOS.init();
