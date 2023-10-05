import preferences from "@/assests/preferences"
import { about } from "../portifolio";
import Btn from "@/components/BtnColor1/btnColor1";
import { NavBarNames } from "@/pages/portifolio";
import { useRouter } from "next/router";


export default function About({language}){
    const router = useRouter();

    const OnClickIten = (ItenName) => {
        router.push(`/${ItenName}`)
    }
    return(
        <div className="AboutDiv">
            <div className="TitleDiv">
              <h1>{about.title[language][0]}<strong>{about.title[language][1]}</strong></h1>  
            </div>
            <div className="ContentDiv">
                <p>{about.content[language]}</p>
            </div>
            <div className="BtnAboutDiv">
                <Btn text={`${about.buttons[language][0]}`} click={() => OnClickIten(NavBarNames.en[3])}/>
                <Btn text={`${about.buttons[language][1]}`} click={() => OnClickIten(NavBarNames.en[4])}/>
            </div>
        </div>
    )
}
//export default preferences(About);