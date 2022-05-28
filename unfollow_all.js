var post = async function(body, s=true){
    if(s){body=JSON.stringify(body);}
    return await fetch("/graphql", {method: "POST", headers: {"Content-Type": "application/json"}, body: body});
};
var findUser = async function(user){
    var uData = await post(`{"query":"query($username:String) {user(username:$username){id}}","variables":{"username":"${user}"}}`, 0);
    var data = await uData.json();
    return data;
};
var getF = async function(lid){
    var d = await post({"query":"\n    query SELECT_FOLLOWINGS($user: String, $pageParam: PageParam, $searchAfter: JSON){\n        followings(user: $user, pageParam: $pageParam, searchAfter: $searchAfter) {\n            searchAfter\n            list {\n                \n    id\n    follow {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n            }\n        }\n    }\n","variables":{"user":lid,"pageParam":{"display":99}}})
    return (await d.json());
};
var unF = async function(lid){
    var d = await post({"query":"\n    mutation UNFOLLOW(\n        \n    $user: String\n\n    ) {\n        unfollow(\n            \n    user: $user\n\n        ) {\n            \n    id\n    \n    id\n    user {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n    \n    id\n    follow {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n\n        }\n    }\n","variables":{"user":lid}});
    return (await d.json());
};

console.log("프로필 링크 찾는 중...");
var username = /username=(?<a>.+?);/g.exec(document.cookie).groups.a;
var uid = (await findUser(username)).data.user.id;
console.log(`프로필 링크: https://playentry.org/profile/${uid}`);
var d = [];
do {
    d = getF(uid);
    var list = data.following.lists;
    for(var i = 0; i < list.length; ++i){
        await unF(list[i]);
        console.log(`팔로우를 취소했습니다: https://playentry.org/profile/${list[i]}`);
    }
} while(d.length);
