function changeNickNameSection() {
  $("#dynamicContentView").html("\n    <section class=\"box register\">\n    <div class=\"title-new\">\n        <h1 style=\"color: #c3332a\">\u0110\u1ED5i t\xEAn nh\xE2n v\u1EADt</h1>\n    </div>\n    <div class=\"tabsContent\">\n        <div class=\"active biglist\">\n            <form id=\"changeNickNameFrm\" class=\"account\">\n                <label>\n                    <span>Ch\u1ECDn m\xE1y ch\u1EE7</span> <br>\n                    <select id=\"txtServer\" name=\"txtServer\" class=\"select-phoenix\">\n                        <option value=\"0\">-- Ch\u1ECDn m\xE1y ch\u1EE7 --</option>\n                                                ".concat(server_list.map(function (server) {
    return "<option value=\"".concat(server.sid, "\">").concat(server.servername, "</option>");
  }).join(''), "\n                                            </select>\n                </label>\n\n                <label>\n                    <span>T\xEAn nh\xE2n v\u1EADt hi\u1EC7n t\u1EA1i</span>\n                    <input type=\"text\" id=\"txtPlayerNickName\" placeholder=\"\" readonly=\"\" disabled=\"\" required=\"\">\n                </label>\n\n                <label style=\"margin: 5px 0!important;\">\n                    <div style=\"width: 100%;margin: 5px 0!important;\">\n                        <div style=\"width: 49%;float: left\">\n                            <p style=\"padding-bottom: 5px;\">T\xEAn nh\xE2n v\u1EADt m\u1EDBi</p>\n                            <input type=\"text\" style=\"width: 99%;\" id=\"new_nickname\" placeholder=\"Nh\u1EADp T\xEAn nh\xE2n v\u1EADt m\u1EDBi\" autocomplete=\"off\" required=\"\">\n                        </div>\n                        <div style=\"width: 49%;float: left\">\n                            <p style=\"padding-bottom: 5px;\">Ph\xED chuy\u1EC3n</p>\n                            <input type=\"text\" style=\"width: 99%\" value=\"2000 Coin\" readonly=\"\" disabled=\"\" autocomplete=\"off\" required=\"\">\n                        </div>\n                    </div>\n                </label>\n                <div class=\"button-functional-account\">\n                    <a id=\"changeNickName\" class=\"item\" style=\"background-color: rgb(245,98,0); border-color: rgb(250,83,0);\">\u0110\u1ED5i t\xEAn ngay\n                    </a>\n                </div>\n                <div class=\"errors-change-nickname-form\" style=\"display: none;color: red\"></div>\n            </form>\n        </div>\n    </div>\n    \n</section>"));
  $(document).ready(function () {
    var time = 0;
    $('#new_nickname').on('input', function (e) {
      clearTimeout(time);
      time = setTimeout(function () {
        var newName = e.target.value;
        var error = false;
        $('.errors-change-nickname-form').css('color', 'red');
        if (newName.length < 3) return $('.errors-change-nickname-form').html("Tên nhân vật phải trên 3 ký tự");
        var svid = $("select[name=txtServer]").val();
        if (!svid) {
          $('.errors-change-nickname-form').html("Chọn máy chủ để đổi tên nhân vật!");
          error = true;
        } else {
          $('.errors-change-nickname-form').html('&nbsp;');
        }
        if (error) {
          return false;
        }
        $('.errors-change-nickname-form').css('color', 'orange');
        $('.errors-change-nickname-form').html("Đang kiểm tra tên nhân vật...");
        $.ajax({
          url: config.app.createRoute('check-is-duplicate-nickname'),
          type: 'post',
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            'Authorization': 'Bearer ' + getToken()
          },
          data: {
            server_id: svid,
            new_name: newName
          },
          success: function success(rel) {
            console.log(rel.msg);
            $(".errors-change-nickname-form").css('color', 'green');
            $('.errors-change-nickname-form').html(rel.msg);
            $(".errors-change-nickname-form").show();
          },
          error: function error(t) {
            if (t.status == 422) {
              $(".errors-change-nickname-form").css('color', 'red');
              $(".errors-change-nickname-form").html(t.responseJSON.msg);
              $(".errors-change-nickname-form").show();
            }
          }
        });
      }, 500);
    });
  });
}
function changePhoneSection() {
  var info = getUserInfo();
  $('#dynamicContentView').html("<section class=\"box register\">\n    <div class=\"title-new\">\n        <h1 style=\"color: #c3332a\">Thay \u0111\u1ED5i s\u1ED1 \u0111i\u1EC7n tho\u1EA1i</h1>\n    </div>\n    <div class=\"tabsContent\">\n        <div class=\"active biglist\">\n            <form id=\"changePasswordFrm\" class=\"account\">\n\n                <label>\n                    <span>Email c\u0169</span>\n                    <input type=\"text\" id=\"txtCurrentEmail\" placeholder=\"".concat(info.email ? info.email : '', "\">\n                    <div id=\"usernameError\" class=\"error-check\" style=\"display:none;\">\n                        <div id=\"formtip_inner\" class=\"error-check-mess\"></div>\n                    </div>\n                </label>\n                <label>\n                    <span>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EDBi</span>\n                    <input type=\"text\" id=\"txtNewPhoneNumber\" placeholder=\"V\xED d\u1EE5: 0905050505\" autocomplete=\"off\"\n                        required=\"\">\n                    <div id=\"phoneError\" class=\"error-check\" style=\"display:none;\"></div>\n                </label>\n                <div class=\"button-functional-account\">\n                    <a id=\"changePhoneNumber\" class=\"item\"\n                        style=\"background-color: rgb(245,98,0); border-color: rgb(250,83,0);\">Thay \u0111\u1ED5i\n                    </a>\n                </div>\n                <div class=\"errorMessageAccount\" style=\"display: none;color: red\"></div>\n            </form>\n        </div>\n    </div>\n</section>"));
}
function changePasswordSection() {
  $("#dynamicContentView").html("<section class=\"box register\">\n    <div class=\"title-new\">\n        <h1 style=\"color: #c3332a\">Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u</h1>\n    </div>\n    <div class=\"tabsContent\">\n        <div class=\"active biglist\">\n            <form id=\"changePasswordFrm\" class=\"account\">\n                <label>\n                    <span>M\u1EADt kh\u1EA9u c\u0169</span>\n                    <input type=\"password\" id=\"txtOldPassword\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\" autocomplete=\"off\" required=\"\">\n                    <div id=\"usernameError\" class=\"error-check\" style=\"display:none;\">\n                        <div id=\"formtip_inner\" class=\"error-check-mess\"></div>\n                    </div>\n                </label>\n\n                <label>\n                    <span>M\u1EADt kh\u1EA9u m\u1EDBi</span>\n                    <input id=\"txtNewPassword\" type=\"password\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\" autocomplete=\"off\" required=\"\"\n                        aria-autocomplete=\"list\">\n                    <div id=\"emailError\" class=\"error-check\" style=\"display:none;\"></div>\n                </label>\n\n                <label>\n                    <span>X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi</span>\n                    <input type=\"password\" id=\"txtConfirmPassword\" placeholder=\"\u2022\u2022\u2022\u2022\u2022\u2022\" autocomplete=\"off\" required=\"\">\n                    <div id=\"regacc_passs_tooltip\" class=\"error-check\" style=\"display:none;\"></div>\n                </label>\n\n                <div class=\"button-functional-account\">\n                    <a id=\"changePasswordBtn\" class=\"item\"\n                        style=\"background-color: rgb(245,98,0); border-color: rgb(250,83,0);\">Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u\n                    </a>\n                </div>\n                <div class=\"errors-change-password-form\" style=\"color: green;\"></div>\n            </form>\n        </div>\n    </div>\n</section>");
  scrollToRoute();
}
function changeEmailSection() {
  var info = getUserInfo();
  $("#dynamicContentView").html("<section class=\"box register\">\n    <div class=\"title-new\">\n        <h1 style=\"color: #c3332a\">Thay \u0111\u1ED5i Email</h1>\n    </div>\n    <div class=\"tabsContent\">\n        <div class=\"active biglist\">\n            <form id=\"changeEmailFrm\" class=\"account\">\n                <label>\n                    <span>Email c\u0169</span>\n                    <input type=\"text\" id=\"txtCurrentEmail\" placeholder=\"".concat(info.email ? info.email : '', "\">\n                    <div id=\"usernameError\" class=\"error-check\" style=\"display:none;\">\n                        <div id=\"formtip_inner\" class=\"error-check-mess\"></div>\n                    </div>\n                </label>\n\n                <label>\n                    <span>Email m\u1EDBi</span>\n                    <input id=\"txtNewEmail\" type=\"email\" placeholder=\"\u0110\u1ECBa ch\u1EC9 email m\u1EDBi\"\n                        autocomplete=\"off\" required=\"\">\n                    <div id=\"newEmailError\" class=\"error-check\" style=\"display:none;\"></div>\n                </label>\n                <div class=\"button-functional-account\">\n                    <a id=\"changeEmailBtn\" class=\"item\"\n                        style=\"background-color: rgb(245,98,0); border-color: rgb(250,83,0);\">Thay \u0111\u1ED5i Email\n                    </a>\n                </div>\n                <div class=\"errors-change-email-form\" style=\"display: none;color: red\"></div>\n            </form>\n        </div>\n    </div>\n</section>"));
  scrollToRoute();
}