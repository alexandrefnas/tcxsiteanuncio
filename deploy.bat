@echo off
title Deploy Angular 19 para GitHub Pages
echo ============================================
echo Deploy Angular 19 para GitHub Pages
echo Projeto: tcxsiteanuncio
echo ============================================

echo.
echo [1/5] Iniciando build de producao...
call ng build --output-path docs --base-href /tcxsiteanuncio/

REM Caminho onde o Angular cria o build (browser/)
if exist "docs\browser" (
    echo [2/5] Movendo arquivos da pasta browser para docs...
    xcopy "docs\browser\*" "docs\" /E /H /Y >nul
    rmdir /s /q docs\browser
) else (
    echo [2/5] Nenhuma pasta 'browser' encontrada (ok, build direto em docs).
)

REM Criar o arquivo 404.html (necessário para rotas Angular)
if exist "docs\index.html" (
    echo [3/5] Criando 404.html...
    copy /Y "docs\index.html" "docs\404.html" >nul
) else (
    echo ERRO: index.html nao encontrado em docs!
    pause
    exit /b
)

echo [4/5] Enviando alteracoes para o GitHub...
git add .
git commit -m "Deploy automatico para GitHub Pages"
git push

echo.
echo [5/5] Deploy concluido com sucesso!
echo Acesse: https://alexandrefnas.github.io/tcxsiteanuncio/
echo ============================================
pause
