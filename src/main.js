import './styles/main.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/responsive.css';
import { GameController } from './app/GameController.js';

window.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading');
  try {
    const game = new GameController();
    game.setMode('ai');
    document.getElementById('selDiff').value = 'easy';
    game.startGame();
    if (loading) loading.hidden = true;
  } catch (err) {
    console.error('Failed to initialize 3D chess arena:', err);
    if (loading) {
      loading.textContent = 'Could not load 3D graphics. Please make sure WebGL is enabled.';
    }
  }
});
