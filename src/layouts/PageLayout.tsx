import { Outlet } from "react-router-dom";
import { cn } from "../lib/utils";

export function PageLayout(){
    return (
        <main className={cn("p-2")}>
            <h1>repMAX</h1>
            <Outlet />
        </main>
    )
}