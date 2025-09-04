function showHome() {
  hideAllSections();
  document.getElementById('home').style.display = 'block';
  document.getElementById('highlight-photo').style.display = 'block';
}

function showAbout() {
  hideAllSections();
  document.getElementById('about').style.display = 'block';
  document.getElementById('highlight-photo').style.display = 'none';
}

function showAchievements() {
  hideAllSections();
  document.getElementById('achievements').style.display = 'block';
  document.getElementById('highlight-photo').style.display = 'none';
}

function showContact() {
  hideAllSections();
  document.getElementById('contact').style.display = 'block';
  document.getElementById('highlight-photo').style.display = 'none';
}

function showHobbies() {
  hideAllSections();
  document.getElementById('hobbies').style.display = 'block';
  document.getElementById('highlight-photo').style.display = 'none';
}

function hideAllSections() {
  document.querySelectorAll('.section-content').forEach(sec => {
    sec.style.display = 'none';
  });
}
 function goBack() {
    // Add your navigation logic here
    document.getElementById("hobbies").style.display = "none";
    // Show previous section if needed
  }