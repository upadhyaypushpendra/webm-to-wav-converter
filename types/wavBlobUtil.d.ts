export = getWaveBlob;
/**
 *
 * @param {Blob | Blob[]} blobData - Blob or Blob[] to be converted to audio/wave Blob
 * @param {boolean} as32BitFloat - Convert to 16-bit or 32-bit file, default 16-bit
 * @param {AudioContextOptions} contextOptions - optiosn needs to be used for encoding
 * @returns
 */
declare function getWaveBlob(blobData: Blob | Blob[], as32BitFloat: boolean, contextOptions?: AudioContextOptions): Promise<Blob>;
//# sourceMappingURL=wavBlobUtil.d.ts.map