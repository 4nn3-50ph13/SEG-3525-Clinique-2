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
setServices();

function setServices(){
    let toV;
    var a = 0;
    for (let i=0; i < tovalidate.length; i++){
        if (a == 0){
            a=1;
            toV = {
                [tovalidate[i].tag]: tovalidate[i]
            }
        } else{
            toV = {
                ...toV,
                [tovalidate[i].tag]: tovalidate[i]
            }
        }
    }
    localStorage.setItem('tovalidate', JSON.stringify(toV));
}

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
// Function to verify that the service is correct.
function validateService(service) {
    var a = document.getElementById(service).value;
    return (a!="default");
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
// var availableDates = ["06/29/2020","07/07/2020","07/10/2020"];

//                     steph    megan    lola   emma & ellavar 
var availableDates = {
  "Stephanie":[0,3,4,6],
  "megan":[3,6],
  "lola":[1,2,3,4,5],
  "emma-ella":[0,1,2,6]
};
const setDateFormat = "dd/MM/yy";
	

function disableDates2(specialist) {
    // get chosen professionnal
    var s = document.getElementById(specialist).value;

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ availableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Attention! Le numéro de téléphone entré n'est pas du format xxx xxx xxxx");
            $("#phone").val("xxx xxx xxxx");
            tovalidate[3].isentered = 0;
            setServices();
            toNext()
        }
        else {
            tovalidate[3].isentered = 1;
            setServices();
            toNext()
        }
    });
    $("#email").on("change", function(){
        if (!validateMail("email")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#email").val("[xxx]@[xxx].[xxx]");
            tovalidate[2].isentered = 0;
            setServices();
            toNext()
        }
        else {
            tovalidate[2].isentered = 1;
            setServices();
            toNext()
        }
    });
    $("#prenom").on("change", function(){
        if (!validatePrenom("prenom")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#prenom").val("");
            tovalidate[0].isentered = 0;
            setServices();
            toNext()
        }
        else {
            tovalidate[0].isentered = 1;
            setServices();
            toNext()
        }
    });
    $("#nom").on("change", function(){
        if (!validateNom("nom")){
            alert("Attention! Le courriel entré n'est pas valide.");
            $("#nom").val("");
            tovalidate[1].isentered = 0;
            setServices();
        }
        else {
            tovalidate[1].isentered = 1;
            setServices();
        }
    });
    $("#service").on("change", function(){
        if (!validateService("service")){
            alert("Attention! Vous n'avez pas choisi un service!");
            $("#service").val("");
            tovalidate[4].isentered = 0;
            setServices();
            toNext()
        }
        else {
            tovalidate[4].isentered = 1;
            setServices();
            toNext()
        }
    });

    $( "#date-picker" ).datepicker(
        {
            dateFormat: setDateFormat,
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends
        }
    );
    $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );

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

function toNext(){
    var next = true;
    for (const item of tovalidate){
        var v = localStorage.getItem('tovalidate');
        v = JSON.parse(v);
        if (v[item.tag].isentered == 0){
            next = false;
        }
    }
    if (next){
        $("#toDate").prop("disabled",false);
    }else {
        $("#toDate").prop("disabled",true);
    }
}






