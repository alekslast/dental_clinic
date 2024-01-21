// DownloadButton.jsx
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrls = [
      process.env.PUBLIC_URL + '../PriceBeauty/Price1.pdf',
      process.env.PUBLIC_URL + '../PriceBeauty/Price2.pdf', // Add the correct path for Aero_RU.pdf
    ];

    // Function to download a single file
    const downloadFile = (url, fileName) => {
      return fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const fileUrl = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement('a');
          a.href = fileUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch((error) => console.error('Error downloading file:', error));
    };

    // Download files sequentially
    const sequentialDownload = async () => {
      for (let i = 0; i < fileUrls.length; i++) {
        await downloadFile(fileUrls[i], `Price${i + 1}.pdf`);
      }
    };

    // Download files in parallel
    const parallelDownload = () => {
      const downloadPromises = fileUrls.map((url, index) =>
        downloadFile(url, `Price${index + 1}.pdf`)
      );

      Promise.all(downloadPromises)
        .then(() => console.log('All files downloaded successfully'))
        .catch((error) => console.error('Error downloading files:', error));
    };

    // Choose either sequential or parallel download
    // Uncomment one of the following lines based on your preference
    // sequentialDownload();
     parallelDownload();
  };

  return (
    <button className="custom-button" onClick={handleDownload}>
      Descărcați prețuri
    </button>
  );
};

export default DownloadButton;
