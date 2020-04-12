
$(document).ready(function () {
    var language = "es";
    changeToEs();
    $('#language_selector').on('change', function () {
        language = $('#language_selector option:selected').val();
        switch (language) {
            case (language = "en"): {
                changeToEn();
                break;
            }
            case (language = "es"): {
                changeToEs();
                break;
            }
        }
    });   
});