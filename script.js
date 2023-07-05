function copyCode() {
    const codeElement = document.querySelector('00020126330014br.gov.bcb.pix011124056948836520400005303986540560.005802BR5925Vitor Gabriel Lima Antune6009Sao Paulo62070503***6304F849');
    const codeText = codeElement.textContent;
  
    navigator.clipboard.writeText(codeText)
      .then(() => {
        alert('Código copiado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao copiar o código:', error);
      });
  }

  // Adiciona uma classe de "shake" ao botão do WhatsApp
function shakeButton() {
  var button = document.querySelector('.whatsapp-button');
  button.classList.add('shake');
}

// Remove a classe de "shake" do botão do WhatsApp
function stopShakingButton() {
  var button = document.querySelector('.whatsapp-button');
  button.classList.remove('shake');
}

// Exemplo de notificação (chame essa função quando quiser exibir a notificação)
function showNotification() {
  shakeButton(); // Ativa o efeito de tremer
  setTimeout(stopShakingButton, 1000); // Remove o efeito após 1 segundo
}

// Exemplo de uso: chame a função showNotification() para exibir a notificação

  