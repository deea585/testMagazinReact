const Arome = (props) => {

    let arome = props.arome;
    if (arome == undefined || arome.length == 0) {
        arome = ["nici o arome"]
    }

    return (
        <div>

            {arome.map(aroma => <span className="arome-text">{aroma} </span>)}

        </div>
    )
}
export default Arome