// import React, { useEffect } from "react"
// import styled from "styled-components"
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { UserDataContext } from "../Providers/UserData";
// // import { CircularProgressbar } from "react-circular-progressbar";
import dayjs from 'dayjs'

export default function Teste(){

    return(
        <>
            <h1>{`${dayjs().get('date')} / ${dayjs().get('month') +1}`} </h1>
        </>
    )
}