const imagesDiv = document.getElementById("images");

async function getImages() {
    const res = await fetch("https://maro.onrender.com/api/images");
    const data = await res.json();
    console.log({data})
    
    data.map((image) => {
        let date = `${new Date(image.createdAt).getDate()}/${new Date(image.createdAt).getMonth()}/${new Date(image.createdAt).getFullYear()} `;

        imagesDiv.innerHTML += `
            <div class="col-md-6">
                <div class="blog_box">
                    <div class="blog_img"><img src="${image.imageUrl}"></div>
                    <h4 class="date_text">${date}</h4>
                    </div>
            </div>
        `;
    })
}

getImages();
