import { useSelector } from "react-redux";

const Header = ()=> {
    const amount = useSelector(state => state.amount)
    return (
        <> 
            <h2>Header - Balance: {amount}</h2>
            <hr />
        </>
    )
}

export default Header;