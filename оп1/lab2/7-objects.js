'use strict'

function fn() {
    const ObjectConst = { name : "Hanako" };
    let ObjectLet = { name : "Lilly" };

    console.log(ObjectConst, ObjectLet);

    ObjectConst.name = "Emmy";
    ObjectLet.name = "Rin";
    
    console.log(ObjectConst, ObjectLet);

    //ObjectConst = { name: "Hisao" }; //Помилка, бо const не можна переприсвоювати
    ObjectLet = { name : "Kenji" }; //Працює, бо let можна переприсвоювати

    console.log(ObjectConst, ObjectLet);
}

fn()