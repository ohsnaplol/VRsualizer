#pragma strict

function Start () {

}

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

    var Rectangle : GameObject[] = GameObject.FindGameObjectsWithTag("Rectangle");
    for(var i = 0; i < Rectangle.length; i++) {
        switch (Rectangle[i].name) {
            case "Sphere": Rectangle[i].transform.localScale = Vector3(c1,c1,c1) * 100; break;
            //case "RunHiSphere": Rectangle[i].transform.localScale = Vector3(c4,c4,c4) * 1000; break;
            case "c1": Rectangle[i].transform.localScale.y = c1 * 900; break;
            case "c1 (1)": Rectangle[i].transform.localScale.y = c1 * 900; break;
            case "c3": Rectangle[i].transform.localScale.y = c3 * 2000; break;
            case "c4": Rectangle[i].transform.localScale.y = c4 * 2500; break;
            case "c5": Rectangle[i].transform.localScale.y = c5 * 2500; break;
            case "Capsule": Rectangle[i].transform.localScale.x = c5 * 100; break;
            case "c1 (2)": Rectangle[i].transform.localScale.y = c1 * 500; break;
            case "c5 (1)": Rectangle[i].transform.localScale.x = c5 * 80; break;
        }
    }
}
