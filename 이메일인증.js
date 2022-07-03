var 이메일주소 = prompt("이메일 주소");
fetch("/graphql", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"query":"\n    mutation ($email: String!) {\n        changeUserEmail(email: $email) {\n            \n    status\n    result\n\n        }\n    }\n","variables":{"email":이메일주소}})
});