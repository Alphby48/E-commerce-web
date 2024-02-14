import stores from "../database/store.js";
class CatalogData {
  static searchcatalog(katalog) {
    return new Promise((resolve, reject) => {
      const filterkatalok = stores.filter((store) =>
        store.untuk.toUpperCase().includes(katalog.toUpperCase())
      );

      if (filterkatalok.length) {
        resolve(filterkatalok);
      } else {
        reject(`${katalog}} tdak ada`);
      }
    });
  }
}

export default CatalogData;
