import React, { useState, useRef } from 'react';
import { PassImg } from '@/request/api';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
const CameraComponent = () => {
  const [isShowCamera, setIsShowCamera] = useState("none");
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [photo, setPhoto] = useState();
  const  router = useRouter()
  const photoRef = useRef(null);
  const cameraRef = useRef(null);

  const handleOpenCamera = async () => {
    setIsCameraOn(true)
    await navigator.mediaDevices.getUserMedia({
      video: {
        audio: false,
        facingMode: "user",
      },
    })
      .then((stream) => {
        let video = cameraRef.current;
        video.srcObject = stream;
        setIsShowCamera("block");
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  // 拍照
  const handleTakePhoto = () => {
    if (cameraRef.current && photoRef.current) {
      const context = photoRef.current.getContext('2d');
      photoRef.current.width = cameraRef.current.videoWidth;
      photoRef.current.height = cameraRef.current.videoHeight;
      context.drawImage(cameraRef.current, 0, 0, photoRef.current.width, photoRef.current.height);
      const imageDataUrl = photoRef.current.toDataURL('image/png');
      setPhoto(imageDataUrl);
      setIsCameraOn(false);
      // Stop all video streams.
      cameraRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  // 图片传给后端
  const uploadImg = async () => {
    try {
      const base64Img = photo.split(';base64,').pop();
      await PassImg(base64Img).then((res) => {
        console.log(res);
        router?.push({
          pathname:"DetectResult",
          query:{
            data:JSON.stringify(res?.data?.data)
          }})
        
      })
    } catch (error) {
      console.log(error);
      toast.error(error.toString());
    }
  };

  return (
    <div style={{
      height: '100vh', width: '100vw', position: 'relative'
    }}>
      {
        isCameraOn ?
          <video
            autoPlay playsInline
            style={{ display: isShowCamera, width: '100%', height: '100%', objectFit: 'cover' }}
            ref={cameraRef}
          >
          </video>
          : <></>
      }
      <canvas ref={photoRef} style={{ display: 'none' }} />
      {
        !isCameraOn && photo && (
          <Image
            src={photo}
            // src={photoRef}
            alt=''
            width={"100"}
            height={"100"}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
          </Image>
        )
      }
      {!isCameraOn && !photo && (
        <LoadingButton
          variant="contained"
          onClick={handleOpenCamera}
          style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' ,backgroundColor: '#8adf19',}}
        >
          Open Camera
        </LoadingButton>
      )}

      {isCameraOn && (
        <LoadingButton
          variant="contained"
          onClick={handleTakePhoto}
          style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',backgroundColor: '#8adf19', }}
        >
          Take Photo
        </LoadingButton>
      )}

      {!isCameraOn && photo && (
        <LoadingButton
          variant="contained"
          onClick={uploadImg}
          style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'green' }}
        >
          Upload Photo
        </LoadingButton>
      )}
    </div>
  );
};

export default CameraComponent;
