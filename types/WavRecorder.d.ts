export = WavRecorder;
/** Class Representing a WavRecorder */
declare class WavRecorder {
    /**
     * @property {MediaRecorder} mediaRecorder - MediaRecorder instance
     */
    mediaRecorder: any;
    /**
     * @property {MediaStream} - stream User's MediaStream
     */
    stream: any;
    /**
     * @property {Blob} __data - Recorded WEBM data
     */
    __data: any;
    /**
     * Access user media from the audio input, will be asking audio permission if not available already
     * @param {MediaTrackConstraints} constraints - MediaTrackConstraints to be applied, if any defaults = { audio: true, video: false }
     * @return - Got User MediaStream or not
     */
    start(constraints?: MediaTrackConstraints): Promise<boolean>;
    /**
     * Stop recording the audio
     * @returns {void}
     */
    stop(): void;
    /**
     * Download the wav audio file
     * @param {string} filename - Optional name of the file to be downloaded, without extension
     * @param {boolean} as32Bit - Audio required in 32-bit, default is 16-bit.
     * @param {AudioContextOptions} contextOptions - optiosn needs to be used for encoding
     * @returns {void}
     */
    download(filename?: string, as32Bit?: boolean, contextOptions?: AudioContextOptions): void;
    /**
     * Get the recorded wav audio Blob
     * @param {boolean} as32Bit - Get 32-bit audio, default is 16-bit
     * @param {AudioContextOptions} contextOptions - optiosn needs to be used for encoding
     * @returns {void}
     */
    getBlob(as32Bit?: boolean, contextOptions?: AudioContextOptions): void;
}
//# sourceMappingURL=WavRecorder.d.ts.map