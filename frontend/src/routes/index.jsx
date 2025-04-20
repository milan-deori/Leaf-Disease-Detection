import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ImageUpload from '../components/home'
import Early_Blight from "../components/Early_Blight";
import Late_Blight from '../components/Late_Blight'
import Pepper_Bacterial_Spot from "../components/Pepper_Bacterial_Spot";
import Tomato_Target_Spot from "../components/Tomato_Target_Spot";
import Tomato_Mosaic_Virus from "../components/Tomato_Mosaic_Virus";
import Tomato_ycv from "../components/Tomato_ycv";
import Tomato_Bacterial_Spot from "../components/Tomato_Bacterial_Spot";
import Tomato_Leaf_Mold from "../components/Tomato_Leaf_Mold";
import Tomato_Septorial_Leaf_Spot from "../components/Tomato_Septorial_Leaf_Spot";
import Tomato_Early_Blight from "../components/Tomato_Early_Blight";
import Tomato_Late_Blight from "../components/Tomato_Late_Blight";
import Tomato_Two_Spotted_Spider_Mite from "../components/Tomato_Two_Spotted_Spider_Mite";








const router=createBrowserRouter([

    {
        path:"/",
        element:< App/>,
        children:[
            {
                path:"",
                element: <ImageUpload/>

            },
            {
                path:"/Early-Blight",
                element:<Early_Blight/>
            },
            {
                path:"/Late-Blight",
                element:<Late_Blight/>
            },
            {
                path:"/Pepper-Bacterial-Spot",
                element:<Pepper_Bacterial_Spot/>
            },
            {
                path:"/Tomato-Target-Spot",
                element:<Tomato_Target_Spot/>
            },
            {
                path:"/Tomato-Mosaic-Virus",
                element:<Tomato_Mosaic_Virus/>
            },
            {
                path:"/Tomato-ycv",
                element:<Tomato_ycv/>
            },
            {
                path:"/Tomato-Bacterial-Spot",
                element:<Tomato_Bacterial_Spot/>
            },
            {
                path:"/Tomato-Early-Blight",
                element:<Tomato_Early_Blight/>
            },
            {
                path:"/Tomato-Late-Blight",
                element:<Tomato_Late_Blight/>

            },
            {
                path:"/Tomato-Leaf-Mold",
                element:<Tomato_Leaf_Mold/>
            },
            {
                path:"/Tomato-Leaf-Septoria",
                element:<Tomato_Septorial_Leaf_Spot/>
            },
            {
                path:"/Tomato-Spider-Mite",
                element:<Tomato_Two_Spotted_Spider_Mite/>
            }
        ]

    }

]);

export default router;