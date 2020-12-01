import styled from "styled-components";

export const WorldMapWrap = styled.div`
    position:relative;
    .loadingArea{
        position:absolute;
        top:0px;
        z-index:9;
        width:100%;
        height:887px;
        opacity:.9;
        box-shadow: 0px 0px 200px 200px #ccc;
        background-color:#ccc 
    }
    
    .loadingIcon{
            position:fixed;
            top:50%;
            transform:translateX(-50%);
            transform:translateX(-50%);
            left:50%;
            z-index:77
        }
    span{
            font-size:15px;
            em{
                font-style: normal
            }
    }
    .world_map_title{
        width:100%;
        text-align:center;
        font-size:20px;
        font-weight:800;
        margin:27px 0 7px 0;
    }
`