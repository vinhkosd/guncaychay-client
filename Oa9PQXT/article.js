function readNews(e) {
  var id = $(e).attr('id');
  $('section').html("\n    <section class=\"box register\">\n        <div class=\"title-new\">\n            <h1 style=\"color: #c3332a\">\u0110\u0102NG K\xDD T\xC0I KHO\u1EA2N</h1>\n        </div>\n        <div class=\"tabsContent\">\n            <div class=\"active biglist animElement slide-left in-view\">\n                <form id=\"createAccountForm\" class=\"account\">\n                    <label>\n                        <span>T\xE0i Kho\u1EA3n</span>\n                        <input id=\"txtUserReg\" placeholder=\"T\xEAn t\xE0i kho\u1EA3n\" autocomplete=\"off\" required=\"\">\n                        <div id=\"usernameError\" class=\"error-check\" style=\"display:none;\">\n                            <div id=\"formtip_inner\" class=\"error-check-mess\"></div>\n                        </div>\n                    </label>\n\n                    <label>\n                        <span>Email</span>\n                        <input id=\"txtEmailReg\" placeholder=\"Ex.: abc@gmail.com\" autocomplete=\"off\" required=\"\">\n                        <div id=\"emailError\" class=\"error-check\" style=\"display:none;\"></div>\n                    </label>\n                    <label>\n                        <span>M\u1EADt Kh\u1EA9u</span>\n                        <input type=\"password\" id=\"txtPasswordReg\" onchange=\"checkPassReg();\" placeholder=\"\u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022\" autocomplete=\"off\" required=\"\">\n                        <div id=\"regacc_passs_tooltip\" class=\"error-check\" style=\"display:none;\"></div>\n                    </label>\n\n                    <label>\n                        <span>Nh\u1EADp L\u1EA1i M\u1EADt Kh\u1EA9u</span>\n                        <input type=\"password\" id=\"txtRePassword-Reg\" onchange=\"checkRePassReg();\" placeholder=\"\u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022\" autocomplete=\"off\" required=\"\">\n                        <div id=\"regacc_repasss_tooltip\" class=\"error-check\" style=\"display:none;\"></div>\n                    </label>\n\n                    <label class=\"errors-register-form\" style=\"display: none;color: red\"></label>\n\n                    <button class=\"button\" id=\"register\" type=\"button\"> <span class=\"icon\"></span> \u0110\u0102NG K\xDD </button>\n                </form>\n            </div>\n        </div>\n    </section>\n    ");
  
  $.ajax({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    url: config.app.createRoute('readNews'),
    type: "post",
    dateType: "json",
    data: {
      id
    },
    success: function(t) {
      var article = t
      $('section').html('');
      var newsContent = article.content;
      $('section').html("<section>\n    <div class=\"banner\"><img src=\"/assets/img/ban01.png\"></div>\n    <div class=\"box single\">\n        <div class=\"share animElement slide-top in-view\">\n            <div class=\"date\">\n                <span class=\"d\"></span>\n            </div>\n            <a href=\"#facebook\"><i class=\"icon-facebook\"></i></a>\n            <a href=\"#whatsapp\"><i class=\"icon-whatsapp\"></i></a>\n            <a href=\"#twitter\"><i class=\"icon-twitter\"></i></a>\n            <a href=\"#pinterest\"><i class=\"icon-pinterest\"></i></a>\n        </div>\n        <div class=\"content animElement slide-top in-view\">\n        ".concat(newsContent, "\n        <ul>\n            <li>\n                <h1><strong>&nbsp;M\u1ECDi th\u1EAFc m\u1EAFc ho\u1EB7c g\xF3p \xFD vui l\xF2ng g\u1EEDi v\u1EC1 <a href=\"javascript:openFanpage()\">FanPage</a></strong></h1>\n            </li>\n            <li>\n                <h1><strong>&nbsp;Ch\xFAc anh em ch\u01A1i game vui v\u1EBB&nbsp;<img alt=\"\u2764\" src=\"https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1/16/2764.png\"></strong></h1>\n            </li>\n        </ul>\n        </div>\n    </div>\n</section>"));
    }
  })
 
 }