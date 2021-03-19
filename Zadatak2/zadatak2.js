var palindrom = function (rijec) {
    var editanaRijec = rijec.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var provjeraPalindroma = editanaRijec.split('').reverse().join('');
    if (editanaRijec == provjeraPalindroma)
    {
        alert(rijec + ' je palindrom');
    }
    else {
        alert(rijec + ' nije palindrom');
    }
}