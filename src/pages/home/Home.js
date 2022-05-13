import {Container,Grid} from "@mui/material"
import Form from "./Form"
import Liste from "./Liste"

import "./Home.module.css"
import {useAuthContext} from "../../hooks/useAuthContext"
import {useCollection} from "../../hooks/useCollection"

export default function Home(){
    const{user}=useAuthContext()

    const {belgeler,hata}=useCollection("harcamalar",["uid","==",user.uid],["belgeTarih","desc"])

    return(
       <Container sx={{mt:18}}>
           
           <Grid container spacing={2}>
               <Grid item md={8} sm={12} xs={12}>
                    {hata && <p>{hata}</p>}
                    {
                        belgeler && <Liste harcamalar={belgeler}/>
                    }
               </Grid>
               <Grid item md={4}>
                   <Form uid={user.uid}/>
               </Grid>
           </Grid>
       </Container>
    )
}