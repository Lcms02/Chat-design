btnConfig = document.querySelector("#btnConfig");
divConfig = document.querySelector("#colunaConfig");
divChat = document.querySelector("#colunaNav");
btnFechaConfig = document.querySelector("#botaoFecharConfig");

btnConfig.addEventListener("click", function () {
    divConfig.style.display = "flex";
    divChat.style.display = "none";
    btnConfig.style.display = "none";
    }
);

btnFechaConfig.addEventListener("click", function () {
    divConfig.style.display = "none";
    divChat.style.display = "flex";
    btnConfig.style.display = "flex";
    }
);