import React from 'react'

export function useDateFormat(input) {
    var inputDate = input.toString().replace("T"," ");
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
        return str;
    }
    return null;
}