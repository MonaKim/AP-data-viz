// #pragma strict

// var theSourceFile : TextAsset; //variable to set which text file we're using
// var marker : Transform;	//what 3D object will mark a data point's position?
// var xColumn : float;	// Data column for x value
// var yColumn : float;	//y value
// var zColumn : float;  //z value
// var labelColumn : float;  //Data column that will show up on mouseover


// //rescale data values to match a desired range of space
// var xMinMax : Vector2 = Vector2(0,100);  //smallest / largest values of X in data set
// var yMinMax : Vector2 = Vector2(0,100);	// y values
// var zMinMax : Vector2 = Vector2(0,100); // z values

// var axesMinMax : Vector2 = Vector2 (0,100); //smallest / largest virtual units for display area


// function Start () {
// 	var myText = theSourceFile.text;  // read 'all' text from file into one big string
// 	var myList = myText.Split("#"[0]); //split the text into lines
// 	for(var i=1; i<myList.length; i++){ //cycle through and print each item at a time, skip first
// 		var dataList = myList[i].Split("\t"[0]);
// 		// for(var j=0; j<dataList.length; j++){  //split each line into columns
// 		// 	print(dataList(j));
// 		// }
// 		// print(myList[i].ToString());
// 	}
// 	if(dataList.length >1){	//only process lines with contents
// 		var x = parseFloat (dataList[xColumn]);	// read out x
// 		var y = parseFloat (dataList[yColumn]); // read out y
// 		var z = parseFloat (dataList[zColumn]); //read out z
// 		var myLabel : String = dataList[labelColumn]; // read out label text

// 		//scale variables to fit the desired range of virtual space
// 		var xPct : float = (x-xMinMax[0]) / (xMinMax[1] - xMinMax[0]); 
// 		x = (xPct * (axesMinMax[1] - axesMinMax[0])) + axesMinMax[0];
// 		print(y); print (yMinMax[1] - yMinMax[0]);
// 		var yPct : float = (y-yMinMax[0]) / (yMinMax[1] - yMinMax[0]);
// 		y = (yPct * (axesMinMax[1] - axesMinMax[0])) + axesMinMax[0];
// 		print (yPct);
// 		var zPct : float = (z-zMinMax[0]) / (zMinMax[1] - zMinMax[0]);
// 		z = (zPct * (axesMinMax[1] - axesMinMax[0])) + axesMinMax[0];


// 		//use Instantiate to make a copy of the 3D marker at the desired location
// 		var myMarker : Transform = Instantiate (marker, Vector3(x,y,z), Quaternion.identity);
// 		myMarker.SendMessage ("SetText", myLabel, SendMessageOptions.DontRequireReceiver);  
// 	}
// }

// function Update () {
	
// }
