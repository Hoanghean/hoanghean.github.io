if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
	console.log("[PWA Builder Oke]");
} else {
	navigator.serviceWorker
	  .register("sw.js", {
		scope: "./"
	  })
	  .then(function (reg) {
		console.log("[PWA Builder Oke]");
	});
  }
}