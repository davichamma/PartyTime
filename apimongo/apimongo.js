$(document).ready(function () {

});

var apiMongo = {

    url: function () {
        return "http://localhost:3000/";
    },

    auth: function () {
        var settings = {
            "url": "http://localhost:3000/api/auth/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "email": "davi@teste.com",
                "password": "teste123"
            }),
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    },

    getFesta: function () {
        var settings = {
            "url": "http://localhost:3000/api/party/userparties",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2aSIsImlkIjoiNjMwN2NjMjNkZDQ4YmIyMDMyYTFjNjdhIiwiaWF0IjoxNjYxNDU1Mzk1fQ.YE6d_TtaInfmROT7E1hpv6p5NPpcMrLPdu0cOXBJGeQ"
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    },

    getAllFesta: function () {
        var settings = {
            "url": "http://localhost:3000/api/party/all",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    },

    insereFesta: function() {
        var settings = {
            "url": "http://localhost:3000/api/party",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2aSIsImlkIjoiNjMwN2NjMjNkZDQ4YmIyMDMyYTFjNjdhIiwiaWF0IjoxNjYxNDU1Mzk1fQ.YE6d_TtaInfmROT7E1hpv6p5NPpcMrLPdu0cOXBJGeQ",
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "id": "63090efb7e1a547bf5aceb4a",
              "title": "minha festa6",
              "description": "minha descricao2",
              "partyDate": "2022-12-27",
              "privacy": "true",
              "photos": "",
              "userId": "6307cc23dd48bb2032a1c67a"
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }

}
