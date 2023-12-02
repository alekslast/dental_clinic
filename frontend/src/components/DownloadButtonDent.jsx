// DownloadButton.jsx
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + '../PriceDent/Aero_RU.doc';

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = '316_Dent_Price_Ru.doc';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error('Ошибка при скачивании файла:', error));
  };

  return (
    <button class="custom-button" onClick={handleDownload}>
      Descărcați prețuri
    </button>
  );
};

export default DownloadButton;
