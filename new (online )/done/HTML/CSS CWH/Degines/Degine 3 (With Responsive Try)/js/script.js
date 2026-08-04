let isActive = false;

document.getElementById('navbutton').addEventListener('click', () => {
  const navmobile = document.getElementById('navmobile'); 
  if (!isActive) {
    console.log('First click - Active');
    navmobile.style.display = 'flex';
    isActive = true;
  } else {
    console.log('Second click - Inactive');
    navmobile.style.display = 'none';
    isActive = false;
  }
});