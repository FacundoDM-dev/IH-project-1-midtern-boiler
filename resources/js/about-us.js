const getJson = async () => {
  try {
    const response = await fetch("/resources/js/about-us.json",{
        method: 'GET'
    });
    const data = await response.json();
    let post = document.querySelector(".back")
    const dataElement = `<h3>${data.name}</h3>
                        <h4>${data.age}</h4>
                        <p>${data.aboutme}</p>`
    post.innerHTML= dataElement                    

  } catch {}
};

getJson()

