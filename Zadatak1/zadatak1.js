var odabirKorisnika;
var odabirRacunala;
var rezultat;
var randBroj;
var rezultatKorisnika = 0;
var rezultatRacunala = 0;

const ispisiRezultat = document.getElementById('rezultat');
const odabranoRacunala = document.getElementById('odabirRacunala');
const odabranoKorisnika = document.getElementById('odabirKorisnika');
const resetTipka = document.getElementById('resetIgru');
const moguciOdabir = document.querySelectorAll('.odabiri');
const brojKorisnika = document.getElementById('rezultatKorisnika');
const brojRacunala = document.getElementById('rezultatRacunala');

moguciOdabir.forEach(moguciOdabir => moguciOdabir.addEventListener('click', x =>
{
  odabirKorisnika = x.target.id;
  randBroj = Math.floor(Math.random() * 3) + 1;
  generirajOdabirRacunala();
  usporediOdabire();
  odabranoRacunala.innerHTML = odabirRacunala;
  odabranoKorisnika.innerHTML = odabirKorisnika;
  ispisiRezultat.innerHTML = rezultat;
  brojKorisnika.innerHTML = rezultatKorisnika;
  brojRacunala.innerHTML = rezultatRacunala;
}));

function generirajOdabirRacunala()
{
  if(randBroj == 1)
  {
    odabirRacunala = 'kamen';
  }
  else if(randBroj == 2)
  {
    odabirRacunala = 'skare';
  }
  else if(randBroj == 3)
  {
    odabirRacunala = 'papir';
  }
}
function resetIgru(){
  odabirRacunala = '?';
  odabirRacunala.innerHTML = odabirRacunala;
  randBroj = 0;
  odabirKorisnika = '?';
  odabirKorisnika.innerHTML = odabirKorisnika;
  ispisiRezultat.innerHTML = '?';
  rezultatKorisnika = 0;
  rezultatRacunala = 0;
  brojKorisnika.innerHTML = rezultatKorisnika;
  brojRacunala.innerHTML = rezultatRacunala;
}

function usporediOdabire(){
  if(odabirKorisnika == odabirRacunala)
  {
    rezultat = "Izjednaceno!";
  }
  else if (odabirKorisnika == 'skare' && odabirRacunala == 'papir')
  {
    rezultat = "POBJEDA!!!";
    rezultatKorisnika = rezultatKorisnika + 1;
  }
   else if (odabirKorisnika == 'papir' && odabirRacunala == 'kamen')
  {
    rezultat = "POBJEDA!!!";
    rezultatKorisnika = rezultatKorisnika + 1;
  }
   else if (odabirKorisnika == 'kamen' && odabirRacunala == 'skare')
  {
    rezultat = "POBJEDA!!!";
    rezultatKorisnika = rezultatKorisnika + 1;
  }
   else if (odabirKorisnika == 'kamen' && odabirRacunala == 'papir')
  {
    rezultat = "Izgubio si.";
    rezultatRacunala = rezultatRacunala + 1;
  }
   else if (odabirKorisnika == 'papir' && odabirRacunala == 'skare')
  {
    rezultat = "Izgubio si.";
    rezultatRacunala = rezultatRacunala + 1;
  }
   else if (odabirKorisnika == 'skare' && odabirRacunala == 'kamen')
  {
    rezultat = "Izgubio si.";
    rezultatRacunala = rezultatRacunala + 1;
  }
}