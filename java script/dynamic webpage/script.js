let fetchapi = async () => {
    const root = document.getElementById('root')

    let apidata = await fetch('https://api.github.com/users')
    let array = await apidata.json()

    array.map((elem) => {
        root.innerHTML += `<div class="card">
        <div><img src="${elem.avatar_url}"></div>
        <div><h2>${elem.login}</h2></div>
        </div>`
    })
}
fetchapi()
