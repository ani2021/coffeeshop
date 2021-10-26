function ShowSideMenu()
{
  let sideNav = document.getElementById('sidemenu');
  if(sideNav.style.width === '0%' || sideNav.style.width == '')
  {
    sideNav.style.width = '25%';
    sideNav.style.top = '6%';
  }
  else
  {
    sideNav.style.width = '0%';
  }
}