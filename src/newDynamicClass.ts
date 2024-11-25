export function newDynamicClass(className?: string) {

    const nomClasse = className || process.env.CLASSE_NAME;
    console.log("valeur: ", nomClasse);

    if(!nomClasse){
        throw new Error("la variable d'environnement n'est pas defini");
    }

    return class{
        constructor(public data: any){}
    }
};