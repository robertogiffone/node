test('Conhecendo as principais assertivas do jest', () =>{
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Trabalhando com objetos', () =>{
    const obj = {name: 'Roberto', mail: 'roberto@mail.com'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Roberto');
    expect(obj.name).toBe('Roberto');

    const obj2 = {name: 'Roberto', mail: 'roberto@mail.com'};
    expect(obj).toEqual(obj2);
});
