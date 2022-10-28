import Link from "next/link";

export default function index(){

    return(
        <div id="contentIni">
            <img src="/images/png-caixa.png"></img>
            <Link href="/home">
                    <button>Entrar</button>
            </Link>
        </div>
    )
}