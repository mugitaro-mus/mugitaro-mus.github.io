(function () {
  const copyBtn   = document.getElementById('copyBtn');
  const copyLabel = document.getElementById('copyLabel');
  const copyIcon  = document.getElementById('copyIcon');
  const checkIcon = document.getElementById('checkIcon');
  const email     = document.getElementById('emailAddr').textContent.trim();

  let resetTimer = null;

  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(email).then(function () {
      copyBtn.classList.add('copied');
      copyIcon.classList.add('hidden');
      checkIcon.classList.remove('hidden');
      copyLabel.textContent = 'Copied!';

      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        copyBtn.classList.remove('copied');
        copyIcon.classList.remove('hidden');
        checkIcon.classList.add('hidden');
        copyLabel.textContent = 'Copy';
      }, 2200);
    });
  });
})();
