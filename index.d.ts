
/**
 * @param blobData Blob or Blob[] to be converted to audio/wave Blob
 * @param as32BitFloat Convert to 16-bit or 32-bit file
 * @return Resulting audio/wave binary blob.
 */
export function getWaveBlob(audioBuffer: Blob | Blob[], as32BitFloat: boolean): Promise<Blob>;

/**
 * @param data Blob or Blob[] to be converted to audio/wave Blob
 * @param as32BitFloat Convert to 16-bit or 32-bit file
 */
export function downloadWav(data: Blob | Blob[], as32BitFloat: boolean): Promise<void>;
