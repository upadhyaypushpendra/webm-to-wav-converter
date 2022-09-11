const getWaveBlob = require("./wavBlobUtil");

/**
 * @param {Blob | Blob[]} blobData - Blob or Blob[] to be converted to audio/wave Blob
 * @param {boolean} as32BitFloat - Convert to 16-bit or 32-bit file
 * @param {string} filename - Name of the file
 * @param {AudioContextOptions} contextOptions - audio context options for encoding
 * @returns
 */
async function downloadWav(
    blobData, as32BitFloat, filename = null, contextOptions = undefined
) {
    const blob = await getWaveBlob(blobData, as32BitFloat, contextOptions);

    const anchorElement = document.createElement('a');
    anchorElement.href = window.URL.createObjectURL(blob);
    anchorElement.download = filename || `recording('${as32BitFloat ? '32bit' : '16bit'}).wav`;
    anchorElement.style.display = 'none';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}

module.exports = downloadWav;