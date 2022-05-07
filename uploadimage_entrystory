(async function(){
    var load = function(){
        return new Promise(function(res, rej){
            let input = document.createElement("input");
            input.type = "file";
            input.onchange = ()=>{
                let extension = input.files[0].name.match(/^.+\.([^\.]+)$/)[1]
                let fd = new FormData();
                fd.append("file", input.files[0]);
                fd.append("type", "notcompress");
                fetch("https://playentry.org/rest/picture", { method : "POST",body : fd}).then(r=>r.json()).then(j=>{
                    res(j._id);
                    input.remove();
                });
            }
            document.body.append(input);
            input.style.display = "none";
            var h2 = document.querySelector("h2");
            h2.innerText = "화면을 클릭해주세요.";
            h2.style.textDecoration = "underline";
            console.log("<- 페이지 화면을 아무대나 클릭하세요");
            document.body.addEventListener("click", function(){
                h2.innerText = "엔트리 이야기";
                h2.style.textDecoration = "";
                input.click();
            });
            alert("화면 밖을 클릭해주세요.");
        });
    };
    var wait = function(t){
        return new Promise(function(s, j){
            setTimeout(function(){s();}, t);
        });
    };
    if(!location.href.includes("entrystory")){}
    var cont = prompt("메시지를 입력해주세요", "테스트");
    document.getElementById("Write").value = cont;
    await wait(100);
    var useID = confirm("이미지 파일을 올릴까요? (이미지 아이디가 있다면 취소를 누르세요)");
    var id = "";
    if (useID) {
        id = await load();
    } else {
        id = prompt("가지고 계신 이미지 아이디를 입력해주세요", "620a144b6e708500aab68294");
    }
    await (async function(cont, id){
    var crt = await fetch("https://playentry.org/graphql", {
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "query": "mutation CREATE_ENTRYSTORY($content: String, $image: String, $sticker: String, $cursor: String) {\n createEntryStory(\n content: $content\n image: $image\n sticker: $sticker\n cursor: $cursor\n ) {\n warning\n discuss {\n id\n title\n content\n seContent\n created\n commentsLength\n likesLength\n visit\n category\n prefix\n groupNotice\n user {\n id\n nickname\n username\n profileImage {\n id\n name\n label {\n ko\n en\n ja\n vn\n __typename\n }\n filename\n imageType\n dimension {\n width\n height\n __typename\n }\n trimmed {\n filename\n width\n height\n __typename\n }\n __typename\n }\n status {\n following\n follower\n __typename\n }\n description\n role\n __typename\n }\n images {\n filename\n imageUrl\n __typename\n }\n progress\n thumbnail\n reply\n bestComment {\n id\n user {\n id\n nickname\n username\n profileImage {\n id\n name\n label {\n ko\n en\n ja\n vn\n __typename\n }\n filename\n imageType\n dimension {\n width\n height\n __typename\n }\n trimmed {\n filename\n width\n height\n __typename\n }\n __typename\n }\n status {\n following\n follower\n __typename\n }\n description\n role\n __typename\n }\n content\n created\n removed\n blamed\n commentsLength\n likesLength\n isLike\n hide\n image {\n id\n name\n label {\n ko\n en\n ja\n vn\n __typename\n }\n filename\n imageType\n dimension {\n width\n height\n __typename\n }\n trimmed {\n filename\n width\n height\n __typename\n }\n __typename\n }\n sticker {\n id\n name\n label {\n ko\n en\n ja\n vn\n __typename\n }\n filename\n imageType\n dimension {\n width\n height\n __typename\n }\n trimmed {\n filename\n width\n height\n __typename\n }\n __typename\n }\n __typename\n }\n blamed\n __typename\n }\n __typename\n }\n}\n",
            "variables": {
                "content": cont,
                "image": id
            }
        }),
        "method": "POST"
    });/*
    var json = await crt.json();
    var lid = json.data.createEntryStory.discuss.id;
    await fetch("/graphql", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({"query":"\n    mutation REPAIR_COMMENT($id: ID, $content: String, $image: String, $sticker: String){\n        repairEntryStory(id: $id, content: $content, image: $image, sticker: $sticker){\n            \n    id\n    title\n    content\n    seContent\n    created\n    commentsLength\n    likesLength\n    visit\n    category\n    prefix\n    groupNotice\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    images {\n        filename\n        imageUrl\n    }\n    progress\n    thumbnail\n    reply\n    bestComment {\n        \n    id\n    user {\n        \n    id\n    nickname\n    username\n    profileImage {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    status {\n        following\n        follower\n    }\n    description\n    role\n\n    }\n    content\n    created\n    removed\n    blamed\n    commentsLength\n    likesLength\n    isLike\n    hide\n    image {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n    sticker {\n        \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n    }\n\n    }\n    blamed\n\n        }\n    }\n","variables":{"id":lid,"content":cont, sticker: id}})});
*/})(cont, id);
    if(confirm("업로드가 끝났습니다. 새로고침하실래요?")){
        location.replace("https://playentry.org/community/entrystory/list")
    }
    })();
