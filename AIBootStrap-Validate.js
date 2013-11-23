validate = function() {
    var errorCount = 0;
   
    $(".validate").each(function (index, data) {
        $(data).closest('.control-group').removeClass('error');
        $(data).siblings('.errortext').html('');
       
    });

    $(".validate.required").each(function (index, data) {
        
        
 
        if ($(data).val().trim() == "") {
              errorCount = errorCount + 1;
              $(data).closest('.control-group').addClass('error');
              var place = $(data).data("message")
            $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' is required</label>');
              

        }

    });

    $(".validate.match").each(function (index, data) {
        var controlToMatch = $(data).data("matchcontrol");
        var otherControlValue = $('#' + controlToMatch).val().trim();
 
        if ($(data).val().trim() != otherControlValue) {
            errorCount = errorCount + 1;
            $(data).closest('.control-group').addClass('error');
            var place = $(data).data("message")
            $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' values do not match</label>');
        }
    });



    

    $(".validate.length").each(function (index, data) {
        var lenText = $(data).data("length");
        var text = $(data).val().trim();
        if (text != "") {
            if (text.length > lenText) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
                $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' must be ' + lenText + ' characters long</label>');
            }
        }
    });

    $(".validate.range").each(function (index, data) {
        var rangeMin = $(data).data("lengthmin");
        var rangeMax = $(data).data("lengthmax");
        var text = $(data).val().trim();
        if (text != "") {
            if (text.length < rangeMin || text.length > rangeMax) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
                $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' must be between ' + rangeMin + ' and ' + rangeMax + ' characters long</label>');
            }
        }
    });

    $(".validate.lengthvalues").each(function (index, data) {
        var stringValues = $(data).data("lenghtarray");
        var arr = stringValues.split(',');
 
        var text = $(data).val().trim();
        var textLength = text.length;
        var pass = false;
        if (text != "") {

            for (var a in arr) {
                if (arr[a] == textLength) {
                    pass = true;
                }

            }
            if (!pass) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
               $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' must be either ' + stringValues + ' characters long</label>');
            }
          }
    });

    $(".validate.email").each(function (index, data) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        var valueOfText = $(data).val().trim();
        var testresult = pattern.test(valueOfText);
        if (valueOfText != "" || valueOfText.length >= 1) {
            if (testresult == false) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
                $(data).siblings('.errortext').html('<label class="control-label" for="inputError">Please enter a valid email address</label>');
            }
        }
    });

    $(".validate.number").each(function (index, data) {
     
        var testresultstring = $(data).val().trim();
        if (testresultstring != "") {
            //Strip out any formatting commas.
            var scrubbedString = testresultstring.replace(/,/g,'');
            var testresult = jQuery.isNumeric(scrubbedString);
            if (testresult == false) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
                $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' must be a number</label>');
            }
        }
        
    });

    $(".validate.date").each(function (index, data) {
        var pattern = new RegExp(/^(0\d|1[0-2])-([0-2]\d|3[01])-(19\d{2}|20\d{2})\s(0\d|1[012]):([0-5]\d):([0-5]\d)[AP]M$/);
        var testresultstring = $(data).val().trim();
        if (testresultstring != "") {
        
            var testresult = pattern.test(testresultstring);
            if (testresult == false) {
                errorCount = errorCount + 1;
                $(data).closest('.control-group').addClass('error');
                var place = $(data).data("message")
                $(data).siblings('.errortext').html('<label class="control-label" for="inputError">' + place + ' must be a date</label>');
            }
        }

    });



    return errorCount == 0;