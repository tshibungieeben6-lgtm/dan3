document.addEventListener('DOMContentLoaded', () => {
  // ⚠️ Indiquez votre numéro avec le indicatif pays (ex: 33612345678 pour la France)
  const PHONE_NUMBER = "243899488937";

  const yesBtn = document.getElementById('yesBtn');
  const againBtn = document.getElementById('againBtn');
  const question = document.getElementById('question');
  const subtext = document.getElementById('subtext');

  function sendWhatsAppMessage(messageText) {
    if (PHONE_NUMBER === "243899488937") return; // Sécurité si le numéro n'est pas rempli
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
   
    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
  }

  // Option 1 : "Oui, je te pardonne" (AVEC confettis)
  if (yesBtn) {
    yesBtn.onclick = function() {
      const buttonsContainer = document.querySelector('.buttons');
      if (buttonsContainer) buttonsContainer.style.display = 'none';

      const heartIcon = document.querySelector('.heart-icon');
      if (heartIcon) heartIcon.style.display = 'none';

      if (question) question.textContent = "C'est noté.";
      if (subtext) subtext.textContent = "Merci d'avoir répondu franchement.";

      // Confettis
      if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }

      // Envoi du message WhatsApp après un très court délai
      setTimeout(() => {
        sendWhatsAppMessage("Oui, je te pardonne.");
      }, 500);
    };
  }

  // Option 2 : "Je réfléchis" (SANS confettis)
  if (againBtn) {
    againBtn.onclick = function() {
      const buttonsContainer = document.querySelector('.buttons');
      if (buttonsContainer) buttonsContainer.style.display = 'none';

      const heartIcon = document.querySelector('.heart-icon');
      if (heartIcon) heartIcon.style.display = 'none';

      if (question) question.textContent = "C'est compris.";
      if (subtext) subtext.textContent = "Prends le temps qu'il te faut.";

      // Envoi du message WhatsApp
      setTimeout(() => {
        sendWhatsAppMessage("J'ai besoin de temps pour réfléchir.");
      }, 500);
    };
  }
});