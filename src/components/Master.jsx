
import { useRef, useState } from 'react';
const CameraRecorder = () => {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user',
                },
                audio: false,
            });

            videoRef.current.srcObject = stream;
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            const chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    chunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const videoBlob = new Blob(chunks, { type: 'video/mp4' });
                setVideoBlob(videoBlob);
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error('حدث خطأ أثناء الوصول إلى الكاميرا.', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const downloadVideo = () => {
        if (videoBlob) {
            const videoUrl = URL.createObjectURL(videoBlob);

            const a = document.createElement('a');
            a.href = videoUrl;
            a.download = 'recorded-video.mp4';
            a.click();

            URL.revokeObjectURL(videoUrl);
        }
    };

    return (
        <div>
            <h1>تسجيل فيديو من الكاميرا الأمامية</h1>
            <video ref={videoRef} autoPlay muted />
            <div>
                <button onClick={startRecording} disabled={isRecording}>
                    {isRecording ? 'جارٍ التسجيل...' : 'بدء التسجيل'}
                </button>
                <button onClick={stopRecording} disabled={!isRecording}>
                    إيقاف التسجيل
                </button>
                {videoBlob && (
                    <button onClick={downloadVideo}>تنزيل الفيديو</button>
                )}
            </div>
        </div>
    );
};

export default CameraRecorder;