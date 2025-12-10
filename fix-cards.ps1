Write-Host "🎨 Corrigindo cards neon lado a lado..." -ForegroundColor Cyan

# 1. Corrigir CharacterSelect.css
@'
/* CHARACTER SELECT - CARDS NEON COMPACTOS */
.selection-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem;
  text-align: center;
}

.selection-title {
  color: white;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #0080ff;
  font-weight: 800;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  justify-content: center;
  align-items: start;
}

.character-card {
  background: rgba(20, 25, 45, 0.9);
  border-radius: 15px;
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  height: 380px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.character-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00ffff, #0080ff, #ff00ff);
  z-index: 2;
}

.character-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: #00ffff;
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.25), 0 0 30px rgba(0, 128, 255, 0.2);
}

.character-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0 auto 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 15px rgba(0, 255, 255, 0.4));
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  transition: transform 0.3s ease;
}

.character-card:hover .character-img {
  transform: scale(1.1);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 25px rgba(0, 255, 255, 0.6));
}

.character-name {
  color: #00ffff;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
}

.character-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stat-item {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0.3rem;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.stat-item:hover {
  background: rgba(0, 255, 255, 0.15);
  border-color: #00ffff;
}

.abilities-container {
  margin-top: auto;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.abilities-title {
  color: #0080ff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(0, 128, 255, 0.5);
}

.abilities-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.3rem;
}

.ability-item {
  background: rgba(0, 128, 255, 0.1);
  padding: 0.4rem;
  border-radius: 5px;
  font-size: 0.75rem;
  color: #a0d2ff;
  border-left: 2px solid #0080ff;
  transition: all 0.2s ease;
}

.ability-item:hover {
  background: rgba(0, 128, 255, 0.2);
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .characters-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .character-card {
    height: 350px;
  }
  .character-img {
    width: 90px;
    height: 90px;
  }
}
'@ | Out-File -FilePath "src\components\CharacterSelect.css" -Encoding UTF8

Write-Host "✅ CharacterSelect.css corrigido" -ForegroundColor Green

# 2. Verificar CharacterSelect.jsx
Write-Host "`n🔍 Verificando CharacterSelect.jsx..." -ForegroundColor Yellow
if (Test-Path "src\components\CharacterSelect.jsx") {
    $content = Get-Content "src\components\CharacterSelect.jsx" -Raw
    if ($content -match "characters-grid") {
        Write-Host "✅ CharacterSelect.jsx já usa classes corretas" -ForegroundColor Green
    } else {
        Write-Host "⚠️  CharacterSelect.jsx pode precisar de atualização" -ForegroundColor Yellow
    }
}

# 3. Adicionar background ao App.css
$appCss = Get-Content "src\App.css" -Raw
if (-not ($appCss -match "background: linear-gradient")) {
    $appCss = $appCss + @'

/* BACKGROUND PARA CARDS NEON */
body {
  background: linear-gradient(135deg, #0a0e24 0%, #1a1f3a 100%);
  min-height: 100vh;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.selection-container {
  background: rgba(10, 14, 36, 0.7);
  border-radius: 20px;
  margin: 2rem auto;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
}
'@
    $appCss | Out-File -FilePath "src\App.css" -Encoding UTF8
    Write-Host "✅ Background adicionado ao App.css" -ForegroundColor Green
}

Write-Host "`n🎯 AGORA OS CARDS DEVEM ESTAR:" -ForegroundColor Cyan
Write-Host "✅ Lado a lado (3 em linha)" -ForegroundColor Green
Write-Host "✅ Pequenos (100px imagens)" -ForegroundColor Green
Write-Host "✅ Com efeito neon" -ForegroundColor Green
Write-Host "✅ Compactos e bonitos" -ForegroundColor Green

Write-Host "`n🔄 Execute: npm run dev" -ForegroundColor Yellow