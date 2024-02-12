import stores from "../database/store.js";
class fashionData {
  static searchfashion(kataKunci) {
    return new Promise((resolve, reject) => {
      const filterFashion = stores.filter((store) =>
        store.kategori.toUpperCase().includes(kataKunci.toUpperCase())
      );

      if (filterFashion.length) {
        resolve(filterFashion);
      } else {
        reject(`${kataKunci} tdak ada`);
      }
    });
  }
}

export default fashionData;
