import { Box } from "@mui/system"
import { Button } from "@mui/material"
import { AppBar } from "@mui/material"
import { Typography } from "@mui/material"
import { Toolbar } from "@mui/material"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar(){

    const {user}=useAuthContext()

    const {logout}=useLogout()

    return(
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                        <Link to="/" component="button" className={styles.link}>Harcama Takip Uygulaması</Link>
                    </Typography>
                    {!user && (
                        <>
                             <Button variant="outlined" color="inherit">
                                <Link component="button" className={styles.link} to="login">GİRİŞ Yap</Link>
                            </Button>
                            <Button variant="outlined" color="inherit" sx={{ml:2}}>
                                <Link component="button" className={styles.link} to="/signup">Üye Ol</Link>
                            </Button>
                        </>
                    )}
                   {user && (
                       <>
                            <Typography>Merhaba {user.displayName}</Typography>
                             <Button variant="outlined" color="inherit" sx={{ml:2}} onClick={logout}>
                                Çıkış
                            </Button>
                       </>
                   )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}