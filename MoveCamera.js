var angleDegrees : int;
var gamma : float;
var otherAngle : int;
var toReach : int;
static var rotationDirection = 0;
var angleRadiants : float;
var cubeCenter;
static var cameraX : float;
static var cameraZ : float;

function Start () {
	angleDegrees = 30;
	otherAngle = 39;
	rotationDirection = 0;
	angleRadiants=0;
	transform.position = Vector3(4, 9.4, 6.8);
	cubeCenter = gameObject.Find("cubeCenter").transform;
	transform.LookAt(cubeCenter);
}

function Update () {
	switch (rotationDirection) {
		case 3:
			otherAngle-=3;
			angleRadiants = Mathf.PI*otherAngle/180.0;
			gamma = Mathf.Abs (Mathf.Atan (transform.position.x/transform.position.z)); // Angolo tra X-Z
			transform.position = Vector3 (Mathf.Sign(transform.position.x)*Mathf.Cos(angleRadiants)*10.2*Mathf.Sin(gamma),3+Mathf.Sin(angleRadiants)*10.2,Mathf.Cos(angleRadiants)*10.2*Mathf.Cos(gamma)*Mathf.Sign(transform.position.z));
			transform.LookAt(cubeCenter);
			if (otherAngle<=-39) {
				rotationDirection=0;
			}
			break;
		case 4:
			otherAngle+=3;
			angleRadiants = Mathf.PI*otherAngle/180.0;
			gamma = Mathf.Abs(Mathf.Atan (transform.position.x/transform.position.z)); // Angolo tra X-Z
			transform.position = Vector3 (Mathf.Sign(transform.position.x)*Mathf.Cos(angleRadiants)*10.2*Mathf.Sin(gamma),3+Mathf.Sin(angleRadiants)*10.2,Mathf.Sign(transform.position.z)*Mathf.Cos(angleRadiants)*10.2*Mathf.Cos(gamma));
			transform.LookAt(cubeCenter);
			if (otherAngle>=39) {
				rotationDirection=0;
			}
			break;
		case 0:
			if (Input.GetKeyUp (KeyCode.DownArrow)) {
				if (transform.position.y>0) {
					rotationDirection=3;
				}
			}
			else if (Input.GetKeyUp (KeyCode.UpArrow)) {
				if (transform.position.y<0) {
					rotationDirection=4;
				}
			}
		default:
			break;
	}
	cameraX = transform.position.x;
	cameraZ = transform.position.z;
}
