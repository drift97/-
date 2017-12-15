function start() {
    var M = [["Y/X", 7.2, 10, 12.8, "Pyi"], [0.8, 0.12, 0.04, 0.13, 0.29], [1.6, 0.22, 0.12, 0.13, 0.47], [2.4, 0.06, 0.141, 0.039, 0.24], ["Pxj", 0.4, 0.301, 0.299, 1]];
    var MX = 0, MX2 = 0, DX = 0, MY = 0, MY2= 0, DY= 0, MXY = 0, Kxy = 0, Rxy = 0;

    for (var i = 1; i <= 3; i++)
	{
		MX = MX + (M[0][i] * M[4][i]);
        MX2 = MX2 + ((M[0][i]*M[0][i]) * M[4][i]);
        MY = MY + (M[i][0] * M[i][4]);
        MY2 = MY2 + ((M[i][0]*M[i][0]) * M[i][4]);
    }

    DX = MX2 - (MX*MX);
    DY = MY2 - MY*MY;
    var sigmaX = Math.sqrt(DX);
    var sigmaY = Math.sqrt(DY);

    for (i = 1; i <= 3; i++){
        for (var j = 1; j<=3; j++){
            MXY = MXY + (M[j][0] * M[0][i] * M[j][i]);
        }
    }

    Kxy = MXY - MX*MY;
    Rxy = Kxy/(sigmaX*sigmaY);

    var arrayXY = [], value = parseInt(document.getElementById("textvalue").value), statusY = 0, statusX = 0, statusXY = [0,0,0,0,0,0,0,0,0];

    for (i = 0; i < value; i++){
        var rand = Math.random();
        if (rand <= M[4][1]){statusY = 1;}
        else if (rand <= M[4][2] + M[4][1]){statusY = 2;}
        else {statusY = 3;}
        rand = Math.random();
		
        if (rand <= M[1][4])
		{
			arrayXY.push([[M[4][statusY]],[M[1][4]]]);
            statusX = 1;
        }
        else if(rand <= M[2][4] + M[1][4])
		{
            arrayXY.push([[M[4][statusY]],[M[2][4]]]);
            statusX = 2;
        }
        else 
		{
            arrayXY.push([[M[4][statusY]],[M[3][4]]]);
            statusX = 3;
        }

		
		if (statusX == 1)
		{
			if (statusY == 1){statusXY[0] += 1;}
			if (statusY == 2){statusXY[1] += 1;}
			if (statusY == 3){statusXY[2] += 1;}
		}
		if (statusX == 2)
		{
			if (statusY == 1){statusXY[3] += 1;}
			if (statusY == 2){statusXY[4] += 1;}
			if (statusY == 3){statusXY[5] += 1;}
		}
		if (statusX == 3)
		{
			if (statusY == 1){statusXY[6] += 1;}
			if (statusY == 2){statusXY[7] += 1;}
			if (statusY == 3){statusXY[8] += 1;}
		}
    }

    console.table(M);

    var arrForX = [0,0,0], arrForY = [0,0,0];

    for (i=0; i < value; i++)
	{
        if (arrayXY[i][0] == M[4][1]){arrForX[0] += 1;}
        else if(arrayXY[i][0] == M[4][2]){arrForX[1] += 1;}
        else {arrForX[2] += 1;}

        if (arrayXY[i][1] == M[1][4]){arrForY[0] += 1;}
        else if(arrayXY[i][1] == M[2][4]){arrForY[1] += 1;}
        else {arrForY[2] += 1;}
    }

    var incomeX = document.getElementById("incomeX").getContext("2d");
    var barDataX = {labels : arrForX,datasets : [{fillColor : "#48A497",strokeColor : "#48A4D1",data : arrForX}]};
    new Chart(incomeX).Bar(barDataX);

    var incomeY = document.getElementById("incomeY").getContext("2d");
    var barDataY = {labels : arrForY,datasets : [{fillColor : "#48A497",strokeColor : "#48A4D1",data : arrForY}]};
    new Chart(incomeY).Bar(barDataY);

    var incomeXY = document.getElementById("incomeXY").getContext("2d");
    var barDataXY = {labels : statusXY,datasets : [{fillColor : "#48A497",strokeColor : "#48A4D1",data : statusXY}]};
    new Chart(incomeXY).Bar(barDataXY);
	var Result = [
			["MX", MX],
			["MY", MY],
			["MX2", MX2],
			["MY2", MY2],
			["DX", DX],
			["DY", DY],
			["sigmaX", sigmaX],
			["sigmaY", sigmaY],
			["MXY", MXY],
			["Kxy", Kxy],
			["Rxy", Rxy]];
	console.table(Result);
}
