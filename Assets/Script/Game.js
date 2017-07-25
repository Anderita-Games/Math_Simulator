#pragma strict
var Score_Text : UnityEngine.UI.Text;
var HighScore : UnityEngine.UI.Text;
var Question : UnityEngine.UI.Text;
var Answer_Text : UnityEngine.UI.Text;

var Score : int;
var Number_1 : float;
var Number_2 : float;
var Answer : float;

var Button_Submit : GameObject;
var Button_Restart : GameObject;

function Start () {
	Equation_Creator();
	Button_Restart.SetActive(false);
}

function Update () {
	if (Score > PlayerPrefs.GetInt("Highscore")) {
		PlayerPrefs.SetInt("Highscore", Score);
	}

	Score_Text.text = "Score: " + Score.ToString();
	HighScore.text = "Highscore: " + PlayerPrefs.GetInt("Highscore").ToString();
}

function Equation_Creator () {
	Number_1 = Random.Range(1, 100);
	Number_2 = Random.Range(1, 100);
	Answer = Number_1 + Number_2;
	Question.text = "What does " + Number_1.ToString() + " + " + Number_2.ToString() + " equal?";
}

function Submit_Answer () {
	if (Answer_Text.text == Answer.ToString()) {
		Score++;
		Equation_Creator();
	}else {
		Question.text = "You got the wrong answer! The answer was " + Answer.ToString();
		Button_Restart.SetActive(true);
		Button_Submit.SetActive(false);
	}
	Debug.Log(Answer_Text);
	Debug.Log(Answer.ToString());
}

function Restart () {
	Application.LoadLevel("Game");
}