import SingleLetter from "./SingleLetter"
// מציג את האותיות שכבר הקלידו
const ShowKeyboard = ({ letters }) => {
    return <>
        {letters.map(singleLetter => <SingleLetter singleLetter={singleLetter} />)}
    </>
}
export default ShowKeyboard