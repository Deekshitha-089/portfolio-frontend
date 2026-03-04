import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Admin(){

const [contacts,setContacts]=useState([]);
const navigate = useNavigate();

useEffect(()=>{

const auth = localStorage.getItem("auth");

if(!auth){
navigate("/admin-login");
return;
}

fetchContacts();

},[])

const fetchContacts = async()=>{

const res = await fetch(
"https://portfolio-backend-7lkz.onrender.com/api/contacts",
{
headers:{ Authorization:localStorage.getItem("auth") }
}
);

if(res.status===401){
localStorage.removeItem("auth");
navigate("/admin-login");
return;
}

const data = await res.json();
setContacts(data.reverse());

}

const markContacted = async(id)=>{

await fetch(
`https://portfolio-backend-7lkz.onrender.com/api/contacts/${id}`,
{
method:"PUT",
headers:{ Authorization:localStorage.getItem("auth") }
}
)

fetchContacts();

}

const logout = ()=>{
localStorage.removeItem("auth");
navigate("/admin-login");
}

return(
<>
<Navbar/>

<section className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-black transition">

<div className="max-w-5xl mx-auto">

<div className="flex justify-between items-center mb-10">

<h1 className="text-4xl font-bold text-black dark:text-white">
Admin <span className="text-[#ffc2c7]">Dashboard</span>
</h1>

<button
onClick={logout}
className="px-5 py-2 rounded-full bg-red-500 text-white hover:scale-105 transition"
>
Logout
</button>

</div>

<div className="space-y-6">

{contacts.map((c)=>(
<div
key={c.id}
className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-xl rounded-xl p-6"
>

<h3 className="text-xl font-semibold text-black dark:text-white">
{c.name}
</h3>

<p className="text-gray-600 dark:text-gray-300">{c.email}</p>

<p className="mt-3 text-gray-700 dark:text-gray-200">
{c.message}
</p>

<div className="mt-4 flex items-center justify-between">

<span className={`font-semibold ${
c.contacted ? "text-green-500":"text-red-500"
}`}>
{c.contacted ? "Contacted":"Not Contacted"}
</span>

{!c.contacted && (
<button
onClick={()=>markContacted(c.id)}
className="px-4 py-2 rounded-full bg-[#ffc2c7] text-black hover:scale-105 transition"
>
Mark Contacted
</button>
)}

</div>

</div>
))}

</div>

</div>

</section>

<Footer/>
</>
)

}