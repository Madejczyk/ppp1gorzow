"use client"
import { useCallback, useState, useRef, useEffect, type MutableRefObject, type KeyboardEvent } from "react"

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
function useClickOutside(
    ref: MutableRefObject<HTMLDivElement | undefined>,
    secondRef: MutableRefObject<HTMLDivElement | undefined>,
    onClickOutside: VoidFunction
) {
    useEffect(() => {
        /**
       * Invoke Function onClick outside of element
       */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && secondRef.current && !ref.current.contains(event.target as any) && !secondRef.current.contains(event.target as any)) {
                onClickOutside();
            }
        }
        // Bind
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // dispose
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, secondRef, onClickOutside]);
}

export const Narzedzia = () => {
    const [isOpen, setOpen] = useState(false);
    const iconRef = useRef<HTMLDivElement>();
    const menuRef = useRef<HTMLDivElement>();
    useClickOutside(iconRef, menuRef, () => {
        setOpen(false);
    });
    const [zoom, setZoom] = useState(1)
    const [isGray, setGray] = useState(false);
    const [isHighContrast, setHighContrast] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [anotherFont, setAnotherFont] = useState(false);

    const onToggle = useCallback(() => {
        setOpen((o) => !o)
    }, []);

    const onIconPress = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
        if(event.key == 'Enter'){
            onToggle()
        }
    }, [onToggle])

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
        <div className="narzedzia" onClick={onToggle} ref={iconRef as any} tabIndex={0} onKeyDown={onIconPress}>
            <div className="ikona">
    ♿︎
            </div>
        </div>
        {
            isOpen && <div className='menu' ref={menuRef as any}>
                <h4>Narzędzia dostępności</h4>
                <hr/>
                <p onClick={zoomIn} className={zoom > 1 ? 'active': ''} tabIndex={0} onKeyDown={onZoomInPress}>Powiększ tekst</p>
                <p onClick={zoomOut} tabIndex={0} onKeyDown={onZoomOutPress}>Pomniejsz tekst</p>
                <p onClick={toggleColor} className={isGray ? 'active' : ''} tabIndex={0} onKeyDown={onToggleColorPress}>Skala szarości</p>
                <p onClick={toggleHighContrast} className={isHighContrast ? 'active' : ''} tabIndex={0} onKeyDown={onToggleHighContrastPress}>Wysoki kontrast</p>
                <p onClick={toggleDarkMode} className={isDarkMode ? 'active' : ''} tabIndex={0} onKeyDown={onToggleDarkModePress}>Jasne tło</p>
                <p onClick={changeUnderline} className={underline ? 'active' : ''} tabIndex={0} onKeyDown={onChangeUnderlinePress}>Podkreśl linki</p>
                <p onClick={changeFont} className={anotherFont ? 'active' : ''} tabIndex={0} onKeyDown={onChangeFontPress}>Zmień czcionkę</p>
                <p onClick={reset} tabIndex={0} onKeyDown={onResetPress}>Reset</p>
            </div>
        }
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
        ${isDarkMode ? '.menu {background-color: black !important; color: white !important; border-color: white !important; p.active {background-color: white !important;color: black !important;}}' : ''}
        ${isHighContrast ? '.menu {background-color: black !important; color: yellow !important; border-color: yellow !important;}' : ''}
        `}</style>
    </>
}