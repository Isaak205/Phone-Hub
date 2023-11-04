// Gebruikersnaam en wachtwoord
const juisteGebruikersnaam = "phonehub";
const juistWachtwoord = "cornhub";

function inloggen() 
{
    const invoerGebruikersnaam = document.getElementById("gebruikersnaam").value;
    const invoerWachtwoord = document.getElementById("wachtwoord").value;

    if (invoerGebruikersnaam === juisteGebruikersnaam && invoerWachtwoord === juistWachtwoord) 
    {
        // Inloggen geslaagd
        alert("Inloggen geslaagd!");
    } 
    else 
    {
        // Onjuiste gegevens
        alert("Onjuiste gebruikersnaam of wachtwoord.");
    }
}