import { useSelector } from "react-redux";

const Footer = ()=> {
    const amount = useSelector(state => state.amount)
    return (
        <>
            <hr />
            <h2>Footer - Balance: {amount}</h2>
        </>
    )
}

export default Footer;