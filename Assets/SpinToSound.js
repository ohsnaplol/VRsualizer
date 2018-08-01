#pragma strict

public var speed : float = 20f;
public var speedSlow : float = 1f;

function Update () {

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


    var Spinner : GameObject[] = GameObject.FindGameObjectsWithTag("Spinner");
    for(var i = 0; i < Spinner.length; i++) {
      switch (Spinner[i].name) {
        case "Spinner 1":
          transform.Rotate(Vector3.up, c5 * 5);
        break;
        case "Spinner hueg":
          //transform.Rotate(Vector3.up, speedSlow * c5);
        break;
      }
    }
  }
