import App from "../../App";
import {useState, useEffect,useCallback} from "react";
import usePlatziPunks from "../../hooks/usePlatziPunks";
import {useWeb3React} from "@web3-react/core";
const Home = () => {
    const active = useWeb3React();
    const [maxSupply, setMaxSupply] = useState();
    const platziPunks = usePlatziPunks();

    const getMaxSupply = useCallback(async()=>{
        if (platziPunks) {
            const result = await platziPunks.methods.maxSupply().call();
            setMaxSupply(result);
        }
    },[platziPunks]);



    useEffect(()=> {
        getMaxSupply();
    },[getMaxSupply()])

    if (!active) return "Conecta tu wallet"
    return (
        <>
            <p>Max Supply:{maxSupply}</p>
        </>
    );
};
export default Home;