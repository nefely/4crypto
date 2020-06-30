jQuery(document).ready(function() {

    function get_locale() {
        jQuery.getJSON("https://ipinfo.io/?callback=?", function(data) {
            jQuery('.cur_name').each(function() {
                if (jQuery(this).attr('data-country-code') == 'US') {
                    jQuery('.now_value').html(jQuery(this).children('div').children('p').html());
                    jQuery(this).prependTo(jQuery('ul.ul_li_dragabble'));
                } else {
                    if (jQuery(this).attr('data-country-code') == data.country) {
                        jQuery('.now_value').html(jQuery(this).children('div').children('p').html());
                        jQuery(this).prependTo(jQuery('ul.ul_li_dragabble'));
                        jQuery(this).addClass('current_loc_cc');
                        jQuery('.current_loc_cc > div:last-child').append(jQuery('<span class="cur_country_code_index">current location</span>'));
                    }
                };

            });
            jQuery('.cur_name_convector_left_currency').each(function() {
                if (jQuery(this).attr('data-country-code') == 'US') {
                    jQuery('.now_value_convector_left_currency').html(jQuery(this).html());
                    jQuery(this).prependTo(jQuery('.ul_li_dragabble_convector_left_currency'));
                    var cur_name_convector_left_currency_dcc = jQuery('.cur_name_convector_left_currency').attr('data-country-code');
                    var cur_name_convector_left_currency_dcn = jQuery('.cur_name_convector_left_currency').attr('data-country-name');
                    var cur_name_convector_left_currency_dcv = jQuery('.cur_name_convector_left_currency').attr('data-country-valute');
                    var cur_name_convector_left_currency_dcve = jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange');
                    jQuery('.now_value_convector_left_currency').attr('data-country-code', jQuery('.cur_name_convector_left_currency').attr('data-country-code'));
                    jQuery('.now_value_convector_left_currency').attr('data-country-name', jQuery('.cur_name_convector_left_currency').attr('data-country-name'));
                    jQuery('.now_value_convector_left_currency').attr('data-country-valute', jQuery('.cur_name_convector_left_currency').attr('data-country-valute'));
                    jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange', jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange'));
                } else {
                    if (jQuery(this).attr('data-country-code') == data.country) {
                        jQuery('.now_value_convector_left_currency').html(jQuery(this).html());
                        jQuery(this).prependTo(jQuery('.ul_li_dragabble_convector_left_currency'));
                        var cur_name_convector_left_currency_dcc = jQuery('.cur_name_convector_left_currency').attr('data-country-code');
                        var cur_name_convector_left_currency_dcn = jQuery('.cur_name_convector_left_currency').attr('data-country-name');
                        var cur_name_convector_left_currency_dcv = jQuery('.cur_name_convector_left_currency').attr('data-country-valute');
                        var cur_name_convector_left_currency_dcve = jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange');
                        jQuery('.now_value_convector_left_currency').attr('data-country-code', jQuery('.cur_name_convector_left_currency').attr('data-country-code'));
                        jQuery('.now_value_convector_left_currency').attr('data-country-name', jQuery('.cur_name_convector_left_currency').attr('data-country-name'));
                        jQuery('.now_value_convector_left_currency').attr('data-country-valute', jQuery('.cur_name_convector_left_currency').attr('data-country-valute'));
                        jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange', jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange'));
                    }
                };
            });

            jQuery('.cur_name_convector_left_crypto.cur_name_convector_left_crypto_current_page').prependTo(jQuery('.ul_li_dragabble_convector_left_crypto'));
            jQuery('.now_value_convector_left_crypto').html(jQuery('.cur_name_convector_left_crypto.cur_name_convector_left_crypto_current_page').html());
            var cur_name_convector_left_crypto_dcc = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-code');
            var cur_name_convector_left_crypto_dcn = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-name');
            var cur_name_convector_left_crypto_dcv = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-value');
            jQuery('.now_value_convector_left_crypto').attr('data-crypto-code', cur_name_convector_left_crypto_dcc);
            jQuery('.now_value_convector_left_crypto').attr('data-crypto-name', cur_name_convector_left_crypto_dcn);
            jQuery('.now_value_convector_left_crypto').attr('data-crypto-value', cur_name_convector_left_crypto_dcv);

        });
    }
    get_locale();
    if (jQuery('.now_value').length >= 1) {
        jQuery('.now_value').click(function() {
            jQuery('.now_toggle').slideToggle(300);
            jQuery('.myInput').focus();
            jQuery('.how_long_toggle').slideUp(300);
        });
    }
    if (jQuery('.myInput').length >= 1) {
        jQuery(".myInput").on("keyup", function() {
            var value = jQuery(this).val().toLowerCase();
            jQuery(".cur_name").filter(function() {
                jQuery(this).toggle(
                    (jQuery(this).text().toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-code').toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-name').toLowerCase().indexOf(value) > -1)
                );
            });
        });
    }
    if (jQuery('.now_value').length >= 1) {
        jQuery('.now_value').html(jQuery('.cur_name').children('div').children('p').html());
        jQuery('.how_long_value').html(jQuery('.time_name').children('div').children('p').html());
        jQuery('.how_many_hours').html(jQuery('.time_name').children('div').children('p').html());
    }
    if (jQuery('.cur_name').length >= 1) {
        jQuery('.cur_name').click(function() {
            jQuery('.now_value').html(jQuery(this).children('div').children('p').html());
            jQuery('.now_toggle').slideToggle(300);
        });
    }
    if (jQuery('.how_long_value').length >= 1) {
        jQuery('.how_long_value').click(function() {
            jQuery('.how_long_toggle').slideToggle(300);
            jQuery('.now_toggle').slideUp(300);
        });
    }
    if (jQuery('.time_name').length >= 1) {
        jQuery('.time_name').click(function() {
            jQuery('.how_long_value').html(jQuery(this).children('div').children('p').html());
            jQuery('.how_many_hours').html(jQuery(this).children('div').children('p').html());
            jQuery('.how_long_toggle').slideToggle(300);
        });
    }

    jQuery(document).on('keyup', function(evt) {
        if (evt.keyCode == 27) {
            if (jQuery('.how_long_toggle').length >= 1) {
                jQuery('.how_long_toggle').slideUp(300);
            }
            jQuery('.now_toggle').slideUp(300);
            jQuery('.myInput').val('');
            var value = jQuery(this).val().toLowerCase();
            jQuery(".cur_name").filter(function() {
                jQuery(this).toggle(
                    (jQuery(this).text().toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-code').toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-name').toLowerCase().indexOf(value) > -1)
                );
            });
        };
        if (evt.keyCode == 16) {
            if (jQuery('.now_toggle').css('display') == 'none') {
                jQuery('.now_toggle').slideDown(300);
                jQuery('.myInput').focus();
                if (jQuery('.time_name').length >= 1) {
                    jQuery('.how_long_toggle').slideUp(300);
                }
            } else {
                jQuery('.now_toggle').slideUp(300);
            };
        };
    });

    /*left*/

    if (jQuery('.now_value_convector_left_currency').length >= 1) {
        jQuery('.now_value_convector_left_currency').click(function() {
            jQuery('.now_toggle_convector_left_currency').slideToggle(300);
            jQuery('.myInput_convector_left_currency').focus();
        });
    }

    if (jQuery('.myInput_convector_left_currency').length >= 1) {
        jQuery(".myInput_convector_left_currency").on("keyup", function() {
            var value = jQuery(this).val().toLowerCase();
            jQuery(".cur_name_convector_left_currency").filter(function() {
                jQuery(this).toggle(
                    (jQuery(this).text().toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-code').toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-country-name').toLowerCase().indexOf(value) > -1)
                );
            });
        });

    }

    var cur_name_convector_left_currency_dcc = jQuery('.cur_name_convector_left_currency').attr('data-country-code');
    var cur_name_convector_left_currency_dcn = jQuery('.cur_name_convector_left_currency').attr('data-country-name');
    var cur_name_convector_left_currency_dcv = jQuery('.cur_name_convector_left_currency').attr('data-country-valute');
    var cur_name_convector_left_currency_dcve = jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange');
    jQuery('.now_value_convector_left_currency').attr('data-country-code', jQuery('.cur_name_convector_left_currency').attr('data-country-code'));
    jQuery('.now_value_convector_left_currency').attr('data-country-name', jQuery('.cur_name_convector_left_currency').attr('data-country-name'));
    jQuery('.now_value_convector_left_currency').attr('data-country-valute', jQuery('.cur_name_convector_left_currency').attr('data-country-valute'));
    jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange', jQuery('.cur_name_convector_left_currency').attr('data-country-valute-exchange'));

    jQuery('.cur_name_convector_left_currency').click(function() {
        cur_name_convector_left_currency_dcc = jQuery(this).attr('data-country-code');
        cur_name_convector_left_currency_dcn = jQuery(this).attr('data-country-name');
        cur_name_convector_left_currency_dcv = jQuery(this).attr('data-country-valute');
        cur_name_convector_left_currency_dcve = jQuery(this).attr('data-country-valute-exchange');
        jQuery('.now_value_convector_left_currency').attr('data-country-code', cur_name_convector_left_currency_dcc);
        jQuery('.now_value_convector_left_currency').attr('data-country-name', cur_name_convector_left_currency_dcn);
        jQuery('.now_value_convector_left_currency').attr('data-country-valute', cur_name_convector_left_currency_dcv);
        jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange', cur_name_convector_left_currency_dcve);
        var data_country_valute_exchange_val = (Number(jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange')));
        var data_crypto_value_val = (Number(jQuery('.now_value_convector_left_crypto').attr('data-crypto-value')));
        var single_cc_converter_quantity_currency_val = (Number(jQuery('.single_cc_converter_quantity_currency > input').val()));
        var true_conv_val = single_cc_converter_quantity_currency_val * data_country_valute_exchange_val / data_crypto_value_val;
        jQuery(".single_cc_converter_quantity_crypto > input").val(true_conv_val);
    });

    if (jQuery('.now_value_convector_left_currency').length >= 1) {
        jQuery('.now_value_convector_left_currency').html(jQuery('.cur_name_convector_left').html());
        jQuery('.now_value_convector_left_currency').attr('data-country-code', cur_name_convector_left_currency_dcc);
        jQuery('.now_value_convector_left_currency').attr('data-country-name', cur_name_convector_left_currency_dcn);
        jQuery('.now_value_convector_left_currency').attr('data-country-valute', cur_name_convector_left_currency_dcv);
    }
    if (jQuery('.cur_name_convector_left_currency').length >= 1) {
        jQuery('.cur_name_convector_left_currency').click(function() {
            jQuery('.now_value_convector_left_currency').html(jQuery(this).html());
            jQuery('.now_toggle_convector_left_currency').slideToggle(300);
        });
    }

    /*right*/
    if (jQuery('.now_value_convector_left_crypto').length >= 1) {
        jQuery('.now_value_convector_left_crypto').click(function() {
            jQuery('.now_toggle_convector_left_crypto').slideToggle(300);
            jQuery('.myInput_convector_left_crypto').focus();
        });
    }
    if (jQuery('.myInput_convector_left_crypto').length >= 1) {
        jQuery(".myInput_convector_left_crypto").on("keyup", function() {
            var value = jQuery(this).val().toLowerCase();
            jQuery(".cur_name_convector_left_crypto").filter(function() {
                jQuery(this).toggle(
                    (jQuery(this).text().toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-crypto-code').toLowerCase().indexOf(value) > -1) ||
                    (jQuery(this).attr('data-crypto-name').toLowerCase().indexOf(value) > -1)
                );
            });
        });
    }

    var cur_name_convector_left_crypto_dcc = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-code');
    var cur_name_convector_left_crypto_dcn = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-name');
    var cur_name_convector_left_crypto_dcv = jQuery('.cur_name_convector_left_crypto').attr('data-crypto-value');
    jQuery('.now_value_convector_left_crypto').attr('data-crypto-code', jQuery('.cur_name_convector_left_crypto').attr('data-crypto-code'));
    jQuery('.now_value_convector_left_crypto').attr('data-crypto-name', jQuery('.cur_name_convector_left_crypto').attr('data-crypto-name'));
    jQuery('.now_value_convector_left_crypto').attr('data-crypto-value', jQuery('.cur_name_convector_left_crypto').attr('data-crypto-value'));

    jQuery('.cur_name_convector_left_crypto').click(function() {
        cur_name_convector_left_crypto_dcc = jQuery(this).attr('data-crypto-code');
        cur_name_convector_left_crypto_dcn = jQuery(this).attr('data-crypto-name');
        cur_name_convector_left_crypto_dcv = jQuery(this).attr('data-crypto-value');
        jQuery('.now_value_convector_left_crypto').attr('data-crypto-code', cur_name_convector_left_crypto_dcc);
        jQuery('.now_value_convector_left_crypto').attr('data-crypto-name', cur_name_convector_left_crypto_dcn);
        jQuery('.now_value_convector_left_crypto').attr('data-crypto-value', cur_name_convector_left_crypto_dcv);
        var data_country_valute_exchange_val = (Number(jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange')));
        var data_crypto_value_val = (Number(jQuery('.now_value_convector_left_crypto').attr('data-crypto-value')));
        var single_cc_converter_quantity_currency_val = (Number(jQuery('.single_cc_converter_quantity_currency > input').val()));
        var true_conv_val = single_cc_converter_quantity_currency_val * data_country_valute_exchange_val / data_crypto_value_val;
        jQuery(".single_cc_converter_quantity_crypto > input").val(true_conv_val);
    });

    if (jQuery('.now_value_convector_left_crypto').length >= 1) {
        jQuery('.now_value_convector_left_crypto').html(jQuery('.cur_name_convector_left_crypto').html());
    }
    if (jQuery('.cur_name_convector_left_crypto').length >= 1) {
        jQuery('.cur_name_convector_left_crypto').click(function() {
            jQuery('.now_value_convector_left_crypto').html(jQuery(this).html());
            jQuery('.now_toggle_convector_left_crypto').slideToggle(300);
        });
    }

    jQuery(".single_cc_converter_quantity_currency > input").on("keyup", function() {
        var data_country_valute_exchange_val = (Number(jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange')));
        var data_crypto_value_val = (Number(jQuery('.now_value_convector_left_crypto').attr('data-crypto-value')));
        var single_cc_converter_quantity_currency_val = (Number(jQuery('.single_cc_converter_quantity_currency > input').val()));
        data_country_valute_exchange_val = Math.round((data_country_valute_exchange_val * 1000000)) / 1000000;
        data_crypto_value_val = Math.round((data_crypto_value_val * 1000000)) / 1000000;
        single_cc_converter_quantity_currency_val = Math.round((single_cc_converter_quantity_currency_val * 1000000)) / 1000000;
        var true_conv_val = single_cc_converter_quantity_currency_val * data_country_valute_exchange_val / data_crypto_value_val;
        true_conv_val = Math.round((true_conv_val * 1000000)) / 1000000;
        jQuery(".single_cc_converter_quantity_crypto > input").val(true_conv_val);
    });
    jQuery('.single_cc_converter_quantity_crypto > input').attr('disabled', 'true');

    jQuery('.start-convert').click(function() {
        if (jQuery(this).hasClass('reverse_convert')) {
            jQuery(".single_cc_converter_quantity_currency > input").on("keyup", function() {
                var data_country_valute_exchange_val = (Number(jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange')));
                var data_crypto_value_val = (Number(jQuery('.now_value_convector_left_crypto').attr('data-crypto-value')));
                var single_cc_converter_quantity_currency_val = (Number(jQuery('.single_cc_converter_quantity_currency > input').val()));
                data_country_valute_exchange_val = Math.round((data_country_valute_exchange_val * 1000000)) / 1000000;
                data_crypto_value_val = Math.round((data_crypto_value_val * 1000000)) / 1000000;
                single_cc_converter_quantity_currency_val = Math.round((single_cc_converter_quantity_currency_val * 1000000)) / 1000000;
                var true_conv_val = single_cc_converter_quantity_currency_val * data_country_valute_exchange_val / data_crypto_value_val;
                true_conv_val = Math.round((true_conv_val * 1000000)) / 1000000;
                jQuery(".single_cc_converter_quantity_crypto > input").val(true_conv_val);

            });
            jQuery('.single_cc_converter_quantity_crypto > input').attr('disabled', 'true');
            jQuery('.single_cc_converter_quantity_currency > input').removeAttr('disabled', 'true');
            jQuery('.currency_side').css('order', '1');
            jQuery('.crypto_side').css('order', '3');
        } else {
            jQuery(".single_cc_converter_quantity_crypto > input").on("keyup", function() {
                data_country_valute_exchange_val = (Number(jQuery('.now_value_convector_left_crypto').attr('data-crypto-value')));
                data_crypto_value_val = (Number(jQuery('.now_value_convector_left_currency').attr('data-country-valute-exchange')));
                single_cc_converter_quantity_currency_val = (Number(jQuery('.single_cc_converter_quantity_crypto > input').val()));
                data_country_valute_exchange_val = Math.round((data_country_valute_exchange_val * 1000000)) / 1000000;
                data_crypto_value_val = Math.round((data_crypto_value_val * 1000000)) / 1000000;
                single_cc_converter_quantity_currency_val = Math.round((single_cc_converter_quantity_currency_val * 1000000)) / 1000000;
                true_conv_val = (data_country_valute_exchange_val / data_crypto_value_val) * single_cc_converter_quantity_currency_val;
                true_conv_val = Math.round((true_conv_val * 1000000)) / 1000000;
                jQuery(".single_cc_converter_quantity_currency > input").val(true_conv_val);

            });
            jQuery('.single_cc_converter_quantity_crypto > input').removeAttr('disabled', 'true');
            jQuery('.single_cc_converter_quantity_currency > input').attr('disabled', 'true');
            jQuery('.currency_side').css('order', '3');
            jQuery('.crypto_side').css('order', '1');
        }
    });

    jQuery('.single_cc_converter_quantity > input').on('input', function() {
        jQuery(this).val(jQuery(this).val().replace(/[^0-9.]/g, '').replace(/(\..*)\./g, 'jQuery1'));
    });

    jQuery('.start-convert').click(function() {
        jQuery(this).toggleClass('reverse_convert');
        jQuery(this).toggleClass('normal_convert');
    });

    jQuery('.single_cc_crypto_price_chart_option_header_right_button').click(function() {
        jQuery('.single_cc_crypto_price_chart_option_header_right_export_ul').slideUp(200);
        jQuery('.single_cc_crypto_price_chart_option_header_right_ul').slideToggle(300);
        jQuery(this).toggleClass('span_collapse');
    });

    jQuery('.single_cc_crypto_price_chart_option_header_right_button_export').click(function() {
        jQuery('.single_cc_crypto_price_chart_option_header_right_ul').slideUp(300);
        jQuery('.single_cc_crypto_price_chart_option_header_right_export_ul').slideToggle(200);
        jQuery('.single_cc_crypto_price_chart_option_header_right_button').toggleClass('span_collapse');
    });

    jQuery('.single_cc_crypto_price_chart_container  .single_cc_crypto_price_chart_container_graphic_menu_left > ul:nth-child(1) > li').click(function() {
        jQuery('.single_cc_crypto_price_chart_container .single_cc_crypto_price_chart_container_graphic_menu_left > ul:nth-child(1) > li').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.single_cc_crypto_git_container  .single_cc_crypto_git_container_graphic_menu_left > ul:nth-child(1) > li').click(function() {
        jQuery('.single_cc_crypto_git_container .single_cc_crypto_git_container_graphic_menu_left > ul:nth-child(1) > li').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.single_cc_crypto_price_chart_container .single_cc_crypto_price_chart_container_graphic_menu_left > ul:nth-child(2) > .graphic_menu_left_time').click(function() {
        jQuery('.single_cc_crypto_price_chart_container .single_cc_crypto_price_chart_container_graphic_menu_left > ul:nth-child(2) > .graphic_menu_left_time').removeClass('active');
        jQuery(this).addClass('active');
    });

    jQuery('.single_cc_crypto_circle_statistic_header_menu_button').click(function() {
        jQuery(this).next(jQuery('.single_cc_crypto_circle_statistic_header_toggle')).slideToggle(300);
    });

});