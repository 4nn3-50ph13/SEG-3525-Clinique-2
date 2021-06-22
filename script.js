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
        tag: 'debit',
        value:'',
        isentered: 0
    }
]
let specialists = [
    {
        tag: '1',
        value:'123',
        heures:[2,3,4,5,6,7]
    },
    {
        tag: '2',
        value:'123',
        heures:[3,4,5,6,7]
    },
    {
        tag: '3',
        value:'13',
        heures:[2,3,4,5]
    },
    {
        tag: '4',
        value:'4567',
        heures:[4,5,6]
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

function setSpecialists(){
    var a = document.getElementById("service").value;
    if (a!="default"){
        var b = parseInt(a);
        for (var i = 0; i < specialists.length; i++){
            if (!specialists[i].value.includes(a)){
                $("#specialiste option[value='"+specialists[i].tag+"']").hide();
            }else{
                $("#specialiste option[value='"+specialists[i].tag+"']").show();
            }
        }
    }
}
function setHeure(){
    var a = document.getElementById("specialiste").value;
    if (a!="default"){
        var b = parseInt(a)-1;

        console.log(b);
        console.log(specialists[b]);
        console.log(specialists[b].heures);
        var hours = specialists[b].heures;

        for (var i = 1; i < 8; i++){
            if (hours.includes(i)){
                $("#heure option[value='"+i+"']").show();
            }else{
                $("#heure option[value='"+i+"']").hide();
            }
        }
    }
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
// Function to verify that the debit is correct.
function validateDebit(debit) {
    var a = document.getElementById(debit).value;
    return (/^[0-9- ]*$/.test(a) && a.length > 13 && a.length < 17);
}
// Function to verify that the service is correct.
function validateService(service) {
    var a = document.getElementById(service).value;
    return (a!="default");
}
// Function to verify that the specialist is correct.
function validateSpecialiste(specialiste) {
    var a = document.getElementById(specialiste).value;
    return (a!="default");
} // enlever??

// Using date restrictions on datepicker
//                     all    steph    megan    lola   emma & ellavar 
var availableDates = [[],['Lundi','Jeudi','Vendredi','Dimanche'],['Jeudi','Dimanche'],['Lundi','Mardi','Mercredi','Jeudi','Vendredi'],['Lundi','Mardi','Jeudi','Dimanche']];

const setDateFormat = "dd/MM/yy";

const setMonthNames= ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const setMonthNamesShort= ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];
const setDayNames= ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const setDayNamesShort= ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'];

var specialiste = 0;

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Attention! Le numéro de téléphone entré n'est pas du format xxx xxx xxxx");
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
            tovalidate[1].isentered = 0;
            setServices();
            toNext()
        }
        else {
            tovalidate[1].isentered = 1;
            setServices();
            toNext()
        }
    });
    $("#debit").on("change", function(){
        if (!validateDebit("debit")){
            alert("Attention! Le numéro de carte entré n'est pas valide.");
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
    $("#service").on("change", function(){
        if (!validateService("service")){
            alert("Attention! Vous n'avez pas choisi un service!");
            tovalidate[4].isentered = 0;
            setServices();
            $("#specialiste").prop("disabled",true);
        }
        else {
            $("#specialiste").prop("disabled",false);
            tovalidate[4].isentered = 1;
            setSpecialists();
        }
    });
    $("#specialiste").on("change", function(){
        specialiste = $("#specialiste").val();
        if (specialiste > 0){
            $("#date-picker").prop("disabled",false);
            $("#heure").prop("disabled",false);
        }else {
            $("#date-picker").prop("disabled",true);
            $("#heure").prop("disabled",true);
        }
        setHeure();
    });
    $("#date-picker").on("change", function(){
        $("#terminer").prop("disabled",false);
    });
    $("#date-picker").datepicker(
        {
            dateFormat: setDateFormat,
            maxDate: '+4M',
            minDate: new Date(),
            monthNames: setMonthNames,
            monthNamesShort: setMonthNamesShort,
            dayNames: setDayNames,
            dayNamesShort: setDayNamesShort,
            beforeShowDay: function(d) {        
                var year = d.getFullYear(),
                    month = (setMonthNames[d.getMonth()]),
                    day = setDayNames[d.getUTCDay()];

                var formatted = day + '/' + month + '/' + year;
                console.log(specialiste);
                if ($.inArray(day, availableDates[specialiste]) != -1) {
                    return [true, "","Available"]; 
                } else{
                    return [false,"","unAvailable"]; 
                }
            }
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
            "ui-tooltip": "highlight"
        }
    });
    $("#toDate-tooltip").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#aaaa").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#terminer").tooltip({
        classes: {
            "ui-tooltip": "highlight"
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

var height1 = $("header").height();
var height2 = $("nav").height();

$(window).scroll(function(){
    if($(this).scrollTop() > height1){
        $('.general-nav').addClass('fixed');
        $(".general").css("top", height2);
    }else {
        $('.general-nav').removeClass('fixed');
        $(".general").css("top", 0);
    }
});

