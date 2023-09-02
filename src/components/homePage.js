import ImgMediaCard from "./cards";
import { Card, ImageList, Paper } from "@mui/material";
import SearchAppBar from "./common/header";
import HimImageList from "./cards";
import Footer from "./common/footer";
import { Route } from "@mui/icons-material";


function Homepage(){
    
    return(
    <>
      <SearchAppBar/>
     <HimImageList/>
     <Footer/>
    </>
    );
};
export  default Homepage;