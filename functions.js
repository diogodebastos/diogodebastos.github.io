var audio = $("#audio")[0];
$("a").mouseenter(function() {
  audio.play();
});

$("a").mouseout(function() {
  audio.pause();
});