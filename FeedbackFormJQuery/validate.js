$(document).ready(function () {

    $("#idsel").change(function () {
        var idsel = $('#idsel').val();
        $("#opts").show();
        if (idsel == "-Select-") {
            $('#idsel').after('<span class="error" style="color:red"> Please select your drink</span>');
        }
        else if (idsel == "Latte") {
            $("#opt1").show();
            $("#opt2").hide();
            $("#opt3").hide();
            $("#opt4").hide();
            $("#opt5").hide();
        }
        else if (idsel == "Mocha") {
            $("#opt2").show();
            $("#opt1").hide();
            $("#opt3").hide();
            $("#opt4").hide();
            $("#opt5").hide();
        }
        else if (idsel == "Espresso") {
            $("#opt3").show();
            $("#opt1").hide();
            $("#opt2").hide();
            $("#opt4").hide();
            $("#opt5").hide();
        }
        else if (idsel == "Americano") {
            $("#opt4").show();
            $("#opt1").hide();
            $("#opt2").hide();
            $("#opt3").hide();
            $("#opt5").hide();
        }
        else if (idsel == "Cappuccino") {
            $("#opt5").show();
            $("#opt1").hide();
            $("#opt2").hide();
            $("#opt3").hide();
            $("#opt4").hide();
        }
    });
    $("#myCheck1").change(function () {
        $("#opt1tb").toggle();
    });
    $("#myCheck2").change(function () {
        $("#opt2tb").toggle();
    });
    $("#myCheck3").change(function () {
        $("#opt3tb").toggle();
    });
    $("#myCheck4").change(function () {
        $("#opt4tb").toggle();
    });
    $("#myCheck5").change(function () {
        $("#opt5tb").toggle();
    });
    $("#opt1tb").find('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).css('border', 'solid 2px red');
            $(this).after('<span class="error" style="color:red"> Please provide instructions</span>');
        }
        else {
            $(this).css('border', '');
        }
    }).trigger("focusout");
    $("#opt2tb").find('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).css('border', 'solid 2px red');
            $(this).after('<span class="error" style="color:red"> Please provide instructions</span>');
        }
        else {
            $(this).css('border', '');
        }
    }).trigger("focusout");
    $("#opt3tb").find('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).css('border', 'solid 2px red');
            $(this).after('<span class="error" style="color:red"> Please provide instructions</span>');
        }
        else {
            $(this).css('border', '');
        }
    }).trigger("focusout");
    $("#opt4tb").find('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).css('border', 'solid 2px red');
            $(this).after('<span class="error" style="color:red"> Please provide instructions</span>');
        }
        else {
            $(this).css('border', '');
        }
    }).trigger("focusout");
    $("#opt5tb").find('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).css('border', 'solid 2px red');
            $(this).after('<span class="error" style="color:red"> Please provide instructions</span>');
        }
        else {
            $(this).css('border', '');
        }
    }).trigger("focusout");


    $('#submit').click(function () {
        return validateForm();
    });

    function validateForm() {

        var rname = /^[a-zA-Z]+$/;
        var remail = /([\w\.]+)@([\w]+)\.(\w+)/;
        var rphone = /\d{3}-?\d{3}-\d{4}$/;
        var rzip = /^\d{5}([-\s]\d{4})?$/;

        var errFlag;
        var errFlagRadio;
        var errFlagFirstName;
        var errFlagLastName;
        var errFlagEmail;
        var errFlagPhone;
        var errFlagZipCode;
        var errFlagSource;
        var errFlagComments;
        var errFlagDrink;
        var errFlagText;

        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#emailId').val();
        var phone = $('#phoneNumber').val();
        var zip = $('#zipcode').val();
        var comment = $('#comments').val();
        var idsel = $('#idsel').val();
        var source = $('#source').val();

        var inputVal = new Array(firstName, lastName, email, phone, zip, comment);

        $('.error').hide();

        //Radio button
        if ($('input[name="title"]:checked').length == 0) {
            $('#title').after('<span class="error" style="color:red"> Please select an option</span>');
            errFlagRadio = false;
        } else {
            $('#title').after('<span class="error" style="color:red"> </span>');
            errFlagRadio = true;
        }

        //First Name
        if (inputVal[0] == "") {
            $('#firstName').after('<span class="error" style="color:red"> Please enter your first name</span>');
            $('#firstName').css('border-color', 'red');
            errFlagFirstName = false;
        }
        else if (!rname.test(firstName)) {
            $('#firstName').after('<span class="error" style="color:red"> Letters only</span>');
            $('#firstName').css('border-color', 'red');
            errFlagFirstName = false;
        } else {
            $('#firstName').after('<span class="error" style="color:red"> </span>');
            $('#firstName').css('border-color', '');
            errFlagFirstName = true;
        }

        //Last Name
        if (inputVal[1] == "") {
            $('#lastName').after('<span class="error" style="color:red"> Please enter your last name</span>');
            $('#lastName').css('border-color', 'red');
            errFlagLastName = false;
        }
        else if (!rname.test(lastName)) {
            $('#lastName').after('<span class="error" style="color:red"> Letters only</span>');
            $('#lastName').css('border-color', 'red');
            errFlagLastName = false;
        } else {
            $('#lastName').after('<span class="error" style="color:red"> </span>');
            $('#lastName').css('border-color', '');
            errFlagLastName = true;
        }

        //Email
        if (inputVal[2] == "") {
            $('#emailId').after('<span class="error" style="color:red"> Please enter your email address</span>');
            $('#emailId').css('border-color', 'red');
            errFlagEmail = false;
        }
        else if (!remail.test(email)) {
            $('#emailId').after('<span class="error" style="color:red"> Please enter a valid email address</span>');
            $('#emailId').css('border-color', 'red');
            errFlagEmail = false;
        } else {
            $('#emailId').after('<span class="error" style="color:red"> </span>');
            $('#emailId').css('border-color', '');
            errFlagEmail = true;
        }

        //Phone
        if (inputVal[3] == "") {
            $('#phoneNumber').after('<span class="error" style="color:red"> Please enter your phone number</span>');
            $('#phoneNumber').css('border-color', 'red');
            errFlagPhone = false;
        }
        else if (!rphone.test(phone)) {
            $('#phoneNumber').after('<span class="error" style="color:red"> Enter a valid phone number</span>');
            $('#phoneNumber').css('border-color', 'red');
            errFlagPhone = false;
        } else {
            $('#phoneNumber').after('<span class="error" style="color:red"> </span>');
            $('#phoneNumber').css('border-color', '');
            errFlagPhone = true;
        }

        //Zipcode
        if (inputVal[4] == "") {
            $('#zipcode').after('<span class="error" style="color:red"> Please enter your zip code</span>');
            $('#zipcode').css('border-color', 'red');
            errFlagZipCode = false;
        }
        else if (!rzip.test(zip)) {
            $('#zipcode').after('<span class="error" style="color:red">Enter a valid zip code</span>');
            $('#zipcode').css('border-color', 'red');
            errFlagZipCode = false;
        } else {
            $('#zipcode').after('<span class="error" style="color:red"> </span>');
            $('#zipcode').css('border-color', '');
            errFlagZipCode = true;
        }

        //source
        if ($('input[name="source"]:checked').length == 0) {
            $('#source').after('<span class="error" style="color:red"> Please select source</span>');
            errFlagSource = false;
        } else {
            $('#source').after('<span class="error" style="color:red"> </span>');
            errFlagSource = true;
        }

        //Comments
        if (inputVal[5] == "") {
            $('#comments').after('<span class="error" style="color:red"> Please enter your comments</span>');
            $('#comments').css('border-color', 'red');
            errFlagComments = false;
        } else {
            $('#comments').after('<span class="error" style="color:red"> </span>');
            $('#comments').css('border-color', '');
            errFlagComments = true;
        }

        //drink
        if (idsel == "-Select-") {
            $('#idsel').after('<span class="error" style="color:red"> Please select your drink</span>');
            errFlagDrink = false;
        } else {
            $('#idsel').after('<span class="error" style="color:red"> </span>');
            errFlagDrink = true;
        }

        //opts
        if ($('#txtbx1').val == "") {
            $('#txtbx1').after('<span class="error" style="color:red"> Please provide instructions</span>');
            errFlagText = false;
        } else if ($('#txtbx2').val == "") {
            $('#txtbx2').after('<span class="error" style="color:red"> Please provide instructions</span>');
            errFlagText = false;
        } else if ($('#txtbx3').val == "") {
            $('#txtbx3').after('<span class="error" style="color:red"> Please provide instructions</span>');
            errFlagText = false;
        } else if ($('#txtbx4').val == "") {
            $('#txtbx4').after('<span class="error" style="color:red"> Please provide instructions</span>');
            errFlagText = false;
        } else if ($('#txtbx5').val == "") {
            $('#txtbx5').after('<span class="error" style="color:red"> Please provide instructions</span>');
            errFlagText = false;
        } else {
            errFlagText = true;
        }

        if ($('#myCheck1').is(":checked")) {
            var ck = "Large Latte (3.00$)";
            var tb = $('#txtbx1').val();
            // if ($('#txtbx1').val == "") {
            //     $('#txtbx1').after('<span class="error" style="color:red"> Please provide instructions</span>');
            //     errFlagText = false;
            // } else {
            //     var tb = $('#txtbx1').val();
            //     errFlagDrink = true;
            // }
        }
        else if ($('#myCheck2').is(":checked")) {
        //else if ($('#myCheck2').is(":checked") && $('#txtbx2').val != "") {
            var ck = "Large Mocha (4.50$)";
            var tb = $('#txtbx2').val();
            //errFlagText = true;
        }
        else if ($('#myCheck3').is(":checked")) {
            var ck = "Large Espresso (2.50$)";
            var tb = $('#txtbx3').val();
        }
        else if ($('#myCheck4').is(":checked")) {
            var ck = "Large Americano (3.50$)";
            var tb = $('#txtbx4').val();
        }
        else if ($('#myCheck5').is(":checked")) {
            var ck = "Large Cappuccino (4.00$)";
            var tb = $('#txtbx5').val();
        }
        else {
            ////errFlagText = false;
            //alert("Please provide instructions");
            //$('#txtbx1').after('<span class="error" style="color:red"> Please provide instructions</span>');
            // var ck = "";
            // var tb = "";
        }

        if ($('#facebook').is(":checked")) {
            var source1 = " Facebook ";
        }
        else {
            var source1 = "";
        }
        if ($('#google').is(":checked")) {
            var source2 = " Google ";
        }
        else {
            var source2 = "";
        }
        if ($('#yelp').is(":checked")) {
            var source3 = " Yelp ";
        }
        else {
            var source3 = "";
        }

        if (errFlagRadio && errFlagFirstName && errFlagLastName && errFlagEmail && errFlagPhone && errFlagZipCode && errFlagSource && errFlagComments && errFlagDrink && errFlagText) {
            var $inputs = $('#myForm :input');
            var values = {};
            $inputs.each(function () {
                values[this.name] = $(this).val();
            });
            $("#myTable").show();
            $('#displayArea').append("<tr><td>" + values.firstName + " " + values.lastName + "</td><td>" + values.emailId + "</td><td>" + values.phoneNumber + "</td><td>" + values.zipcode + "</td><td>" + source1 + source2 + source3 + "</td><td>" + comment + "</td><td>" + ck + "  " + tb);
            //$('#submit').prop('disabled', true);
            $('#back').show();
        }

        else {
            return false;
        }
    };
});