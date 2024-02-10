import { useState } from 'react'
import { FormularioLogin } from './formulario-login.jsx'
import './index.css'
import './App.css'

export const Formulario = () => {

    const [logeado, setLogeado] = useState(['', false])
    const [cargando, setCargando] = useState(false)

    return (

        !logeado[1]
            ? <FormularioLogin client:load setLogeado={setLogeado} cargando={cargando} setCargando={setCargando} />
            : <h1>Bienvenido</h1>
    )
}
