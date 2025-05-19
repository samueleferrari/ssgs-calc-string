const {concat, rmspace, capitols} = require('../src/string');


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

test('Upper case of "ciao" to equal "CIAO"', ()=>{
    expect(capitols("ciao")).toBe("CIAO");
});

test('Upper case of "cane" to equal "CANE"', ()=>{
    expect(capitols("cane")).toBe("CANE");
});

test('Upper case of "CANE" to equal "CANE"', ()=>{
    expect(capitols("CANE")).toBe("CANE");
});
