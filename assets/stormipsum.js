(function () {
  var storm = [];
  storm.push("There aren't the droids we're looking for. She'll be all right. Inform Lord Vader we have a prisoner.");
  storm.push("With pleasure. Move along. Move along. There she is! Set for stun! There's one. Set for stun. Take over.Traitor!! ");
  storm.push("Take over. You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me.");
  storm.push("You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me.");
  storm.push("You can go about your business. These aren't the droids we're looking for.");
  storm.push("We don't need to see his identification. Open the blast doors! With pleasure. Move along. Move along.");
  storm.push("These are not the droids we're looking  for. Open the blast doors! Traitor!! You stand guard.");
  storm.push("Give me regular reports please. With pleasure. Move along. Move along. Open the blast doors! Traitor!! ");
  storm.push("With pleasure. Move along. Move along. Open the blast doors! Look sir. Droids! These are not the droids we're looking  for.");
  storm.push("Close the blast doors! We don't need to see his identification. You can go about your business. Open the blast doors!");
  storm.push("Traitor!!");
  storm.push("Hmm. I don't know. My shift doesn't end for another hour.");
  storm.push("Find out where you're stationed next? Yeah, I'm getting shipped out to the Cairn Installation. Woah, nice assignment!  Sounds like a promotion may soon be on the way! I sure hope so.");
  storm.push("Move along. Move along. A disturbance was reported in Sector 10 this morning. What sort of disturbance? A droid set off the security system on the lower levels. That's the third time this month. Won't be the last time either.");
  storm.push("This is my last day on this shift. Oh yeah, where you moving? Sector 7 had an opening, so I applied. Not bad, should be a quiet last day");
  storm.push("With pleasure. Move along. Move along.");
  storm.push("The Death Star plans are not in the main computer.");
  storm.push("Open the blast doors! Move along. Move along. Look, sir -- droids.");
  storm.push("Alright, let's go. Traitor!! You stand guard. There aren't the droids we're looking for.");
  storm.push("Traitor!! You stand guard. There aren't the droids we're looking for. With pleasure. Move along. Move along.");
  storm.push("Alright men, load your weapons. Someone was in the pod. The tracks go off in this direction.");
  storm.push("We don't need to see his identification. Open the blast doors! Do you know what's going on?");
  storm.push("How long have you had these droids? Open the blast doors! Open the blast doors! Traitor!! ");
  storm.push("Maybe it's another drill. Open the blast doors! Traitor!! ");
  storm.push("Follow me. You were right about the Empire, Leia. Move along. Move along. You can go about your business. I guess I knew it all along. I'd like to come with you— if you'll have me.");
  storm.push("It's them. Blast them! Traitor! Follow me. You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me. These are not the droids we're looking  for.");
  storm.push("Follow me. You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me. Let me see your identification. Open the blast doors!");
  storm.push("She'll be alright. Inform Lord Vader we have a prisoner. Open the blast doors! Traitor!! ");
  storm.push("Follow me. You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me. Someone was in the pod. The tracks go off in this direction. Move along. Move along.");
  storm.push("You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me. Stop that ship! Blast them!");
  storm.push("These are not the droids we're looking  for. Open the blast doors! Traitor!! It's them. Blast them!Traitor!! Follow me. You were right about the Empire, Leia. I guess I knew it all along. I'd like to come with you— if you'll have me.");
  storm.push("All right, we'll check it out.");
  storm.push("All right, check that side of the street. It's secure. Move on to the next door.");

  var clipboard = new Clipboard('.btn-clippy');
  clipboard.on('success', function(e) {
    alert("Traitor!");
  });

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue ;
    }

    return array;
  }

  var button = document.getElementsByClassName('button');

  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
      e.preventDefault();

      var count = 0;
      var stormNew = '';
      var numberCurr = this.textContent || this.innerText;

      shuffle(storm);

      storm.forEach(function(el, index, array) {
        if(count == numberCurr) {
          return;
        } else {
          count = count + 1;
        }

        if(stormNew !== undefined) {
          stormNew = stormNew + storm[index] + "\n\n";
        }
      });

      stormContainer = document.getElementById('storm');
      stormContainer.innerHTML = stormNew;
    });
  };

})();