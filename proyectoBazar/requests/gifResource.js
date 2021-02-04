let axios = require("axios");
let defaults = require("./default");
const url = "gifs/"

let gifResource = {
    random: function(){
        return axios({
            ...defaults,
            method: "GET",
            url: url + "random",
            params: {
                api_key:"CYNYxGnhASYSqWmH8RB2TbKqSpZ3i5Mb"
            }
        })
    },
    search: function () {
        return axios({
            ...defaults,
            method: "GET",
            url: url + "search",
            params: {
                api_key: "CYNYxGnhASYSqWmH8RB2TbKqSpZ3i5Mb"
            }
        })
    }    
}

module.exports = gifResource;
