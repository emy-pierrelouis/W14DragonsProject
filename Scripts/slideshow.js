let breederIndex = 1;
showBreeder(breederIndex);

function setBreeder(n)
{
    showBreeder(breederIndex += n);
}

function currentBreeder(n)
{
    showBreeder(breederIndex = n);
}

function showBreeder(n)
{
    let i;
    let breeder = document.getElementsByClassName("collection");

    if (n > breeder.length)
    {
        breederIndex = 1;
    }
    if (n < 1)
    {
        breederIndex = breeder.length;
    }

    for (i = 0; i < breeder.length ; i++)
    {
        breeder[i].style.display = "none";
    }

    breeder[breederIndex-1].style.display = "block";
}