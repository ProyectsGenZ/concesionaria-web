const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const assets = require('../src/data/gallery-assets.json');
const sources = require('../public/images/gallery/SOURCES.json');

test('Galerías: los once modelos ampliados tienen exterior, interior y detalles propios', () => {
  assert.equal(Object.keys(assets).length, 11);
  const paths = new Set();
  for (const photos of Object.values(assets)) {
    assert.deepEqual(photos.map(photo => photo.category).sort(), ['Detalles', 'Exterior', 'Interior']);
    for (const photo of photos) {
      assert.ok(!paths.has(photo.url), `Imagen repetida entre modelos: ${photo.url}`);
      paths.add(photo.url);
      assert.ok(photo.title);
    }
  }
});

test('Galerías: todos los archivos son imágenes locales válidas, con tamaño acotado y fuente registrada', () => {
  const root = path.resolve(__dirname, '../public');
  for (const [vehicleId, photos] of Object.entries(assets)) {
    for (const photo of photos) {
      const filename = path.resolve(root, `.${photo.url}`);
      assert.ok(filename.startsWith(`${root}${path.sep}`));
      const bytes = fs.readFileSync(filename);
      const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
      const png = bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      const webp = bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
      assert.ok(jpeg || png || webp, `Formato inválido (posible HTML): ${photo.url}`);
      assert.ok(bytes.length < 500000, `Imagen sin optimizar: ${photo.url}`);
      assert.ok(sources.some(source => source.vehicleId === vehicleId && source.localPath === photo.url && source.sourceUrl.startsWith('https://')));
    }
  }
});
