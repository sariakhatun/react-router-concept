import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
    let user = useLoaderData()
    let {userId} = useParams();
    console.log(userId)
   // console.log(user)
    let {website,name}=user;
    return (
        <div>
            <h2>Use details here</h2>
            <h5>Name : {name}</h5>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;