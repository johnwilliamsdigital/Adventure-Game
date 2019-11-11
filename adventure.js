
var nodes = [];

function Node (id, text, choiceOne, linkOne, choiceTwo, linkTwo, choiceThree, linkThree) {
	this.id = id;
	this.text = text;
	this.choiceOne = choiceOne;
	this.linkOne = linkOne;
	this.choiceTwo = choiceTwo;
	this.linkTwo = linkTwo;
	this.choiceThree = choiceThree;
	this.linkThree = linkThree;
	
	nodes.push(this);
}

function AddNode (id, text, choiceOne, linkOne, choiceTwo, linkTwo, choiceThree, linkThree) {
	var newNode = new Node (id, text, choiceOne, linkOne, choiceTwo, linkTwo, choiceThree, linkThree);
	nodes.push(newNode);
}


function DisplayNode (id) {
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].id == id) {
			var outputfield = document.getElementById("output");
			outputfield.innerHTML = nodes[i].text;
			
			var button1 = document.getElementById("button-1");
			button1.innerHTML = nodes[i].choiceOne;
			
			var button2 = document.getElementById("button-2");
			button2.innerHTML = nodes[i].choiceTwo;
		
			var button3 = document.getElementById("button-3");
			button3.innerHTML = nodes[i].choiceThree;
	
			
			var x = i;
			
			button1.onclick=function () {
				DisplayNode  (nodes[x].linkOne);
			};
			
			button2.onclick=function () {
				DisplayNode  (nodes[x].linkTwo);
			};
			
			button3.onclick=function () {
				DisplayNode  (nodes[x].linkThree);
			};
		
			
			/*
			Insert code to display text in the output field and buttons. Make sure buttons are set to call DisplayNode with the CORRECT ID (in other words, the ID of the next node that the action leads to).
			*/
		}
		
	}
	
}


AddNode(1, "Once upon a time...", "there was a frog", 2, "there was a dog", 3, "there was a prince", 4);

AddNode(2/*there was a frog*/, "he leapfrogged into a lake and then", "he got eaten and croaked by the loch ness monster", 5, "he hopped and saved a drowning persons life", 6, "he realized he could fly and not just hop", 7);

AddNode(3/*there was a dog*/, "he wagged his tail and jumpped into a lake and then", "he barked at the loch ness monster", 5, "he doggy paddled and saved a drowning persons life", 6, "he realized he could fly", 7);

AddNode(4/*there was a prince*/, "he high dived into a lake and then", "he got swalloed whole by the loch ness monster", 5, "he heroicly saved a drowning persons life", 6, "he realized he could fly like an angel", 7);

AddNode(5/*he got eaten by the loch ness monster*/, "the end!","and jumped for joy, the end! Click to restart",1,"was disgusted and walked away! the end! Click to restart",1, "married him and lived happily ever after! the end! Click to restart",1);

AddNode(6/*"he saved a drowning persons life"*/, "the end!","and jumped for joy, the end! Click to restart",1,"was disgusted and walked away! the end! Click to restart",1, "married him and lived happily ever after! the end! Click to restart",1);

AddNode(7/*he realized he could fly*/, "the end!","and jumped for joy, the end! Click to restart",1,"was disgusted and walked away! the end! Click to restart",1, "married him and lived happily ever after! the end! Click to restart",1);




/*AddNode(8,"//continue story here", "the princess saw this and ", "was disgusted and walked away", 9, "married him and lived happily ever after", 10);

AddNode(9,"//continue story here", "the princess saw this and ", "married him and lived happily ever after", 10);

AddNode(10, "//continue story here", "jumped for joy", 8, "was disgusted and walked away", 9);*/


DisplayNode(1);


