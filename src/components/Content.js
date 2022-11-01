import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '../actions/balanceActions';

const Content = ()=> {
    const dispatch = useDispatch();

    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <h2>Deposit or Withdraw Balance</h2>
            <button onClick={()=> depositMoney(100)}>
                Deposit
            </button>
            <button onClick={()=> withdrawMoney(100)}>
                Withdraw
            </button>
        </>
    )
}

export default Content;