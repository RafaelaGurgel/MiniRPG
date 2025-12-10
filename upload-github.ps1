Write-Host "🚀 Enviando projeto para GitHub..." -ForegroundColor Cyan

# 1. Criar .gitignore se não existir
if (-not (Test-Path ".gitignore")) {
    @'
/node_modules
/dist
/build
.env
.env.local
node_modules/.vite
.DS_Store
*.log
.vscode
'@ | Out-File -FilePath ".gitignore" -Encoding UTF8
    Write-Host "✅ .gitignore criado" -ForegroundColor Green
}

# 2. Inicializar Git
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Git inicializado" -ForegroundColor Green
}

# 3. Adicionar arquivos
git add .
Write-Host "✅ Arquivos adicionados" -ForegroundColor Green

# 4. Fazer commit
git commit -m "🎮 RPG Battle Game - Versão completa com cards neon, batalha por turnos e sistema de níveis"
Write-Host "✅ Commit realizado" -ForegroundColor Green

# 5. Conectar ao GitHub
git remote remove origin 2>$null
git remote add origin https://github.com/RafaelaGurgel/MiniRPG.git
Write-Host "✅ Repositório conectado" -ForegroundColor Green

# 6. Enviar
Write-Host "`n📤 Enviando para GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Pode pedir seu usuário/senha do GitHub" -ForegroundColor Magenta

try {
    git push -u origin main
    Write-Host "✅ SUCESSO! Enviado para GitHub!" -ForegroundColor Green
} catch {
    try {
        git push -u origin master
        Write-Host "✅ SUCESSO! Enviado para GitHub!" -ForegroundColor Green
    } catch {
        Write-Host "❌ ERRO ao enviar. Execute manualmente:" -ForegroundColor Red
        Write-Host "git push -u origin main" -ForegroundColor Yellow
    }
}

Write-Host "`n🌐 Seu projeto está em:" -ForegroundColor Cyan
Write-Host "https://github.com/RafaelaGurgel/MiniRPG" -ForegroundColor White -BackgroundColor DarkBlue

Write-Host "`n📦 Para fazer deploy grátis:" -ForegroundColor Green
Write-Host "1. Vá para: https://vercel.com" -ForegroundColor Yellow
Write-Host "2. Conecte seu GitHub" -ForegroundColor Yellow
Write-Host "3. Selecione o repositório MiniRPG" -ForegroundColor Yellow
Write-Host "4. Clique em Deploy" -ForegroundColor Yellow
Write-Host "5. Seu jogo estará online em 2 minutos! 🚀" -ForegroundColor Yellow