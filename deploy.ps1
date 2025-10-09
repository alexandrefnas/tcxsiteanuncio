# ============================================
# Script de Deploy Angular 19 para GitHub Pages
# Projeto: tcxsiteanuncio
# ============================================

Write-Host "Iniciando build de produção..."
ng build --output-path docs --base-href /tcxsiteanuncio/

# Caminho onde o Angular cria o build (browser/)
$browserPath = "docs\browser"

if (Test-Path $browserPath) {
    Write-Host "Movendo arquivos da pasta browser para docs..."
    xcopy "$browserPath\*" "docs\" /E /H /Y > $null
    Remove-Item -Recurse -Force $browserPath
}
else {
    Write-Host "Nenhuma pasta 'browser' encontrada (ok, build direto em docs)."
}

# Criar o arquivo 404.html (necessário para rotas Angular)
$indexFile = "docs\index.html"
$notFoundFile = "docs\404.html"

if (Test-Path $indexFile) {
    Copy-Item $indexFile $notFoundFile -Force
    Write-Host "Arquivo 404.html criado com sucesso."
}
else {
    Write-Host "ERRO: index.html não encontrado em docs!"
    exit 1
}

# Git commit & push
Write-Host "Enviando alterações para o GitHub..."
git add .
git commit -m "Deploy automático para GitHub Pages"
git push

Write-Host ""
Write-Host "Deploy concluído com sucesso!"
Write-Host "Acesse: https://alexandrefn.github.io/tcxsiteanuncio/"
