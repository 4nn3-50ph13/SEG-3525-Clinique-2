let tovalidate = [
    {
        tag: 'prenom',
        value:'',
        isentered: 0
    },
    {
        tag: 'nom',
        value:'',
        isentered: 0
    },
    {
        tag: 'email',
        value:'',
        isentered: 0
    },
    {
        tag: 'phone',
        value:'',
        isentered: 0
    },
    {
        tag: 'service',
        value:'',
        isentered: 0
    }
]
localStorage.setItem('tovalidate', JSON.stringify(tovalidate));


// Function to verify that the phone number is correct.
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;

    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return filter.test(a)
}
// Function to verify that the email is correct.
function validateMail(email) {
    var a = document.getElementById(email).value;

    var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return filter.test(a)
}
// Function to verify that the name is correct.
function validatePrenom(prenom) {
    var a = document.getElementById(prenom).value;
    return a.length > 0;
}
// Function to verify that the surname is correct.
function validateNom(nom) {
    var a = document.getElementById(nom).value;
    return a.length > 0;
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
// var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];

//                     steph    megan    lola   emma & ellavar 
var availableDates = {
  "Stephanie":[0,3,4,6],
  "megan":[3,6],
  "lola":[1,2,3,4,5],
  "emma-ella":[0,1,2,6]
};
const setDateFormat = "dd/MM/yy";
	

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    
    // get chosen professionnal


    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Attention! Le numéro de téléphone entré n'est pas du format xxx xxx xxxx");
            $("#phone").val("xxx xxx xxxx");
            tovalidate[3].isentered = 0;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
        else {
            tovalidate[3].isentered = 1;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
    });
    $("#email").on("change", function(){
        if (!validateMail("email")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#email").val("[xxx]@[xxx].[xxx]");
            tovalidate[2].isentered = 0;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
        else {
            tovalidate[2].isentered = 1;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
    });
    $("#prenom").on("change", function(){
        if (!validatePrenom("prenom")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#prenom").val("");
            tovalidate[0].isentered = 0;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
        else {
            tovalidate[0].isentered = 1;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
    });
    $("#nom").on("change", function(){
        if (!validateNom("nom")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#nom").val("");
            tovalidate[1].isentered = 0;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
        else {
            tovalidate[1].isentered = 1;
            localStorage.setItem('tovalidate', JSON.stringify(tovalidate));
        }
    });

    $( "#date-picker" ).datepicker(
        {
            dateFormat: setDateFormat,
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput"); // enlever??
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");// enlever??
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"// enlever??
        }
    });


});








