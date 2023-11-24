import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }

})

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
//this get files is not used yet it will be used when i add the backend
  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
