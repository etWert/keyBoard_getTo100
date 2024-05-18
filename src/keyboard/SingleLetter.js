

const SingleLetter = ({ singleLetter }) => {
    //מציג תו יחיד שהוקלד
    return <span style={{
        color: singleLetter.color,
        backgroundColor: singleLetter.BGcolor,
        fontFamily: singleLetter.font,
        fontSize: singleLetter.fontSize,
        textDecoration: singleLetter.textDecoration,
        fontWeight: singleLetter.fontWeight

    }}>{singleLetter.letter}</span>
}
export default SingleLetter