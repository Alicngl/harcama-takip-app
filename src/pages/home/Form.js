import { useState,useEffect } from "react"
import { Button,TextField,Typography } from "@mui/material"
import { useFirestore } from "../../hooks/useFirestore"

export default function Form({uid}){

    const {belgeEkle,response}=useFirestore("harcamalar")
    const [baslik,setBaslik]=useState("")
    const [miktar,setMiktar]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
         belgeEkle({uid,baslik,miktar})
    }

    useEffect(()=>{
        
        if(response.basari){
            setBaslik("")
            setMiktar("")
        }
    },[response.basari])

    return(
        <form onSubmit={handleSubmit}>
            <Typography>Harcama Bilgileriniz Giriniz</Typography>
            <TextField label="Harcama Başlık" fullWidth sx={{my:5}} onChange={(e)=>setBaslik(e.target.value)} value={baslik}>Başlık</TextField>
            <TextField label="Harcama Miktar" fullWidth sx={{my:5}}  onChange={(e)=>setMiktar(e.target.value)} value={miktar}>Miktar</TextField>
            <Button type="submit" variant="contained">Kaydet</Button>
        </form>
    )
}