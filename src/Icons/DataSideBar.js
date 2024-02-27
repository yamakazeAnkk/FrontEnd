import React from 'react';
    import { FaHome, FaBook, FaUserPlus, FaPhoneVolume, FaShapes, FaTeamspeak, FaPhone, FaCommentAlt, FaBriefcase } from 'react-icons/fa';

const DataSideBar = [
    {
        title: "Home",
        path : "/",
        icon: <FaHome/>
    },
    {
        title: "Book",
        path : "/book",
        icon: <FaBook/>
    },
    {
        title: "User",
        path : "/user",
        icon: <FaUserPlus/>
    },
    {
        title: "Calls",
        path : "/call",
        icon: <FaPhoneVolume/>
    },
    {
        title: "Chats",
        path : "/chat",
        icon: <FaCommentAlt/>
    },
    {
        title: "Work",
        path : "/work",
        icon: <FaBriefcase/>
    },
];
export default DataSideBar