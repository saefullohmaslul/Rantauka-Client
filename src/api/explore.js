import axios from "axios";

const API_HOST = "http://192.168.1.28:5000";

export const signupAccount = async data => {
  const response = await axios({
    method: "post",
    url: `${API_HOST}/api/v1/signup`,
    data: {
      fullName: data.fullName,
      email: data.email,
      telephone: data.telephone,
      password: data.password,
      confirmPassword: data.confirmPassword
    }
  });
  return response;
};

export const loginAccount = async data => {
  const response = await axios({
    method: "post",
    url: `${API_HOST}/api/v1/login`,
    data: {
      email: data.email,
      password: data.password
    }
  });
  return response;
};

export const getAllKostList = async () => {
  const response = await axios.get(`${API_HOST}/api/v1/houses`);
  return response.data;
};

export const getKostById = async id => {
  const response = await axios.get(`${API_HOST}/api/v1/house/${id}`);
  return response.data;
};

export const postKost = async (data, token) => {
  const {
    namaKost,
    alamatKost,
    jenisKost,
    hargaKost,
    luasKamar,
    deskripsiKost,
    booking,
    latitudeKost,
    longitudeKost,
    fotoKost,
    fasilitasKost
  } = data;

  let formData = new FormData();
  formData.append("house_name", namaKost);
  formData.append("provinsi", alamatKost.provinsi);
  formData.append("kabupaten", alamatKost.kabupaten);
  formData.append("kecamatan", alamatKost.kecamatan);
  formData.append("latitude", latitudeKost);
  formData.append("longitude", longitudeKost);
  formData.append("house_type", jenisKost);
  formData.append("house_length", luasKamar.panjang);
  formData.append("house_width", luasKamar.lebar);
  formData.append("house_description", deskripsiKost);
  formData.append("house_price", hargaKost);
  formData.append("booking", booking);
  fasilitasKost.forEach(fasilitas => {
    formData.append("facilities", JSON.stringify(fasilitas));
  });
  fotoKost.forEach(photo => {
    formData.append("image", {
      uri: photo,
      type: "image/jpeg",
      name: `${Date.now()}.jpeg`
    });
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(
    `${API_HOST}/api/v1/house`,
    formData,
    config
  );

  return response;
};
