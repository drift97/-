function start(value) {
    var value = parseInt(document.getElementById('value').value);
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    function oneMethod(value){
        var arr = [];
        for (var i = 0; i <= value; i++){
            arr.push(Math.random() * (b - a) + a);
        }
        var array =raspPoDiapazonam(arr, value, a, b);
        console.log(arr);
        console.log(array);
        return array;
    }

    function preobToFunctionRaspred(arr, b, a) {
        var array = [0];
        for (var i = 1; i < arr.length; i++){
            array[i] = arr[i]/100 + array[i-1];
        }
        return array;
    }

    var diapazon = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var valueOneMethod = oneMethod(value);
    var valueToFunctionRasp = preobToFunctionRaspred(valueOneMethod, a, b);
    var buyers = document.getElementById('buyers').getContext('2d');
    var buyerData = {
        labels : diapazon,
        datasets : [
            {
                fillColor : "white",
                strokeColor : "orange",
                pointColor : "yellow",
                pointStrokeColor : "black",
                data : valueToFunctionRasp
            }
        ]
    }
    new Chart(buyers).Line(buyerData);


    var gistogramma = document.getElementById("gistogramma").getContext("2d");
    var barData = {
        labels : diapazon,
        datasets : [
            {
                fillColor : "red",
                strokeColor : "blue",
                data : valueOneMethod
            }

        ]
    };
    new Chart(gistogramma).Bar(barData);
    function plotnost(b){
        var arrPlotn = [];
        for (i = 0; i < 20; i++){
            arrPlotn[i] = 1/b;
        }
        arrPlotn.push(1/b, 0, 2/b);
        return arrPlotn;
    }


    var buyers2 = document.getElementById('buyers2').getContext('2d'),
        buyerData = {
        labels : diapazon,
        datasets : [
            {
                fillColor : "white",
                strokeColor : "black",
                pointColor : "yellow",
                pointStrokeColor : "brown",
                data : plotnost(b)
            }
        ]
    };
    new Chart(buyers2).Line(buyerData);
    var mx = (b+a)/2;
    alert ("МатОжидание = " + mx);

    var dx = ((b-a)**2)/12;
    alert ("Дисперсия = " + dx);

}

function raspPoDiapazonam(arr, value, a, b) {
    var arrayDiapazons = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    b = b - a;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] >= a && arr[i] <= a + b*0.05) {arrayDiapazons[0]++}
        else if (arr[i] > a + b*0.05 && arr[i] <= a + b*0.1) {arrayDiapazons[1]++}
        else if (arr[i] > a + b*0.1 && arr[i] <= a + b*0.15) {arrayDiapazons[2]++}
        else if (arr[i] > a + b*0.15 && arr[i] <= a + b*0.2) {arrayDiapazons[3]++}
        else if (arr[i] > a + b*0.2 && arr[i] <= a + b*0.25) {arrayDiapazons[4]++}
        else if (arr[i] > a + b*0.25 && arr[i] <= a + b*0.3) {arrayDiapazons[5]++}
        else if (arr[i] > a + b*0.3 && arr[i] <= a + b*0.35) {arrayDiapazons[6]++}
        else if (arr[i] > a + b*0.35 && arr[i] <= a + b*0.4) {arrayDiapazons[7]++}
        else if (arr[i] > a + b*0.4 && arr[i] <= a + b*0.45) {arrayDiapazons[8]++}
        else if (arr[i] > a + b*0.45 && arr[i] <= a + b*0.5) {arrayDiapazons[9]++}
        else if (arr[i] > a + b*0.5 && arr[i] <= a + b*0.55) {arrayDiapazons[10]++}
        else if (arr[i] > a + b*0.55 && arr[i] <= a + b*0.6) {arrayDiapazons[11]++}
        else if (arr[i] > a + b*0.6 && arr[i] <= a + b*0.65) {arrayDiapazons[12]++}
        else if (arr[i] > a + b*0.65 && arr[i] <= a + b*0.7) {arrayDiapazons[13]++}
        else if (arr[i] > a + b*0.7 && arr[i] <= a + b*0.75) {arrayDiapazons[14]++}
        else if (arr[i] > a + b*0.75 && arr[i] <= a + b*0.8) {arrayDiapazons[15]++}
        else if (arr[i] > a + b*0.8 && arr[i] <= a + b*0.85) {arrayDiapazons[16]++}
        else if (arr[i] > a + b*0.85 && arr[i] <= a + b*0.9) {arrayDiapazons[17]++}
        else if (arr[i] > a + b*0.9 && arr[i] <= a + b*0.95) {arrayDiapazons[18]++}
        else if (arr[i] > a + b*0.95 && arr[i] <= a + b) {arrayDiapazons[19]++}
    }
    for (i = 0; i < 20; i++ ){
        arrayDiapazons[i] = arrayDiapazons[i]/value * 100;
    }
    return arrayDiapazons;
}