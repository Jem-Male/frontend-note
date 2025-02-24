import { useEffect, useState } from "react";
import CardItem from "./CardItems";
import {a} from "../services/axiosInstance";

function CardList(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPost(){
            try{
                const res =await a.get("items/");
                setPosts(res.data);
                console.log(res.data);
            } catch (e){
                console.log(e);
            }
        }
        fetchPost();
    },[]);
    return(
        <div className="cards-list">
            {posts.map((post) => (
                <CardItem key={post.id} post={post}/>
            ))}
        </div>
    );
}

export default CardList;