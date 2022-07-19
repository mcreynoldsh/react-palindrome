function OutputLabel(props){
    if(props.isPal){
        return(
            <p>{props.word} IS a palindrome.</p>
        )
    }
    else{
        return(
            <p>{props.word} IS NOT a palindrome.</p>
        )
    }
}
export default OutputLabel;