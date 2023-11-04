function verstuurBericht() 
{
    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const bericht = document.getElementById("bericht").value;

    if (naam && email && bericht)
    {
        console.log("Naam: " + naam);
        console.log("E-mail: " + email);
        console.log("Bericht: " + bericht);

        alert("Bericht verstuurd! Bedankt, " + naam + "!");
    } else 
    {
        alert("Vul alle velden in alstublieft.");
    }
}