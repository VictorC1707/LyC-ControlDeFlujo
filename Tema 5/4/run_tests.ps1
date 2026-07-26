# Script de Automatización de Pruebas - Proyecto Compiladores

# 1. Definir la ruta de la carpeta con los archivos .yml
$carpetaPruebas = ".\lote_pruebas"

# 2. Verificar si la carpeta existe. Si no existe, advertir y salir.
if (-Not (Test-Path $carpetaPruebas)) {
    Write-Host "Error: No existe la carpeta 'lote_pruebas'." -ForegroundColor Red
    Write-Host "Por favor, crea una carpeta llamada 'lote_pruebas' y coloca ahí tus archivos .yml (entre 6 y 19)." -ForegroundColor Yellow
    exit
}

# 3. Obtener todos los archivos .yml de la carpeta
$archivos = Get-ChildItem -Path $carpetaPruebas -Filter *.yml

if ($archivos.Count -eq 0) {
    Write-Host "La carpeta 'lote_pruebas' está vacía o no tiene archivos .yml." -ForegroundColor Red
    exit
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " INICIANDO EXPERIMENTO DE CARGA" -ForegroundColor Cyan
Write-Host " Archivos a procesar: $($archivos.Count)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

foreach ($archivo in $archivos) {
    $rutaCompleta = $archivo.FullName
    Write-Host "Analizando -> $($archivo.Name)" -ForegroundColor Yellow
    
# -------------------------------------------------------------
    # EJECUCIÓN EN PYTHON (Comentado)
    # python analyze_compose.py $rutaCompleta
    # -------------------------------------------------------------

    # -------------------------------------------------------------
    # EJECUCIÓN EN JAVASCRIPT (Activo)
    node analyze_compose.js $rutaCompleta
    # -------------------------------------------------------------

    # -------------------------------------------------------------
    # EJECUCIÓN EN JAVA (Comentado temporalmente)
    # java -cp ".;.\antlr-4.13.2-complete.jar" Main $rutaCompleta
    # -------------------------------------------------------------
}
Write-Host "========================================" -ForegroundColor Green
Write-Host " EXPERIMENTO FINALIZADO" -ForegroundColor Green
Write-Host " Revisa el archivo javascript_resultados.log" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green