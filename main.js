var name

function submitted(){
	

	document.getElementById('submitbtn').style.display="none"
	document.getElementById('submittext').style.display="block"

}

function inputValue(){
	var name = document.getElementById('name').value
	if (name.length==0){
		toastr.warning('Name field is empty!')
	}
	else{
		submitted()
		toastr.success('Successfully submitted! ')
	}
}


document.getElementById('feedbackforms').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    var name = getInputVal("name");
    var track = getInputVal("track");
    var slide = getInputVal("slide");
    var message = getInputVal('message');
    //alert(name + track + slide);
    
    saveMessage(name, track, slide,  message);

}

function saveMessage(name, track, slide,  message){
	var messagesRef = firebase.database().ref('messages');
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    track:track,
    slide:slide,
    message:message
  });
}

function getInputVal(id){
  return document.getElementById(id).value;
}