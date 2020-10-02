function copying(id, message) {
	let copyText = document.getElementById(id);
	let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = copyText.value;
    dummy.select();
    document.execCommand("copy");
	document.body.removeChild(dummy);

	copyingText(message, true);
  }

  function copyingText(message, i) {
	let mess = document.getElementById(message);
	let opacity = Number(mess.style.opacity);
	if(i) {
		if(opacity < 1) {
			mess.style.opacity = opacity + 0.1;
			setTimeout("copyingText('" + message + "', true)", 200);
		} else {
			setTimeout("copyingText('" + message + "', false)", 1000);
		}
	} else {
		if(opacity > 0) {
			mess.style.opacity = opacity - 0.1;
			setTimeout("copyingText('" + message + "', false)", 200);
		}
	}
  }