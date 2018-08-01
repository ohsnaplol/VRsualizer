#pragma strict

public var speed : float = 5f;

function Update () {
  transform.Rotate(Vector3.back, speed);
}
