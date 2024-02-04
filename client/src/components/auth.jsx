import React from "react";
import { useState } from "react";
import { CheckJWT } from "../js/CheckJWT";

function Auth(){

    const [jwtToken, setJwtToken] = useState(null)

    useState(async () => {
        var _ = new Promise(async (resolve) => {
            const result = await CheckJWT();
            resolve(result);
        });

        _.then((result) => {
            if(result)
                window.location = '/xnazure';
            else
                window.location = '/login';
        })

        document.title = '';
    }, []);

    return(
        <></>
    )
}