var degrees = 10.0;
var target : Transform;

function Update() {

     //transform.RotateAround (target.position, Vector3.up, degrees);
     //transform.RotateAround (target.position, Vector3.forward, degrees);

///

  var spectrum : float[] = AudioListener.GetSpectrumData(1024, 0, FFTWindow.Hamming);

  /*
  c1 = 64hz
  c3 = 256hz
  c4 = 512hz
  c5 = 1024
  */

  var c1 : float = spectrum[3] + spectrum[2] + spectrum[4];
  var c3 : float = spectrum[11] + spectrum[12] + spectrum[13];
  var c4 : float = spectrum[22] + spectrum[23] + spectrum[24];
  var c5 : float = spectrum[44] + spectrum[45] + spectrum[46] + spectrum[47] + spectrum[48] + spectrum[49];

  //Debug.Log("Log: " + c1);

  var DynamicOrb : GameObject[] = GameObject.FindGameObjectsWithTag("DynamicOrb");
  for(var i = 0; i < DynamicOrb.length; i++) {
    switch (DynamicOrb[i].name) {
      case "RunHiSphere (2)":
      //Rectangle[i].transform.localScale = Vector3(c1,c1,c1) * 100;
      transform.RotateAround (target.position, Vector3.up, ((c1 + c3  + c4) + .4));
      transform.RotateAround (target.position, Vector3.forward, ((c1 + c3 + c4) + .4));
      break;
      /*
      case "RunHiSphere (1)":
      //Rectangle[i].transform.localScale = Vector3(c1,c1,c1) * 100;
      transform.RotateAround (target.position, Vector3.up, ((c1 + c3  + c4) + .001));
      transform.RotateAround (target.position, Vector3.forward, ((c1 + c3 + c4) + .001));
      break;
      /*
      case "RunHiSphere (2)" :
      transform.RotateAround (target.position, Vector3.up, (.00001));
      transform.RotateAround (target.position, Vector3.forward, (.00001));
      break;*/
    }
  }
}
