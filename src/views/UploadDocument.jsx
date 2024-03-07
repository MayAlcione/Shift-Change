import BackButton from './BackButton';
import React, { useState } from 'react';
import ButtonUploadFile from './ButtonUploadFile';

function UploadDocument() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }  
  
  function handleSubmit(event) {
     event.preventDefault();
     
     setTimeout(() => {
      setFileUploaded(true);
      setUploadMessage('¡Archivo subido correctamente!');
    }, 2000);
  }

  return (
    <>
      <h1>Cambio de turno</h1>
      <form onSubmit={handleSubmit}> 
             
        <ButtonUploadFile handleFileChange={handleFileChange}/>
        {fileUploaded && <p>{uploadMessage}</p>}
        {selectedFile ? <p>Archivo seleccionado: {selectedFile.name}</p> : <p>Ningún archivo seleccionado</p>}
        <BackButton/>
      </form>
      
    </>
  );
}

export default UploadDocument;