
    <ul>
    </ul>
   
        fetch('https://api.adzuna.com/v1/api')
        .then(function (response) {       
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            count = data.count
            data = data.data
            main=document.getElementsByClassName("container")
            for (let i = 0; i < count; i++) {
                let container=document.createElement("div")
                container.classList.add("card")
    
             
         
            }
        })
   
