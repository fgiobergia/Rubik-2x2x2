var cont : int;
var rad : float;
var vals : float[];
var i : int;

function Start () {
	transform.position = Vector3(0, 3, 0);
	cont=45;
	i=0;
	vals = new float[4];
	for (var child : Transform in transform) {
		if (child.position.y>3) {
			vals[i]=(child.position.z>0)?((child.position.x>0)?0:1):(child.position.x<0)?2:3;
			i++;
		}
	}
}

function Update () {

	switch (MoveCamera.rotationDirection) {
		case 1:
			transform.Rotate (0,3,0,Space.World);
			if (cont==30) { // 90/3 = 90/speed for further updates
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		case 2:
			transform.Rotate (0,-3,0,Space.World);
			if (cont==30){
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		case 5:
			transform.Rotate (3,0,0,Space.World);
			if (cont==30) { // 90/3 = 90/speed for further updates
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		case 6:
			transform.Rotate (-3,0,0,Space.World);
			if (cont==30) { // 90/3 = 90/speed for further updates
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		case 7:
			transform.Rotate (0,0,3,Space.World);
			if (cont==30) { // 90/3 = 90/speed for further updates
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		case 8:

			transform.Rotate (0,0,-3,Space.World);
			if (cont==30) { // 90/3 = 90/speed for further updates
				MoveCamera.rotationDirection=0;
			}
			cont++;
			break;
		// Up counterclockwise
		case 9:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.y>3) {
						child.Rotate(0,-3,0,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Cos(rad)*1.4142,child.position.y,Mathf.Sin(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Up clockwise
		case 10:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.y>3) {
						child.Rotate(0,3,0,Space.World);
						rad = Mathf.PI*((45-(cont*3)+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Cos(rad)*1.4142,child.position.y,Mathf.Sin(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Down counterclockwise
		case 11:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.y<3) {
						child.Rotate(0,-3,0,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Cos(rad)*1.4142,child.position.y,Mathf.Sin(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Down clockwise
		case 12:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.y<3) {
						child.Rotate(0,3,0,Space.World);
						rad = Mathf.PI*((45-(cont*3)+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Cos(rad)*1.4142,child.position.y,Mathf.Sin(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Left counterclockwise
		case 13: 
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.x>0) {
						child.Rotate(-3,0,0,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(child.position.x,Mathf.Sin(rad)*1.4142+3,Mathf.Cos(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Left clockwise
		case 14: 
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.x>0) {
						child.Rotate(3,0,0,Space.World);
						rad = Mathf.PI*((45-cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(child.position.x,Mathf.Sin(rad)*1.4142+3,Mathf.Cos(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Right counterclockwise
		case 15: 
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.x<0) {
						child.Rotate(-3,0,0,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(child.position.x,Mathf.Sin(rad)*1.4142+3,Mathf.Cos(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		// Right clockwise
		case 16: 
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.x<0) {
						child.Rotate(3,0,0,Space.World);
						rad = Mathf.PI*((45-cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(child.position.x,Mathf.Sin(rad)*1.4142+3,Mathf.Cos(rad)*1.4142);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		case 17:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.z<0) {
						child.Rotate(0,0,-3,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Sin(rad)*1.4142,3+Mathf.Cos(rad)*1.4142,child.position.z);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		case 18:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.z<0) {
						child.Rotate(0,0,3,Space.World);
						rad = Mathf.PI*((45-cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Sin(rad)*1.4142,Mathf.Cos(rad)*1.4142+3,child.position.z);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		case 19:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.z>0) {
						child.Rotate(0,0,-3,Space.World);
						rad = Mathf.PI*((45+cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Sin(rad)*1.4142,Mathf.Cos(rad)*1.4142+3,child.position.z);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;
		case 20:
			if (cont!=31) {
				i=0;
				for (var child : Transform in transform) {
					if (child.position.z>0) {
						child.Rotate(0,0,3,Space.World);
						rad = Mathf.PI*((45-cont*3+(90*vals[i]))%360)/180.0;
						child.position = Vector3(Mathf.Sin(rad)*1.4142,Mathf.Cos(rad)*1.4142+3,child.position.z);
						i++;
					}
				}
				cont++;
			}
			else {
				MoveCamera.rotationDirection=0;
			}
			break;			
		case 0:
			if (Input.GetKeyUp (KeyCode.RightArrow)) {
				cont=1;
				MoveCamera.rotationDirection=1;
			}
			if (Input.GetKeyUp (KeyCode.LeftArrow)) {
				cont=1;
				MoveCamera.rotationDirection=2;
			}
			if (Input.GetKeyUp("[2]")) {
				cont=1;
				MoveCamera.rotationDirection=5;
			}
			if (Input.GetKeyUp("[8]")) {
				cont=1;
				MoveCamera.rotationDirection=6;
			}
			if (Input.GetKeyUp("[6]")) {
				cont=1;
				MoveCamera.rotationDirection=7;
			}
			if (Input.GetKeyUp("[4]")) {
				cont=1;
				MoveCamera.rotationDirection=8;
			}
			if (Input.GetKeyUp("w")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.y>3) {
						vals[i]=(child.position.z>0)?((child.position.x>0)?0:1):(child.position.x<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=9;
			}
			if (Input.GetKeyUp("e")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.y>3) {
						vals[i]=(child.position.z>0)?((child.position.x>0)?0:1):(child.position.x<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=10;
			}
			if (Input.GetKeyUp("x")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.y<3) {
						vals[i]=(child.position.z>0)?((child.position.x>0)?0:1):(child.position.x<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=11;
			}
			if (Input.GetKeyUp("z")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.y<3) {
						vals[i]=(child.position.z>0)?((child.position.x>0)?0:1):(child.position.x<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=12;
			}
			if (Input.GetKeyUp("a")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.x>0) {
						vals[i]=(child.position.y>3)?((child.position.z>0)?0:1):(child.position.z<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=13;
			}
			if (Input.GetKeyUp("s")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.x>0) {
						vals[i]=(child.position.y>3)?((child.position.z>0)?0:1):(child.position.z<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=14;
			}
			if (Input.GetKeyUp("f")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.x<0) {
						vals[i]=(child.position.y>3)?((child.position.z>0)?0:1):(child.position.z<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=15;
			}
			if (Input.GetKeyUp("d")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.x<0) {
						vals[i]=(child.position.y>3)?((child.position.z>0)?0:1):(child.position.z<0)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=16;
			}
			if (Input.GetKeyUp(KeyCode.Tab)) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.z<0) {
						vals[i]=(child.position.x>0)?((child.position.y>3)?0:1):(child.position.y<3)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=17;
			}
			if (Input.GetKeyUp("r")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.z<0) {
						vals[i]=(child.position.x>0)?((child.position.y>3)?0:1):(child.position.y<3)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=18;
			}
			if (Input.GetKeyUp(KeyCode.LeftShift)) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.z>0) {
						vals[i]=(child.position.x>0)?((child.position.y>3)?0:1):(child.position.y<3)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=19;
			}
			if (Input.GetKeyUp("c")) {
				cont=1;
				i=0;
				vals = new float[4];
				for (var child : Transform in transform) {
					if (child.position.z>0) {
						vals[i]=(child.position.x>0)?((child.position.y>3)?0:1):(child.position.y<3)?2:3;
						i++;
					}
				}
				MoveCamera.rotationDirection=20;
			}
			break;
		default: 
			break;
	}

}
