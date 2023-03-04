export default class NPM {
  static async getVersion(...pkgNames: string[]) {
    const requests = pkgNames.map((pkgName) =>
      fetch(`https://registry.npmjs.org/${pkgName}/latest`)
    );

    const responses = await Promise.all(requests);
    const blobs = await Promise.all(
      responses.map((response) => response.json())
    );

    const blobList = blobs.map((blob, idx) => ({
      [pkgNames[idx]]: blob.version,
    }));

    return Object.assign({}, ...blobList);
  }
}
