import { newDynamicClass } from "../newDynamicClass";

describe('newDynamicClass', () =>{

    const originalEnv = process.env;

    beforeEach(() =>{
        process.env = {...originalEnv};
        process.env.CLASS_NAME = 'TestClasse';
    });

    afterEach(()=>{
        process.env = originalEnv;
    });

    it('cree une classe avec le nom defini dans CLASS_NAME', () =>{
        

        const { newDynamicClass } = require('../newDynamicClass');
        console.log("Valeur de CLASS_NAME :", process.env.CLASS_NAME);
        const DynamicClass = newDynamicClass("TestClasse");

        expect(DynamicClass).toBeDefined();
        expect(typeof DynamicClass).toBe('function');

        const instance = new DynamicClass({key: "value"});
        expect(instance.data).toEqual({key: "value"});
    });

    it('erreur si CLASS_NAME est pas defini',() =>{

        delete process.env.CLASS_NAME;

        const { newDynamicClass } = require('../newDynamicClass');
        expect (()=> newDynamicClass()).toThrow("la variable d'environnement n'est pas defini");
    });
});