window.onscroll = function() 
{
    scrollFunction();
};
  
  function scrollFunction() 
  {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) 
    {
      let companyNames = document.getElementsByClassName("company-name");
      let companySlogans = document.getElementsByClassName("company-slogan");
      
      for (let i = 0; i < companyNames.length; i++) {
        companyNames[i].style.fontSize = "30px";
      }
  
      for (let i = 0; i < companySlogans.length; i++) {
        companySlogans[i].style.fontSize = "15px";
      }
    } 
    else {
      let companyNames = document.getElementsByClassName("company-name");
      let companySlogans = document.getElementsByClassName("company-slogan");
      
      for (let i = 0; i < companyNames.length; i++) {
        companyNames[i].style.fontSize = "60px";
      }
  
      for (let i = 0; i < companySlogans.length; i++) {
        companySlogans[i].style.fontSize = "30px";
      }
    }
  }