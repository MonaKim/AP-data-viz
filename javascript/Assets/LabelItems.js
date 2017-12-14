// #pragma strict

// //Options for Mouseover text label
// //(Note : internal variables don't show up in Unity editor)
// var textMeshPrefab : TextMesh;  // need a TextMesh (3D text obj) to instantiate
// internal var myLabel : TextMesh; // the name of the instantiated text
// internal var myText : String = "Hello"; 

// //other visual feedback on Mouseover
// var scaleChange : float = 0.5; //increase size of marker on mouseover
// var rotationSpeed : float = 120; //rotate marker on mouseover
// var highlightColor : Vector4 = Vector4(1,.8,.8,1); //change RGBA color on mouseover

// //By finding the main camera, we can make the text always point at it to be readable
// internal var target : Transform; //make a Transform variable
// target = GameObject.Find("Main Camera").transform; // assign the main camera to it

// //Variables to keep track of old color/scale/orientation, etc.
// //so we can reset them when the mouseover ends
// var oldColor : Color;
// internal var oldOri : Vector3;

// // var myLabel

// //OnMouseEnter events are triggered ONCE, when mouse enters object
// function OnMouseEnter () {
// 	//use Instantiate to make a new 3D text object
// 	myLabel = Instantiate(textMeshPrefab, Vector3(transform.position.x+1,transform.position.y+1, transform.position.z+1));
// 	//myLabel = Instantiate(textMeshPrefab);
// 	myLabel.text = myText;  //change the text of the messege
// 	myLabel.transform.LookAt(target); //rotate the text to look at the camera
// 	myLabel.transform.Rotate(Vector3(0,180,0)); //flip it 180 degrees

// 	//add some additional visual feedback for the user
// 	gameObject.transform.localScale += Vector3(scaleChange, scaleChange, scaleChange); // make this object bigger temporary
// 	oldColor = transform.GetComponent.<Renderer>().material.GetColor("Color"); //make a note of the original color
// 	transform.GetComponent.<Renderer>().material.color = Vector4(1,.8,.8,1); // change the color temporarily
// 	//transform.renderer.material.color = Color.white; //this is an alternate way to change the color
// 	oldOri = transform.eulerAngles; //make a note of the original orientation
// }
// //OnMouseOver events are triggered repeatedly, Every frame, until mouse leaves
// function OnMouseOver () {

// 	//more visual feedback for the user
// 	transform.Rotate(Vector3(0,rotationSpeed*Time.deltaTime, 0)); //make the 3D marker spin
// }

// //OnMouseExit events are triggered ONCE, when mouse leaves object
// function OnMouseExit(){
// 	////when the mouse is no longer hovering over the object, we need to reset it
// 	Destroy(myLabel,10.0f); //Delete the lavel when the mouse leaves
// 	//reset the scale to its original value by subtracting the scale change
// 	gameObject.transform.localScale -= Vector3(scaleChange, scaleChange, scaleChange);
// 	transform.GetComponent.<Renderer>().material.color = oldColor;  // reset the material color
// 	transform.eulerAngles = oldOri; //reset the object's orientation
// }

// //other scripts can call this function to change the label text as needed
// function SetText(txt:String){
// 	myText = txt;
// }
