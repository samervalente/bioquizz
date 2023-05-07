import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import Link from "next/link";

export default function Footer(){
    return (
        <div className="fixed bottom-0 text-[14px]  text-slate-600 text-center w-full ">Feito por <Link className="underline " href={"https://github.com/samervalente"}>Samer Valente
        <OpenInNewOffIcon sx={{fontSize:12}} />
        </Link></div>
    )
}