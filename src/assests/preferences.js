import { useEffect, useState } from "react";
import Perfil from "../containers/Perfil/Perfil"
import SideMenu from "../containers/SideMenu/SideMenu";
import { LanguageOptions } from "../pages/portfolio";
import HeaderBar from "@/components/headerBar/headerBar";

export default function preferences(Component) {
    return (props) => {


        const [CurrentTheme, setCurrentTheme] = useState(null);
        const [Language, setLanguage] = useState(null);
        const [ThemeChange, setThemeChange] = useState(false);
        const [LanguageChange, setLanguageChange] = useState(false);

        useEffect(() => {
            /*
            if (localStorage.getItem('theme') == null) {
              setCurrentTheme(preferdTheme);
              localStorage.setItem('theme', preferdTheme);
            } else {*/
            const newTheme = localStorage.getItem('theme');
            if (newTheme !== null) {
                setCurrentTheme(newTheme)
            } else {
                const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
                const preferdTheme = (prefersDarkMode.matches === !true ? "dark" : "light");
                localStorage.setItem('theme', preferdTheme)
                setCurrentTheme(preferdTheme)
            }
        }, [ThemeChange]);

        useEffect(() => {
            const newLanguage = localStorage.getItem('language');
            if (newLanguage !== null) {
                setLanguage(newLanguage)
            } else {
                localStorage.setItem('language', Language)
            }
        }, [LanguageChange]);




        const ChangeLanguage = () => {
            if (Language === LanguageOptions[0]) {
                localStorage.setItem('language', LanguageOptions[1]);
                setLanguageChange(!LanguageChange);
            } else {
                localStorage.setItem('language', LanguageOptions[0]);
                setLanguageChange(!LanguageChange);
            }
        }

        // to call useEffect I created the state ThemeChange. Don't have a better way?
        const ChangeTheme = () => {
            const setedTheme = localStorage.getItem('theme');
            localStorage.setItem('theme', setedTheme === "light" ? "dark" : "light")
            setThemeChange(!ThemeChange)
        }
        return (
            (CurrentTheme &&(
            (Language && (
                <div style={{ display: 'flex' }} className={`${CurrentTheme}`
                }>
                    <Perfil language={Language} />
                    <div style={{ flex: '1' }}>
                        <HeaderBar language={Language} />
                        <Component theme={CurrentTheme} language={Language} />
                    </div>
                    <SideMenu theme={CurrentTheme} ChangeTheme={ChangeTheme} ChangeLanguage={ChangeLanguage} language={Language} LangBtnChecked={Language !== LanguageOptions[0]} />

                </div >
                ))
            ))


        )
    }
}