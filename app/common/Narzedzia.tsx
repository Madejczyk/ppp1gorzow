"use client"
import { useCallback, useState, useRef, useEffect, type MutableRefObject, type KeyboardEvent } from "react"


export const Narzedzia = () => {
    const [zoom, setZoom] = useState(1)
    const [isGray, setGray] = useState(false);
    const [isHighContrast, setHighContrast] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [anotherFont, setAnotherFont] = useState(false);

    const zoomIn = useCallback(() => {
        setZoom((fs) => fs + 0.1)
    }, []);

    const onZoomInPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            zoomIn()
        }
    }, [zoomIn])

    const zoomOut = useCallback(() => {
        setZoom((fs) => (fs > 1) ? fs - 0.1 : 1)
    }, []);

    const onZoomOutPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            zoomOut()
        }
    }, [zoomOut])

    const toggleColor = useCallback(() => {
        setGray((g) => !g)
    }, []);

    const onToggleColorPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            toggleColor()
        }
    }, [toggleColor])

    const toggleHighContrast = useCallback(() => {
        setHighContrast((c) => !c)
    }, []);

    const onToggleHighContrastPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            toggleHighContrast()
        }
    }, [toggleHighContrast])

    const toggleDarkMode = useCallback(() => {
        setDarkMode((m) => !m)
    }, []);

    const onToggleDarkModePress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            toggleDarkMode()
        }
    }, [toggleDarkMode])

    const changeUnderline = useCallback(() => {
        setUnderline((u) => !u)
    }, []);

    const onChangeUnderlinePress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            changeUnderline()
        }
    }, [changeUnderline])

    const changeFont = useCallback(() => {
        setAnotherFont((f) => !f)
    }, []);

    const onChangeFontPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            changeFont()
        }
    }, [changeFont])

    const reset = useCallback(() => {
        setZoom(1);
        setGray(false);
        setHighContrast(false)
        setDarkMode(false)
        setUnderline(false);
        setAnotherFont(false);
    }, [])

    const onResetPress = useCallback((event: KeyboardEvent<HTMLParagraphElement>) => {
        if(event.key == 'Enter'){
            reset()
        }
    }, [reset])

    return <>
        <div style={{display: "flex", gap: '0.5rem', fontSize: '1.75rem'}}>
            <p onClick={zoomIn} className={zoom > 1 ? 'active': ''} tabIndex={0} onKeyDown={onZoomInPress} title="Powiększ tekst">A+</p>
            <p onClick={zoomOut} tabIndex={0} onKeyDown={onZoomOutPress} title="Pomniejsz tekst">A-</p>
            <p onClick={toggleColor} className={isGray ? 'active' : ''} tabIndex={0} onKeyDown={onToggleColorPress} title="Skala szarości">◍</p>
            <p onClick={toggleHighContrast} className={isHighContrast ? 'active' : ''} tabIndex={0} onKeyDown={onToggleHighContrastPress} title="Wysoki kontast">◐</p>
            <p onClick={toggleDarkMode} className={isDarkMode ? 'active' : ''} tabIndex={0} onKeyDown={onToggleDarkModePress} title="Jasne/ciemne tło">☾</p>
            <p onClick={changeUnderline} className={underline ? 'active' : ''} tabIndex={0} onKeyDown={onChangeUnderlinePress} style={{textDecorationLine: 'underline'}} title="Podkreśl linki">U</p>
            <p onClick={changeFont} className={anotherFont ? 'active' : ''} tabIndex={0} onKeyDown={onChangeFontPress} title="Zmień czcionkę">T</p>
            <p onClick={reset} tabIndex={0} onKeyDown={onResetPress} title="Zresetuj zmiany">↺</p>
        </div>

        <style jsx global>{`
        body {
            zoom: ${zoom};
            ${isGray ? 'filter: grayscale(1);' : 'filter: none;'}
            ${isDarkMode ? 'background-color: black; color: white;' : ''}
            ${isHighContrast ? 'background-color: black; color: yellow;' : ''}
            ${anotherFont ? 'font-family: Verdana,Arial,Helvetica,sans-serif !important;' : ''}
            a {
                ${underline ? 'text-decoration: underline !important;' : ''}
            }
        }
        ${isDarkMode ? '.header{background-color: black!important}' : ''}
        ${isHighContrast ? '.header{background-color: black!important}' : ''}
        `}</style>
    </>
}