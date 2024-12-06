import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );

    
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    });


    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy(); // Para corroborar si es null, undefined o false

    });


    test('getHeroesByOwner debe de regresar heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 ); 
        expect( heroes ).toEqual( heroes.filter(  ( heroe ) => heroe.owner === owner ))
    
    });


    test('getHeroesByOwner debe de regresar heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 ); 
        expect( heroes ).toEqual( heroes.filter(  ( heroe ) => heroe.owner === owner ))
    
    });
    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC 
    // Length === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2



});