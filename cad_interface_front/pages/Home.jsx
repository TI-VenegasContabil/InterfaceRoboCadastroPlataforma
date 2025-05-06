
import "./Home.css"
import { useNavigate } from "react-router";

const Home = () =>{

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/cadastro_empresa")
    };

    return(

        <main>
            <img id = "logo_venegas" src="../sources/venegaslogo1.png" alt="Logo Venegas" />
            <h1>Cadastro de Clientes</h1>
            <button class = "insert_enterprise_button" onClick={handleClick}>
                Empresa <img src="../sources/plus_vector.png" alt="Vetor Soma" />
            </button>
        </main>
    );
};

export default Home;