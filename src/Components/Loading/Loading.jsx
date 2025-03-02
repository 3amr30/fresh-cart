import React from 'react'
import {BounceLoader }from "react-spinners"

const override = {
    display: "block",
    margin: "190px auto",
    borderColor: "red",
};

export default function Loading() {
    const color ='#10ad10'
    return (
        <div className="">
            <BounceLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>)
}
