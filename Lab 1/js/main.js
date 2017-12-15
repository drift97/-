//Первый метод середины квадратов
function releaseOneMethod () {
    value = prompt('Введите начальное число', 1994);
    var arrOneMethod = [];
    for (var i = 1; i <= 10; i++ )
    {
        var stringValue = value;
        stringValue = String(stringValue*stringValue);
        while (stringValue.length < 8) {
            stringValue = 0 + stringValue;
        }
        value = parseInt(stringValue.substring(2,6));
        arrOneMethod.push(value);
    }

    alert(arrOneMethod);

    return arrOneMethod;
}
//Реализация второго метода
function twoMethod (){
    value = prompt('Введите A[0]', 1);
    var m = 13,
        k = 7;
    var a = [value],
        z = [], b=[];
    for (i = 1; i<m-1; i++)
    {
        a[i] = (k*a[i-1]%m);
        z[i-1] = a[i]/m;
        b[i-1] = z[i-1];
    }

    alert(a);
    return b;
}