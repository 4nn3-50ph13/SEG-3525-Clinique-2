
let days_list = [
    {
        name: 'x',
        num: 'x'
    },
    {
        name: 'x',
        num: 'x'
    },
    {
        name: 'Mer',
        num: '1'
    },
    {
        name: 'Jeu',
        num: '2'
    },
    {
        name: 'Ven',
        num: '3'
    },
    {
        name: 'Sam',
        num: '4'
    },
    {
        name: 'Dim',
        num: '5'
    },
    {
        name: 'Lun',
        num: '6'
    },
    {
        name: 'Mar',
        num: '7'
    },
    {
        name: 'Mer',
        num: '8'
    },
    {
        name: 'Jeu',
        num: '9'
    },
    {
        name: 'Ven',
        num: '10'
    },
    {
        name: 'Sam',
        num: '11'
    },
    {
        name: 'Dim',
        num: '12'
    },
    {
        name: 'Lun',
        num: '13'
    },
    {
        name: 'Mar',
        num: '14'
    },
    {
        name: 'Mer',
        num: '15'
    },
    {
        name: 'Jeu',
        num: '16'
    },
    {
        name: 'Ven',
        num: '17'
    },
    {
        name: 'Sam',
        num: '18'
    },
    {
        name: 'Dim',
        num: '19'
    },
    {
        name: 'Lun',
        num: '20'
    },
    {
        name: 'Mar',
        num: '21'
    },
    {
        name: 'Mer',
        num: '22'
    },
    {
        name: 'Jeu',
        num: '23'
    },
    {
        name: 'Ven',
        num: '24'
    },
    {
        name: 'Sam',
        num: '25'
    },
    {
        name: 'Dim',
        num: '26'
    },
    {
        name: 'Lun',
        num: '27'
    },
    {
        name: 'Mar',
        num: '28'
    },
    {
        name: 'Mer',
        num: '29'
    },
    {
        name: 'Jeu',
        num: '30'
    }
];

let times = document.getElementsByName("br");
console.log(times);


let times_list = [
    {
        name: '12h',
        tag: '-1-2-4-5-'
    },
    {
        name: '13h',
        tag: '-1-2-6-7-'
    },
    {
        name: '14h',
        tag: '-1-2-4-6-'
    },
    {
        name: '17h',
        tag: '-3-4-5-7-'
    },
    {
        name: '18h30',
        tag: '-2-3-4-5-'
    },
    {
        name: '20h30',
        tag: '-1-2-7-6-'
    }
];

let days = document.getElementsByName("btnradio");

for (var i = 0; i < days.length; i++){
    
    days[i].addEventListener('click', () => {
        var day = i%7+1;
        
        console.log(days_list[i]);

        var day_of_week = days_list[day-1].name;
        for(var j = 0; j < times.list; j++){
            if(times_list[j].tag.includes("-"+day+"-")){
                console.log(day_of_week+" - "+times_list[j].name);
            }
        }
    })

}