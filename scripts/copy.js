const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
	document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

window.onclick = e => {
    console.log(e.target.innerText);
    if (e.target.className == "glyph")
    {
    	copyToClipboard(e.target.innerText);
    }
    
    if (e.target.className == "button demo-icon icon-sun")
    {
    	e.target.className = "button demo-icon icon-moon"
    	document.body.classList.toggle("dark-mode");
    }
    else if (e.target.className == "button demo-icon icon-moon")
    {
    	e.target.className = "button demo-icon icon-sun"
    	document.body.classList.toggle("dark-mode");
    }
}