export const uploadImage = async (file: any) => {
  let response = await fetch('/api/upload');
  let data = await response.json();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', data.api_key);
  formData.append('timestamp', data.timestamp);
  formData.append('signature', data.sig);
  //upload odrazu na cloudinary
  response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData
    }
  );

  data = response.json();

  return data;
};
