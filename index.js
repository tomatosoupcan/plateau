function hexclick(id) {
  colorcount = document.getElementById('colorcount').value;
  vari = document.getElementById(id).classList[1];
  inner = 'i'+id.substr(1);
  if (colorcount == "two") {
	  if (vari == "bgwhite") {
		document.getElementById(inner).style.display = 'none';
		document.getElementById(id).classList.add("bggold");
		document.getElementById(id).classList.remove("bgwhite");
	  }
	  else if (vari == "bggold") {
		document.getElementById(id).classList.add("bgblack");
		document.getElementById(id).classList.remove("bggold");
	  }
	  else {
		document.getElementById(id).classList.add("bgwhite");
		document.getElementById(id).classList.remove("bgblack");
		document.getElementById(id).classList.remove("bgred");
		document.getElementById(id).classList.remove("bgblue");
		document.getElementById(id).classList.remove("bgpurple");
		document.getElementById(id).classList.remove("bggreen");
		document.getElementById(id).classList.remove("bggold");
		document.getElementById(inner).style.display = 'block';
	  }
  }
  else if (colorcount == "three") {
	  if (vari == "bgwhite") {
		document.getElementById(inner).style.display = 'none';
		document.getElementById(id).classList.add("bggold");
		document.getElementById(id).classList.remove("bgwhite");
	  }
	  else if (vari == "bggold") {
		document.getElementById(id).classList.add("bgblack");
		document.getElementById(id).classList.remove("bggold");
	  }
	  else if (vari == "bgblack") {
		document.getElementById(id).classList.add("bgred");
		document.getElementById(id).classList.remove("bgblack");
	  }
	  else {
		document.getElementById(id).classList.add("bgwhite");
		document.getElementById(id).classList.remove("bgblack");
		document.getElementById(id).classList.remove("bgred");
		document.getElementById(id).classList.remove("bgblue");
		document.getElementById(id).classList.remove("bgpurple");
		document.getElementById(id).classList.remove("bggreen");
		document.getElementById(id).classList.remove("bggold");
		document.getElementById(inner).style.display = 'block';
	  }
  }
  else if (colorcount == "four") {
	  if (vari == "bgwhite") {
		document.getElementById(inner).style.display = 'none';
		document.getElementById(id).classList.add("bggold");
		document.getElementById(id).classList.remove("bgwhite");
	  }
	  else if (vari == "bggold") {
		document.getElementById(id).classList.add("bgblack");
		document.getElementById(id).classList.remove("bggold");
	  }
	  else if (vari == "bgblack") {
		document.getElementById(id).classList.add("bgred");
		document.getElementById(id).classList.remove("bgblack");
	  }
	  else if (vari == "bgred") {
		document.getElementById(id).classList.add("bggreen");
		document.getElementById(id).classList.remove("bgred");
	  }
	  else {
		document.getElementById(id).classList.add("bgwhite");
		document.getElementById(id).classList.remove("bgblack");
		document.getElementById(id).classList.remove("bgred");
		document.getElementById(id).classList.remove("bgblue");
		document.getElementById(id).classList.remove("bgpurple");
		document.getElementById(id).classList.remove("bggreen");
		document.getElementById(id).classList.remove("bggold");
		document.getElementById(inner).style.display = 'block';
	  }
  }
  else if (colorcount == "five") {
	  if (vari == "bgwhite") {
		document.getElementById(inner).style.display = 'none';
		document.getElementById(id).classList.add("bggold");
		document.getElementById(id).classList.remove("bgwhite");
	  }
	  else if (vari == "bggold") {
		document.getElementById(id).classList.add("bgblack");
		document.getElementById(id).classList.remove("bggold");
	  }
	  else if (vari == "bgblack") {
		document.getElementById(id).classList.add("bgred");
		document.getElementById(id).classList.remove("bgblack");
	  }
	  else if (vari == "bgred") {
		document.getElementById(id).classList.add("bggreen");
		document.getElementById(id).classList.remove("bgred");
	  }
	  else if (vari == "bggreen") {
		document.getElementById(id).classList.add("bgblue");
		document.getElementById(id).classList.remove("bggreen");
	  }
	  else {
		document.getElementById(id).classList.add("bgwhite");
		document.getElementById(id).classList.remove("bgblack");
		document.getElementById(id).classList.remove("bgred");
		document.getElementById(id).classList.remove("bgblue");
		document.getElementById(id).classList.remove("bgpurple");
		document.getElementById(id).classList.remove("bggreen");
		document.getElementById(id).classList.remove("bggold");
		document.getElementById(inner).style.display = 'block';
	  }
  }
  else if (colorcount == "six") {
	  if (vari == "bgwhite") {
		document.getElementById(inner).style.display = 'none';
		document.getElementById(id).classList.add("bggold");
		document.getElementById(id).classList.remove("bgwhite");
	  }
	  else if (vari == "bggold") {
		document.getElementById(id).classList.add("bgblack");
		document.getElementById(id).classList.remove("bggold");
	  }
	  else if (vari == "bgblack") {
		document.getElementById(id).classList.add("bgred");
		document.getElementById(id).classList.remove("bgblack");
	  }
	  else if (vari == "bgred") {
		document.getElementById(id).classList.add("bggreen");
		document.getElementById(id).classList.remove("bgred");
	  }
	  else if (vari == "bggreen") {
		document.getElementById(id).classList.add("bgblue");
		document.getElementById(id).classList.remove("bggreen");
	  }
	  else if (vari == "bgblue") {
		document.getElementById(id).classList.add("bgpurple");
		document.getElementById(id).classList.remove("bgblue");
	  }
	  else {
		document.getElementById(id).classList.add("bgwhite");
		document.getElementById(id).classList.remove("bgblack");
		document.getElementById(id).classList.remove("bgred");
		document.getElementById(id).classList.remove("bgblue");
		document.getElementById(id).classList.remove("bgpurple");
		document.getElementById(id).classList.remove("bggreen");
		document.getElementById(id).classList.remove("bggold");
		document.getElementById(inner).style.display = 'block';
	  }
  }
  
  
}

function clearBoard() {
  for (var i = 1; i < 38; i++) {
    id1 = 'h'+ i;
    id2 = 'i' + i;
    document.getElementById(id2).style.display = 'block';        
    document.getElementById(id1).classList.add("bgwhite");
	document.getElementById(id).classList.remove("bgblack");
	document.getElementById(id).classList.remove("bgred");
	document.getElementById(id).classList.remove("bgblue");
	document.getElementById(id).classList.remove("bgpurple");
	document.getElementById(id).classList.remove("bggreen");
	document.getElementById(id).classList.remove("bggold");
  }
}


function scaleload() {
	scale1 = (window.innerWidth-16)/document.getElementById("main").offsetWidth;
	scale2 = (window.innerHeight-16)/(document.getElementById("main").offsetHeight);

	scale = Math.min(scale1,scale2);

	//scale = 0.7;

	scalestring = 'scale(' + scale + ')';


	document.getElementById("main").style.transform = scalestring;
	document.getElementById("main").style.opacity = '1';   
}

function setBoard() {
  board = document.getElementById('boardtype').value;
  cardtype = document.getElementById('cardtype').value;
  if (board == '2 player') {workingarray = twoplayer;}
  else if (board == 'standard') {workingarray = standard;}
  else if (board == '3 player') {workingarray = threeplayer;}
  else if (board == '4 player') {workingarray = fourplayer;}
  else if (board == '5 player') {workingarray = fiveplayer;}
  for (var i = 1; i < 38; i++) {
    value = workingarray[i-1][0];
    type = workingarray[i-1][1];
    if (['C','V','D','R'].includes(value)) {
      value = getCard(value)+type;
    }
    document.getElementById('t'+i).innerText = value;
    if (type == 'r') {
      document.getElementById('t'+i).color = 'beige';
      document.getElementById('i'+i).style.background = 'darksalmon';
    }
    else if (type == 't') {
      document.getElementById('t'+i).color = 'darkblue';
      document.getElementById('i'+i).style.background = null;
      if (value == '★') {
        document.getElementById('t'+i).color = 'beige';
        document.getElementById('i'+i).style.background = 'darkblue';
      }
      continue;
    }
    else {
      document.getElementById('i'+i).style.background = null;
      if (type == '♦') {document.getElementById('t'+i).color = 'goldenrod';}
      else if (type == '♠') {document.getElementById('t'+i).color = 'blue';}
      else if (type == '♣') {document.getElementById('t'+i).color = 'green';}
      else if (type == '♥') {document.getElementById('t'+i).color = 'red';}
    }
  }
}

function getCard(rank) {
  if (cardtype == 'tarot') {
    return rank;
  }
  else {
    if (rank == 'C') {
      return 'C';
    }
    else if (rank == 'D') {
      return 'Q';
    }
    else if (rank == 'R') {
      return 'K';
    }
    else if (rank == 'V') {
      return 'J';
    }
  }
}

cardtype = 'standard';
board = 'standard';

twoplayer = 
[
  ['1','t'],
  ['15','r'],
  ['1','r'],
  ['14','r'],
  ['C','♥'],
  ['2','r'],
  ['13','r'],
  ['V','♦'],
  ['V','♠'],
  ['3','r'],
  ['D','♥'],
  ['★','t'],
  ['D','♣'],
  ['12','r'],
  ['R','♠'],
  ['R','♦'],
  ['4','r'],
  ['C','♣'],
  ['16','r'],
  ['C','♠'],
  ['11','r'],
  ['R','♥'],
  ['R','♣'],
  ['5','r'],
  ['D','♠'],
  ['21','t'],
  ['D','♦'],
  ['3','t'],
  ['V','♣'],
  ['V','♥'],
  ['2','t'],
  ['10','r'],
  ['C','♦'],
  ['6','r'],
  ['9','r'],
  ['7','r'],
  ['8','r']
];

standard = 
[
  ['1','t'],
  ['12','r'],
  ['1','r'],
  ['11','r'],
  ['C','♥'],
  ['2','r'],
  ['6','t'],
  ['V','♦'],
  ['V','♠'],
  ['2','t'],
  ['D','♥'],
  ['★','t'],
  ['D','♣'],
  ['10','r'],
  ['R','♠'],
  ['R','♦'],
  ['3','r'],
  ['C','♣'],
  ['13','r'],
  ['C','♠'],
  ['9','r'],
  ['R','♥'],
  ['R','♣'],
  ['4','r'],
  ['D','♠'],
  ['21','t'],
  ['D','♦'],
  ['5','t'],
  ['V','♣'],
  ['V','♥'],
  ['3','t'],
  ['8','r'],
  ['C','♦'],
  ['5','r'],
  ['7','r'],
  ['6','r'],
  ['4','t']
];

threeplayer = 
[
  ['1','t'],
  ['12','r'],
  ['1','r'],
  ['11','r'],
  ['C','♥'],
  ['2','r'],
  ['2','t'],
  ['V','♦'],
  ['V','♠'],
  ['13','r'],
  ['D','♥'],
  ['★','t'],
  ['D','♣'],
  ['10','r'],
  ['R','♠'],
  ['R','♦'],
  ['3','r'],
  ['C','♣'],
  ['17','r'],
  ['C','♠'],
  ['9','r'],
  ['R','♥'],
  ['R','♣'],
  ['4','r'],
  ['D','♠'],
  ['21','t'],
  ['D','♦'],
  ['16','r'],
  ['V','♣'],
  ['V','♥'],
  ['14','r'],
  ['8','r'],
  ['C','♦'],
  ['5','r'],
  ['7','r'],
  ['6','r'],
  ['15','r']
];

fourplayer = 
[
  ['1','t'],
  ['12','r'],
  ['1','r'],
  ['11','r'],
  ['C','♥'],
  ['2','r'],
  ['17','r'],
  ['V','♦'],
  ['V','♠'],
  ['13','r'],
  ['D','♥'],
  ['★','t'],
  ['D','♣'],
  ['10','r'],
  ['R','♠'],
  ['R','♦'],
  ['3','r'],
  ['C','♣'],
  ['18','r'],
  ['C','♠'],
  ['9','r'],
  ['R','♥'],
  ['R','♣'],
  ['4','r'],
  ['D','♠'],
  ['21','t'],
  ['D','♦'],
  ['16','r'],
  ['V','♣'],
  ['V','♥'],
  ['14','r'],
  ['8','r'],
  ['C','♦'],
  ['5','r'],
  ['7','r'],
  ['6','r'],
  ['15','r']
];

fiveplayer = 
[
  ['1','t'],
  ['12','r'],
  ['1','r'],
  ['11','r'],
  ['C','♥'],
  ['2','r'],
  ['2','t'],
  ['V','♦'],
  ['V','♠'],
  ['13','r'],
  ['D','♥'],
  ['★','t'],
  ['D','♣'],
  ['10','r'],
  ['R','♠'],
  ['R','♦'],
  ['3','r'],
  ['C','♣'],
  ['15','r'],
  ['C','♠'],
  ['9','r'],
  ['R','♥'],
  ['R','♣'],
  ['4','r'],
  ['D','♠'],
  ['21','t'],
  ['D','♦'],
  ['3','t'],
  ['V','♣'],
  ['V','♥'],
  ['14','r'],
  ['8','r'],
  ['C','♦'],
  ['5','r'],
  ['7','r'],
  ['6','r'],
  ['4','t']
];