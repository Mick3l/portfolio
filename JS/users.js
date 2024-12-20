function getRandomNumber() {
    return crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32
}

function withTimeout(prom, time) {
    return Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);
}

let i = 0;

async function fetchData() {
    i += 1
    document.getElementById("preloader").style.display = "block"
    const url = "https://json-placeholder.mock.beeceptor.com/users";

    try {
        const response = await withTimeout(fetch(url), 2000);

        if (!response.ok) {
            document.getElementById("output").innerText =
                "⚠ Something went wrong :(\n" +
                `Error: ${response.status} ${response.statusText}`
            return
        }

        const users = await response.json();
        const outputElement = document.getElementById("fetched_users");
        outputElement.innerHTML = "";

        document.getElementById("preloader").style.display = "none"

        users.forEach(user => {
            if (getRandomNumber() < 0.5) {
                const postElement = document.createElement("div");
                postElement.innerHTML = `<h3>${user.username} (${user.name})</h3>`;
                outputElement.appendChild(postElement);
            }
        });
        i = 0
    } catch (e) {
        document.getElementById("error_msg").innerText = `⚠ Something went wrong, retry ${i}`
        await fetchData()
    }
}

document.getElementById("users_list__load").onclick = fetchData
