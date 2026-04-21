(function () {
  const copyBtn   = document.getElementById('imlt_copyBtn');
  const copyIcon  = document.getElementById('imlt_copyIcon');
  const checkIcon = document.getElementById('imlt_checkIcon');
  const email     = document.getElementById('imlt_emailAddr').textContent.trim();

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

