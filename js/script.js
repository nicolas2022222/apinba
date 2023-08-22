async function searchPlayer() {
            const inputField = document.getElementById("inputField");
            const playerName = inputField.value;

            const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`);
            const data = await response.json();

            const playerInfoDiv = document.getElementById("player");
            playerInfoDiv.innerHTML = "";

            if (data.data.length > 0) {
                const player = data.data[0];
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("player-card");
                cardDiv.innerHTML = `
                    <h3>${player.first_name} ${player.last_name}</h3>
                    <p>Posição: ${player.position}</p>
                    <p>Time: ${player.team.full_name}</p>
                `;
                playerInfoDiv.appendChild(cardDiv);
            } else {
                const errorMessageDiv = document.createElement("div");
                errorMessageDiv.textContent = "Jogador não encontrado.";
                playerInfoDiv.appendChild(errorMessageDiv);
            }
        }





