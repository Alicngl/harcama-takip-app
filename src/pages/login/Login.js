import "./Login.module.css"
import { Container,FormControl,Typography,Button,FilledInput,InputLabel,InputAdornment,IconButton } from "@mui/material"
import { useState } from "react"
import { Visibility,VisibilityOff } from "@mui/icons-material"
import { useLogin } from "../../hooks/useLogin"
import { useNavigate } from "react-router-dom"

export default function Login(){

    const navigate=useNavigate()

    const{login,hata,bekliyor}=useLogin()

    const [values,setValues]=useState({
        email:"",
        password:"",
        showPassword:false
    })

    const handleChange=(prop)=>(event)=>{
        setValues({...values,[prop]:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(values);
        login(values.email,values.password)
        navigate("/")

    }
    const handleClickshowPassword=()=>{
        setValues({
            ...values,
            showPassword:!values.showPassword
        })
    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Typography sx={{mt:15,ml:5,fontWeight:"bold"}} variant="h4">Giriş Yap</Typography>
                <FormControl fullWidth sx={{mt:5}}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <FilledInput value={values.email} onChange={handleChange("email")} sx={{mt:8}} id="email" label="Email"/>
                </FormControl>
                <FormControl  fullWidth sx={{mt:10}}>
                    <InputLabel htmlFor="password">Parola</InputLabel>
                    <FilledInput type={values.showPassword ? "text":"password"} value={values.password} onChange={handleChange("password")} id="password" label="Parola" endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle Password" onClick={handleClickshowPassword}>
                                {values.showPassword ? <Visibility/>:<VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }/>
                </FormControl>
               {!bekliyor &&  <Button type="submit" variant="outlined" sx={{mt:15,padding:1}}>Giriş</Button>}
               {bekliyor &&  <Button disabled type="submit" variant="outlined" sx={{mt:15,padding:1}}>Yükleniyor</Button>}
               {hata && <p>{hata}</p>}
            </form>
        </Container>
    )
}