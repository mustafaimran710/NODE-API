const link="https://potential-parakeet-v6w9p67jj97jhpr7q-5005.app.github.dev/country"

fetch(link).then(response=>{
    if(!response.ok){
        throw new Error("Failed to Fetch Data ");

}
return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(c=>{
        const row =document.createElement("tr");
        row.innerHTML=` 
        <td>${c.country_id}</td>
        <td>${c.country_name}</td>
        <td>${c.region_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
}

)

