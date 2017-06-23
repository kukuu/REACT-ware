/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Svetlana",
            last: "Adu-Sarkodie",
            age: 51,
            description: "Married to Alexander",
            thumbnail: "http:#"
        },
        {
            id: 2,
            first: "Letitia AKA Big Fish",
            last: "Adu-Sarkodie",
            age: 26,
            description: "First born",
            thumbnail: "http:#"
        },
        {
            id: 3,
            first: "Jacqueline AKA Kusik J",
            last: "Adu-Sarkodie",
            age: 22,
            description: "Second and last born",
            thumbnail: "http://#"
        }
    ]
}
