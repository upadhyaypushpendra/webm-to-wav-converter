export = downloadWav;
/**
 * @param {Blob | Blob[]} blobData - Blob or Blob[] to be converted to audio/wave Blob
 * @param {boolean} as32BitFloat - Convert to 16-bit or 32-bit file
 * @param {string} filename - Name of the file
 * @param {AudioContextOptions} contextOptions - audio context options for encoding
 * @returns
 */
declare function downloadWav(blobData: Blob | Blob[], as32BitFloat: boolean, filename?: string, contextOptions?: AudioContextOptions): Promise<void>;
//# sourceMappingURL=downloadUtil.d.ts.map