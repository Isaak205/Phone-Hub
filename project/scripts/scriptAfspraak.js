function planAfspraak() 
{
    const naam = document.getElementById("naam").value;
    const datum = document.getElementById("datum").value;
    const tijd = document.getElementById("tijd").value;

    if (naam && datum && tijd) 
    {
        console.log("Afspraak gepland voor " + naam + " op " + datum + " om " + tijd);
        alert("Afspraak gepland voor " + naam + " op " + datum + " om " + tijd);
    } 
    else 
    {
        alert("Vul alle velden in alstublieft.");
    }
}