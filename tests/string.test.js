const {concat, rmspace} = require('../src/string');


test('concat "ciao" + "ciao" to equal "ciaociao"', ()=>{
    expect(concat("ciao","ciao")).toBe("ciaociao");
});

test('concat "melo" + "pero" to equal "melopero"', ()=>{
    expect(concat("melo","pero")).toBe("melopero");
});

test('remove space from "ciao ciao" to equal "ciao"', ()=>{
    expect(rmspace("ciao ciao")).toBe("ciaociao");
});

test('remove space from "  ciao  " to equal "ciao"', ()=>{
    expect(rmspace("  ciao  ")).toBe("ciao");
});
