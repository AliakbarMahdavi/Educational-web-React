// image
import js from "../image/javascript-500x286.png"
import react from "../image/react.png"
import git from "../image/git.png"
import design from "../image/mobilefirst-500x286.png"
import HC from "../image/Html_Css-500x286.png"
import Sass from "../image/SASS-500x286.png"


export const data = () => {
    const Cdata = [
        {image:git, name:"دوره آموزش گیت، گیت لب و گیت هاب", price:219000, number:402, id:3},
        {image:react, name:"دوره جامع متخصص ریکت و ریداکس", price:2289000, number:838, id:2},
        {image:js, name:"دوره مقدماتی تا پیشرفته جاوااسکریپت", price:1329000, number:1123, id:1},
        {image:Sass, name:"آموزش sass", price:0, number:43, id:6},
        {image:HC, name:"آموزش HTML,CSS", price:349000, number:1028, id:5},
        {image:design, name:"آموزش mobile first design", price:0, number:35, id:4}
    ]
    return Cdata;
}