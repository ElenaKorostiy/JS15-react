import React from "react";
import { UserProvider } from "./components/provider/user";
import { Header } from "./components/header";
import { Posts } from "./components/posts";


import "./App.css";


export const App = () => {
    return (
        <UserProvider>
            <Header />
            <Posts />
        </UserProvider>
    )
};