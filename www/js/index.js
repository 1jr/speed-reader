function read()
  {
  var text = document.getElementById("input").value;
  /* replace newlines and tabs */
  text = text.replace(/\r|\n|\t/g,' ');
  /* replace double spaces */
  text = text.replace(/  +/g, ' ' );
  /* split every word */
  var words = text.split(" ");
  var i = 0;
  var delay = 0;
  writeStuff(words, i, delay);
  }

function writeStuff(words, i, delay)
  {
  if (i<words.length)
    {
      setTimeout(function(){
      document.getElementById("view").innerHTML = "<p>" + words[i] + "</p>" ;
      delay = words[i].length*30+50;
      i++;
      writeStuff(words, i, delay);
      },delay);
    }
  else
    {
      setTimeout(function(){
      location.reload();
      },delay+500);
    }
  }
