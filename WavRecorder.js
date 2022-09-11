const getWaveBlob = require("./wavBlobUtil");
const downloadWav = require("./downloadUtil");

/** Class Representing a WavRecorder */
class WavRecorder {
    /**
     * @property {MediaRecorder} mediaRecorder - MediaRecorder instance
     */
    mediaRecorder;

    /**
     * @property {MediaStream} - stream User's MediaStream
     */
    stream;

    /**
     * @property {Blob} __data - Recorded WEBM data
     */
    __data;

    /**
     * Access user media from the audio input, will be asking audio permission if not available already
     * @param {MediaTrackConstraints} constraints - MediaTrackConstraints to be applied, if any defaults = { audio: true, video: false }
     * @return - Got User MediaStream or not
     */
    async start(constraints = { audio: true, video: false }) {
        if (this.mediaRecorder?.state === "recording") return true;

        const mediaTrackConstraints = constraints || { audio: true, video: false };

        try {
            this.stream = await navigator.mediaDevices.getUserMedia(mediaTrackConstraints);

            this.mediaRecorder = new MediaRecorder(this.stream);

            this.mediaRecorder.ondataavailable = (e) => this.__data = e.data;
        } catch (err) {
            console.error(err);
            return false;
        }

        this.mediaRecorder?.start();
        return true;
    }

    /**
     * Stop recording the audio
     * @returns {void}
     */
    stop() {
        if (this.mediaRecorder?.state !== "recording") return true;

        this.mediaRecorder.stop();
        this.mediaRecorder.onstop = () => {
            this.stream.getTracks().forEach(track => track.stop());
            this.mediaRecorder = undefined;
            this.stream = undefined;
        }
    }

    /**
     * Download the wav audio file
     * @param {string} filename - Optional name of the file to be downloaded, without extension 
     * @param {boolean} as32Bit - Audio required in 32-bit, default is 16-bit.
     * @param {AudioContextOptions} contextOptions - optiosn needs to be used for encoding
     * @returns {void}
     */
    async download(
        filename = null, as32Bit = false, contextOptions = undefined
    ) {
        if (this.__data) return await downloadWav(this.__data, as32Bit, filename, contextOptions);
    }

    /**
     * Get the recorded wav audio Blob
     * @param {boolean} as32Bit - Get 32-bit audio, default is 16-bit
     * @param {AudioContextOptions} contextOptions - optiosn needs to be used for encoding
     * @returns {void}
     */
    async getBlob(as32Bit = false, contextOptions = undefined) {
        if (this.__data) return await getWaveBlob(this.__data, as32Bit, contextOptions);
    }
}

module.exports = WavRecorder;