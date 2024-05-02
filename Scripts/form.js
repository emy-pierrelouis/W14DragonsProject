// Disclaimer section
function agreeForm()
{
    if (document.getElementById('agree-age').checked)
    {
        document.getElementById('selection').style.display = 'block' // show
        document.getElementById('persoInfo').style.display = 'block'
        document.getElementById('paymentInfo').style.display = 'block'
        document.getElementById('docuInfo').style.display = 'block'
        document.getElementById('termsAndcons').style.display = 'block'
        document.getElementById('submitForm').style.display = 'block'
    }
}

function disagreeForm()
{
    if (document.getElementById('disagree-age').checked)
    {
        alert("Please be aware that completion of the purchase form is contingent upon your understanding of the provided disclaimer. Failure to do so will prevent the submission of the form.")
        document.getElementById('selection').style.display = 'none' // hide
        document.getElementById('persoInfo').style.display = 'none'
        document.getElementById('paymentInfo').style.display = 'none'
        document.getElementById('docuInfo').style.display = 'none'
        document.getElementById('termsAndcons').style.display = 'none'
        document.getElementById('submitForm').style.display = 'none'
    }
}