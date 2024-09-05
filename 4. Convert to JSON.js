function convertToJSON(name, last, hair) {
    let obj = {};
    obj.name = name;
    obj.lastName = last;
    obj.hairColor = hair;

    let parse = JSON.stringify(obj);
    console.log(parse);

}
convertToJSON('George', 'Jones', 'Brown');
