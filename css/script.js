
  // Desabilita a exibição do menu de contexto do botão direito do mouse
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Desabilita o uso da tecla F12 para abrir o console do navegador e redireciona para outra página
  document.addEventListener('keydown', event => {
    if (event.key === 'F12') {
      event.preventDefault();
      window.location.href = "https://www.example.com"; // Substitua "https://www.example.com" pela URL da página que deseja redirecionar
    }
  });

  // Desabilita o uso do atalho Ctrl+Shift+I para abrir o console do navegador
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
    }
  });

  // Desabilita o uso do atalho Ctrl+U para abrir o console do navegador
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      window.location.href = "https://www.exemplo.com"; // substitua o link pela URL da página que você deseja redirecionar
    }
  });

   // Inclua a API do YouTube 
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Coloque o ID do vídeo do YouTube que você deseja exibir
  var videoID = "iHSpQQKSMYs";
  // Crie o player de vídeo do YouTube
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: videoID,
      playerVars: {
        'autoplay': 1, // Autoplay do vídeo
        'mute': 1, // Inicia o vídeo em modo mudo
        'controls': 0, // Esconde os controles do YouTube
        'disablekb': 1, // Desabilita o uso do teclado para controlar o vídeo
        'modestbranding': 1 // Remove o logo do YouTube do player
      },
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  // Função para iniciar o player assim que estiver pronto
  function onPlayerReady(event) {
    // Exibe o overlay de som ao iniciar o vídeo
    var muteOverlay = document.getElementById('mute-overlay');
    muteOverlay.style.display = 'flex';
    // Adiciona um evento de clique no botão de som do overlay
    var muteButton = document.getElementById('mute-button');
    muteButton.addEventListener('click', function() {
      // Remove o overlay de som, ativa o som do vídeo e reinicia o vídeo
      muteOverlay.style.display = 'none';
      player.unMute();
      player.seekTo(0);
    });
  }
// timer.js
function showBuyButtonWithDelay(delayInMinutes, delayInSeconds) {
  var totalTimeInMilliseconds = (delayInMinutes * 60000) + (delayInSeconds * 1000);

  setTimeout(function() {
    document.getElementById('buy-button').style.display = 'block';
  }, totalTimeInMilliseconds);
}


