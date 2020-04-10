@echo off
start "Chrome" chrome --kiosk --allow-file-access-from-files --disable-pinch --overscroll-history-navigation=0 %~dps0index.html
