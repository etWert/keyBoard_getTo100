import { useState } from "react"
import languages from "./letters_arrays"
import ShowKeyboard from "./ShowKeyboard"

const MainKeyboard = () => {
    const fonts = ["Arial", "Courier New", "Franklin", "Gill Sans", "Lucida Sans", "Segoe UI", "Times New Roman", "Trebuchet MS", "Cambria", "Georgia", "Impact", "Verdana", "cursive", "fantasy", "monospace", "sans-serif"]
    const sizes = [10, 12, 16, 18, 20, 26, 30, 35, 42, 50, 54, 58, 63, 72]

    const [letters, setLetters] = useState([])//מערך האותיות שהוקלדו
    const [color, setColor] = useState("black")//צבע
    const [BGcolor, setBGcolor] = useState("white")//צבע רקע
    const [font, setFont] = useState("Arial")//גופן
    const [fontSize, setFontSize] = useState("10px")//גודל
    const [textDecoration, setTextDecoration] = useState("none")//קו תחתי
    const [fontWeight, setFontWeight] = useState("none")//מודגש
    //שפה/מספרים ותווים- אילו לחצנים יופיעו על המסך
    const [language, setLanguage] = useState(languages.eng_upper)
    const addLetter = (letter) => {
        const obj = {
            letter: letter,
            color: color,
            BGcolor: BGcolor,
            font: font,
            fontSize: fontSize,
            textDecoration: textDecoration,
            fontWeight: fontWeight
        }
        setLetters([...letters, obj])
    }
    const changeColor = (event) => {
        setColor(event.target.value)
    }
    const changeBGcolor = (event) => {
        setBGcolor(event.target.value)
    }
    const toUpper = () => {
        let i = 0
        const converted = letters.map(letter => letter.letter.toUpperCase())
        letters.forEach(element => {
            element.letter = converted[i++]
        });
        setLetters([...letters])
    }
    const toLower = () => {
        let i = 0
        const converted = letters.map(letter => letter.letter.toLowerCase())
        letters.forEach(element => {
            element.letter = converted[i++]
        });
        setLetters([...letters])
    }
    const changeTextDecoration = () => {
        if (textDecoration === "underline") {
            setTextDecoration("none")
        }
        else {
            setTextDecoration("underline")
        }
    }
    const changeFontWeight = () => {
        if (fontWeight === "bold") {
            setFontWeight("none")
        }
        else {
            setFontWeight("bold")
        }
    }
    return <>
        <div className="header-div">
            <h1 className="header">Main Keyboard</h1>
        </div>
        <ShowKeyboard letters={letters} />
        <br />
        <div className="keyboard">
            <div className="three-parts">
                <div className="top-line">
                    <button className="U" onClick={changeTextDecoration}>U</button>
                    <button className="B" onClick={changeFontWeight}>B</button>
                    <button onClick={toUpper}>A+</button>
                    <button onClick={toLower}>A-</button>
                    <select onChange={(e) => { setFontSize(`${e.target.value}px`) }}>
                        {sizes.map(size => <option value={size}>{size}</option>)}
                    </select>
                    <select onChange={(e) => { setFont(`${e.target.value}`) }}>
                        {fonts.map(font => <option value={font}>{font}</option>)}
                    </select>
                    <div className="colors">
                        <label name="color">color</label>
                        <input type="color" name="color" onChange={changeColor} />
                        <label name="color">BGcolor</label>
                        <input type="color" name="BGcolor" onChange={changeBGcolor} />
                    </div>
                </div>
                <div className="letter">
                    {language.map(letter => <button className="letterBTN" onClick={() => { addLetter(letter) }}>{letter}</button>)}
                </div>
                <div className="buttom-line">
                    <button onClick={() => setLanguage(languages.numbers)}>numbers</button>
                    <button onClick={() => setLanguage(languages.emoji)}>Emoji</button>
                    <button onClick={() => addLetter(" ")}>spacebar</button>
                    <button onClick={() => setLanguage(languages.eng_upper)}>caps lock</button>
                    <button onClick={() => setLanguage(languages.eng_lower)}>English</button>
                    <button onClick={() => setLanguage(languages.heb)}>Hebrew</button>
                </div>

            </div>
            <div className="right">
                <button onClick={() => addLetter(<br />)}>enter</button>
                <button onClick={() => setLetters([])}>clear</button>{/* מחיקת כל הטקסט */}
                <button onClick={() => setLetters(letters.slice(0, letters.length - 1))}>delete</button>{/* מחיקת התו האחרון */}
            </div>
        </div>
    </>
}

export default MainKeyboard