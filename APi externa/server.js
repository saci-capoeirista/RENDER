//API KEY
//4c51b65b5f465c5598ca55cf9c50870f
const API_KEY = "4c51b65b5f465c5598ca55cf9c50870f"

const axios = require("axios");
const express = require('express');
const app = express();
app.use(express.json());

try {
    app.get('/clima/:cidade', async (req, res) => {
    
            let { cidade } = req.params
            let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
            let clima = resposta.data
            res.json(clima).status(200)
    })
    
} catch (error) {
    console.error("Erro ao coletar os dados:", error.message);
}

const port = 3000;

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
})