import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import Link from "next/link";

export default function Footer(){
    return (
        <div className="text-[14px] md:absolute md:bottom-0 mt-5 md:mb-3 text-slate-600 text-center w-full ">By <Link className="underline" href={"https://github.com/samervalente"}>Samer Valente
        <OpenInNewOffIcon sx={{fontSize:12, ml:0.5}} />
        </Link></div>
    )
}