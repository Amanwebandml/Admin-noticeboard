import { AboutUs } from "./AboutUs";
import { LatestPost } from "./LatestPost";
import { Login } from "./Login";

export function Home() {
    return (
        <div className=" bg-pink-300">
            <div className="text-center text-3xl text-white w-80% mx-auto py-10 my-10 h-screen">
            <h1 className="text-3xl font-bold underline">Home</h1>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o</h4>
            </div>
            <AboutUs></AboutUs>
            <LatestPost></LatestPost>
        </div>
    );
}