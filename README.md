# webm-to-wav-converter

Browser's `MediaRecorder` API generate a `audio/webm` Blob which is not very useful if you want to do some processing on the audio. This is a simple JavaScript package to convert `audio/webm` audio recorded in browser into `audio/wave` format. It doesn't use any `Worker` to do the conversion.

<br/>

---

<br/>

## Get the Audio Blob (`audio/wave`)

<br/>

```javascript

const { getWaveBlob } = require("webm-to-wav-converter");

// or import { getWaveBlob } from "webm-to-wav-converter";


const constraints = { audio: true, video: false };

try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    const mediaRecorder = new MediaRecorder(stream);
    
    const data = [];

    mediaRecorder.ondataavailable = e => e.data.size && data.push(e.data);
    
    mediaRecorder.onstop = () => {
        // For 16-bit audio
        const wavBlob = getWaveBlob(data,false);

        // For 32-bit audio
        const wavBlob = getWaveBlob(data,true);
    };
} catch (err) {
    console.error(err);
};
```

<br/>

---


<br/>

## Download the Wav File

<br/>


```javascript

const { downloadWav } = require("webm-to-wav-converter");

// or import { downloadWav } from "webm-to-wav-converter";

const constraints = { audio: true, video: false };

try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    const mediaRecorder = new MediaRecorder(stream);
    
    const data = [];

    mediaRecorder.ondataavailable = e => e.data.size && data.push(e.data);
    
    mediaRecorder.onstop = () => {
        // For 16-bit audio file
        downloadWav(data,false);

        // For 32-bit audio file
        downloadWav(data,true);
    };
} catch (err) {
    console.error(err);
};

```