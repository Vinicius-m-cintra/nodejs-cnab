import * as fs from 'fs'
import { generateRemessaCnab, BANK } from '../src/nodejs-cnab'
const cnabCode = 400

describe('Remessa CNAB 400', function() {
  it('BB 001', () => {
    const filesLayout = makeFilesLayout(BANK.bb.remessa[cnabCode], BANK.bb.code, cnabCode)
    const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.bb.code) || ''
    expect(finalresult.length).toBeGreaterThan(800)
    fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.bb.code}.rem`, finalresult)
  })

  // it('Santander 033', () => {
  //   const filesLayout = makeFilesLayout(BANK.santander.remessa[cnabCode], BANK.santander.code, cnabCode);
  //   const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.santander.code) || '';
  //   expect(finalresult.length).toBeGreaterThan(800);
  //   fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.santander.code}.rem`, finalresult);
  // });

  // it('Banrisul 041', () => {
  //   const filesLayout = makeFilesLayout(BANK.santander.remessa[cnabCode], BANK.santander.code, cnabCode);
  //   const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.santander.code) || '';
  //   expect(finalresult.length).toBeGreaterThan(800);
  //   fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.santander.code}.rem`, finalresult);
  // });

  // it('Caixa 104', () => {
  //   const filesLayout = makeFilesLayout(BANK.caixa.remessa[cnabCode], BANK.caixa.code, cnabCode);
  //   const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.caixa.code) || '';
  //   expect(finalresult.length).toBeGreaterThan(800);
  //   fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.caixa.code}.rem`, finalresult);
  // });

  it('Bradesco 237', () => {
    const filesLayout = makeFilesLayout(
      BANK.bradesco.remessa[cnabCode],
      BANK.bradesco.code,
      cnabCode
    )
    const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.bradesco.code) || ''
    expect(finalresult.length).toBeGreaterThan(800)
    fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.bradesco.code}.rem`, finalresult)
  })

  // it('Itaú 341', () => {
  //   const filesLayout = makeFilesLayout(BANK.bancoob.remessa[cnabCode], BANK.bancoob.code, cnabCode);
  //   const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.bancoob.code) || '';
  //   expect(finalresult.length).toBeGreaterThan(800);
  //   fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.bancoob.code}.rem`, finalresult);
  // });

  // it('Bancoob 756', () => {
  //   const filesLayout = makeFilesLayout(BANK.bancoob.remessa[cnabCode], BANK.bancoob.code, cnabCode);
  //   const finalresult = generateRemessaCnab(filesLayout, cnabCode, BANK.bancoob.code) || '';
  //   expect(finalresult.length).toBeGreaterThan(800);
  //   fs.writeFileSync(`test/gen/example-${cnabCode}-${BANK.bancoob.code}.rem`, finalresult);
  // });
})

const makeFilesLayout = (files: any, bankCode: any, cnabCode: any) => {
  const filesLayout: any = {}
  files.map((f: string | number) => {
    filesLayout[f] = JSON.parse(
      fs.readFileSync(`test/data/cnab${cnabCode}/${bankCode}/${f}.json`, 'utf8')
    )
  })
  return filesLayout
}

export const exampleRemessa = `02RETORNO01COBRANCA       00000000000004628596PAGAR.ME PAGAMENTOS S.A.      237BRADESCO       2005160160000000001                                                                                                                                                                                                                                                                          220514         000001
1021872705300017400000250122900004693                         000000000000000000600000000000000000000000000506200516          00000000000000000000000000000000000150034103830  000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000   210516             00000000000000                                                                  000002
9201237          000000010000000000150000000001          00000000000000000000000000500000010000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000                                                                                                                                                                              00000000000000000000000         000003`
