import "./Signup.module.css"
import { Container,FormControl,Typography,Button,OutlinedInput,InputLabel,InputAdornment,IconButton } from "@mui/material"
import { useState } from "react"
import { Visibility,VisibilityOff } from "@mui/icons-material"
import { useSignup } from "../../hooks/useSignup"
import { useNavigate } from "react-router-dom"


export default function Signup(){

    const navigate=useNavigate()

    
    const {signup,hata,bekliyor}=useSignup()

    const [values,setValues]=useState({
        email:"",
        password:"",
        showPassword:false,
        userName:""
    })

    const handleChange=(prop)=>(event)=>{
        setValues({...values,[prop]:event.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(values);
        signup(values.email,values.password,values.userName)
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
                <Typography sx={{mt:15,ml:5,fontWeight:"bold"}} variant="h4">Üye Ol</Typography>
                <FormControl fullWidth sx={{mt:15}}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput value={values.email} onChange={handleChange("email")} id="email" label="Email"/>
                </FormControl>
                <FormControl  fullWidth sx={{mt:10}}>
                    <InputLabel htmlFor="password">Parola</InputLabel>
                    <OutlinedInput type={values.showPassword ? "text":"password"} value={values.password} onChange={handleChange("password")} id="password" label="Parola" endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="Toggle Password" onClick={handleClickshowPassword}>
                                {values.showPassword ? <Visibility/>:<VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }/>
                </FormControl>
                <FormControl fullWidth sx={{mt:10}}>
                    <InputLabel htmlFor="email">Kullanıcı Adı</InputLabel>
                    <OutlinedInput value={values.user} onChange={handleChange("userName")} id="email" label="Kullanıcı Adı"/>
                </FormControl>
                {!bekliyor &&  <Button type="submit" variant="outlined" sx={{mt:15,padding:1}}>Üye Ol</Button>}
                {bekliyor &&  <Button disabled type="submit" variant="outlined" sx={{mt:15,padding:1}}>Bekliyor</Button>}
                {hata && <p>{hata}</p>}
            </form>
        </Container>
    )
}