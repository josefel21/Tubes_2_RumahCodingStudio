document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', uploadFile);
  });

async function uploadFile() {
    const formData = new FormData(document.getElementById('uploadForm'));
    try {
      const response = await fetch('/uploadPost', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  }