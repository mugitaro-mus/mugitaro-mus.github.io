(function () {
  const copyBtn   = document.getElementById('copyBtn');
  const copyIcon  = document.getElementById('copyIcon');
  const checkIcon = document.getElementById('checkIcon');
  const email     = document.getElementById('emailAddr').textContent.trim();

  let resetTimer = null;

  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(email).catch(function () {
      prompt("Please copy the email address manually:", email);
    });

    copyBtn.classList.add('copied');
    copyIcon.classList.add('hidden');
    checkIcon.classList.remove('hidden');

    clearTimeout(resetTimer);
    resetTimer = setTimeout(function () {
      copyBtn.classList.remove('copied');
      copyIcon.classList.remove('hidden');
      checkIcon.classList.add('hidden');
    }, 2200);
  });
})();
