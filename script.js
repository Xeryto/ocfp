let images = document.querySelectorAll('#card-img');
let btn = document.querySelectorAll('#black');
let btnPurp = document.querySelectorAll('#purple');
for (let i = 0; i < btn.length; i++) {
	console.log(btn[i]);
	btn[i].addEventListener("click", function(evt) {
		images[i*2].classList.remove('hidden');
		images[i*2+1].classList.add('hidden');
	});
}
for (let i = 0; i < btnPurp.length; i++) {
	console.log(btn[i]);
	btnPurp[i].addEventListener("click", function(evt) {
		images[i*2+1].classList.remove('hidden');
		images[i*2].classList.add('hidden');
	});
}