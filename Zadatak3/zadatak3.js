function uspjeh() {
    if(document.getElementById('nizBrojeva').value==='' || document.getElementById('broj').value==='') { 
           document.getElementById('provjera').disabled = true;
       } else { 
           document.getElementById('provjera').disabled = false;
       }
   }

function provjera(){
const rjesenjeNiz = document.getElementById('rjesenje');
var niz = document.getElementById('nizBrojeva').value
                                                         .split(',')
                                                         .map(Number)
                                                         .sort(function(a, b) {
                                                             return b-a
                                                            });
        var trazeniBroj = document.getElementById('broj').value;
        var intTrazeniBroj = parseInt(trazeniBroj);
        var podudaranje = false;
        var suma = 0;
        var kombinacije = [];
        loop1:
            for (let i = 0; i < niz.length; i++) {
                loop2:
                    while (!podudaranje) {
                        suma += niz[i];
                        kombinacije.push(niz[i]);
                        if (suma > intTrazeniBroj){
                            suma -= niz[i];
                            kombinacije.pop();
                            break loop2;
                        } 
                        else if (suma == trazeniBroj){
                            podudaranje = !podudaranje
                            break loop1;
                        }
                    }
            }
            debugger;
                let brojKombinacija = kombinacije.length;
                if(kombinacije.length>9 && kombinacije.length<100) {
                    if (kombinacije.length/10 != 1)
                    {
                        switch (kombinacije.length%10) {
                            case 1:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broj. \n' + kombinacije : 'Kombinacija nije moguce';
                                case 2:
                                case 3:
                                case 4:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broja. \n' + kombinacije : 'Kombinacija nije moguce';
                            default:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' brojeva. \n' + kombinacije : 'Kombinacija nije moguce';
                        }
                    }
                    else {
                        return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' brojeva. \n' + kombinacije : 'Kombinacija nije moguce';
                    }
                }
                else if(kombinacije.length > 99) {
                    kombinacije.length = kombinacije.length%100;
                    if (kombinacije.length/10 != 1)
                    {
                        switch (kombinacije.length%10) {
                            case 1:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broj. \n' + kombinacije : 'Kombinacija nije moguce';
                                case 2:
                                case 3:
                                case 4:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broja. \n' + kombinacije : 'Kombinacija nije moguce';
                            default:
                                return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' brojeva. \n' + kombinacije : 'Kombinacija nije moguce';
                        }
                    }
                    else {
                        return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' brojeva. \n' + kombinacije : 'Kombinacija nije moguce';
                    }
                } 
                else {
                    switch (kombinacije.length) {
                        case 1:
                            return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broj. \n' + kombinacije : 'Kombinacija nije moguce';
                        case 2:
                        case 3:
                        case 4:
                            return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' broja. \n' + kombinacije : 'Kombinacija nije moguce';
                        default:
                            return rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + brojKombinacija +  ' brojeva. \n' + kombinacije : 'Kombinacija nije moguce';
                    }
                }

          /**  switch(kombinacije.length)
            {
                case 1:
                rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + kombinacije.length + ' broj.'+ '\n' + kombinacije : "Kombinacija nije moguca";
                break;

                case 2:
                case 3:
                case 4:
                case 5:
                rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + kombinacije.length + ' broja.'+ '\n' + kombinacije : "Kombinacija nije moguca";
                break;
                
                default:
                rjesenjeNiz.innerHTML = podudaranje ? 'Nadena kombinacija koristi ' + kombinacije.length + ' brojeva.' + '\n' + kombinacije : "Kombinacija nije moguca";
            }**/
}