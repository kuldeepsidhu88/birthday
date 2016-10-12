
var items = [
			"hudddddddd !!!",
			"jaise har chamakti cheez sona nai hoti, vaise har button next button nai hota...",
			"eeeeehhhhe heeeinnnnn... eee ee heein",
			"Titanic !!!",
			"lolyalty service... proocess redemption transaction..",
			"burrrrfiiiii burrrfiiiii... cooppee.... coppee",
			"hamari kabliyaaaat pe shakk...",
			"guuudddduu morrrrning",
			"gulaabooo ! <3 ",
			"going to coffee holding hands... *really miss that :(",
			"4 bajj gye lekin nini abhi baki hai...",
			"hum CBI se hai asli waleee...",
			"maaa ki aaankh...",
			"khauuu khaauuu... khauuu khaauuu...",
			"naughtyyyyy nights !!!",
			"mottoinkitchen.com",
			"technniiiicallll ban rahi hai.... masterrrniii ban gyi...",
			"brida..brida... light on shoulder of soulmate...",
			"aaaaye haaaye main marrr jawa gudd khaa ke...",
			"loggginnnn loggginnnn... burrrfiiii burrrfiiii",
			"can you check the logs... 8180... 8280... PROD...",
			"kabhi jo baaaadal barse...",
			"viddddora.. vidddddora..",
			"mottography [_]",
			"padega kaaaaaan keee niche... ",
			"european project... LONDON BRIDGE !!!",
			"lakdi ki kaaathi... kaathi pe ghoda..."
			];
var index = 0;
var flag = false;
function start(){
	if(index==0){
		items = shuffle(items);
		$("#play-button").text('Next');
		next(index);
		index++;
	} else  {
		next(index);
		index++;
	}
	if(flag){
		$("div img").css('display','block');
		var textColor = randomColor({luminosity: 'dark'});
		$('#line').css('color',textColor);
		$('h2#line').text('Happy Birthday Guddu !!!');
		$("#play-button").css('display','none');
	}
	if(index==28){
		$('h2#line').text('What were these ? 27 one-liners. Guess why 27???');
		$("#play-button").text('Final');
		console.log(index);
		flag = true;
		index++;
	}
	
}

function next(index){
	var textColor = randomColor({luminosity: 'dark'});
	
	$('h2#line').text(items[index]);
	$('#line').css('color',textColor);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}