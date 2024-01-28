// Dark Mode Toggle Function
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('darkModeToggle');
  const sunMoon = document.getElementById('sunMoon');

  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    sunMoon.innerHTML = '&#x1F319;'; // Moon symbol
    setCookie('darkMode', 'enabled', 365);
  } else {
    body.classList.remove('dark-mode');
    sunMoon.innerHTML = '&#x2600;'; // Sun symbol
    setCookie('darkMode', 'disabled', 365);
  }
}

// Function to apply dark mode styles to iframe content
function applyDarkModeToIframe() {
  //const iframe = document.querySelector('iframe');
  const iframe = document.getElementById('tableFrame');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  // Apply dark mode styles to the iframe content
  const elements = iframeDoc.querySelectorAll('body, h1, h2, label, th, td, button');
  elements.forEach(element => {
    element.classList.toggle('dark-mode', document.body.classList.contains('dark-mode'));
  });
}

// Event listener for dark mode toggle
document.getElementById('darkModeToggle').addEventListener('change', function() {
  toggleDarkMode();
  applyDarkModeToIframe();
});

// Check and apply dark mode preference on initial load
window.addEventListener('load', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const sunMoon = document.getElementById('sunMoon');
  const darkModeCookie = getCookie('darkMode');

  if (darkModeCookie === 'enabled') {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
    sunMoon.innerHTML = '&#x1F319;'; // Moon symbol
  } else {
    darkModeToggle.checked = false;
    document.body.classList.remove('dark-mode');
    sunMoon.innerHTML = '&#x2600;'; // Sun symbol
  }

  applyDarkModeToIframe(); // Apply dark mode styles to the iframe on initial load
});
