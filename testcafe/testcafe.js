import { Selector } from 'testcafe'

const creditoAnchor = Selector('#credito')
const interesAnchor = Selector('#interes')
const tasasAnchor = Selector('#tasas')
const altasAnchor = Selector('#altas')
fixture`Menu Test`
  .page`http://localhost:8080/`
test('El menú anidado se muesta y navegación funciona', async t => {
  await t
    .hover(creditoAnchor)
    .hover(interesAnchor)
    .hover(tasasAnchor)
    .click(altasAnchor)
  const location = await t.eval(() => window.location)
  await t.expect(location.hash).eql('#credito')
})
