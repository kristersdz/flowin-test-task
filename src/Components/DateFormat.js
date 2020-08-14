import React from 'react'

const DateFormat = (props) => {
    var inputDate = props.date.toString().replace("T"," ");
    if (inputDate !== undefined && inputDate !== null) {
        var myDate = new Date(inputDate);
        var month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ][myDate.getMonth()];
        var str = myDate.getDate() + " " + month + ", " + myDate.getFullYear();
    return <p>{str}</p>;
    }
    return null;
}

export default DateFormat;
