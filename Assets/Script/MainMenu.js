#pragma strict
var HighScore : UnityEngine.UI.Text;

function Update () {
	HighScore.text = "Highscore: " + PlayerPrefs.GetInt("Highscore").ToString();
}

function StartGame () {
	Application.LoadLevel("Game");
}

/* 
This is probably the shortest code I have ever written for Unity!
It is a fucking Main Menu after all :)
7/25/17 1:28 AM
*/