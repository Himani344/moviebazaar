import { useEffect, useState } from "react";
import ImgMediaCard from "./cards";
import ColorInversionFooter from "./common/footer";
import DrawerAppBar from "./common/header";
import axios from "axios";



function Homepage(){
    
    return(<>
    <DrawerAppBar/>
    
    <ImgMediaCard ></ImgMediaCard>
{/* <ColorInversionFooter></ColorInversionFooter> */}


    </>
    );
};
export  default Homepage;