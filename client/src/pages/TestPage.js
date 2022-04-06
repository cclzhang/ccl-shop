import React, { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../assets/Untitled.png'

const TestPage = () => {
  // const [data, setData] = useState({});
  const [img, setImg] = useState('');
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})
  const [imgUrl, setImgUrl] = useState('')

  // useEffect(() => {
  //   axios
  //     .get('http://127.0.0.1:5000/testPage')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log("error: ", err))
  // }, [])

  const onChange = e => {
    setImg(e.target.files[0])
    setFilename(e.target.files[0].name)
    setImgUrl(`../assets/${filename}`)
    console.log(e.target.files[0])
  }

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    

    formData.append('file', img);
    formData.append('filename', "test");
    console.log(formData)
    // return axios.get('/user/12345');
    // console.log(res)

    const fetchImage = async () => {
      const res = await fetch(imgUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };

    fetchImage()
    // axios
    //   .post("http://127.0.0.1:5000/testPage", {
    //     test:"hello"
    //   })
    //   .then(res => console.log(res.data))
    //   .catch(err => console.warn(err));
  

    // axios.post('/testPage', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // try {
    //   const res = await axios.post('http://127.0.0.1:5000/testPage', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'Access-Control-Allow-Origin': '*'
    //     }
    //   })
    //   // const { imgName, imgPath } = res.data
    //   // setUploadedFile({imgName, imgPath})
    //   // console.log(uploadedFile)
    //   console.log()
    // } catch(err) {
    //   console.log("error: ", err)
    // }
  }


  return (
    <div>
      {/* <form method="POST" action="/admin" onSubmit={handleSave} encType="multipart/form-data">
        <input type="file" name="image" id="image" value={selectedImg} onChange={handleImage} accept="image/*" multiple/>
        <label htmlFor="image">Select image... </label>
        <button type="submit">upload</button>
      </form>
      <p>{data}</p> */}
      <form action="http://127.0.0.1:5000/testPage" method="POST" name="myForm" id="myForm" encType="multipart/form-data" onSubmit={handleUpload}>
        <input type="file" name="image" id="image" onChange={onChange} />
        <label htmlFor="image">{filename}</label>
        <button type="submit">Upload</button>
      </form>
      <img src={imgUrl} alt="img" />
      <img required src={image} alt="img" />
      <img src="https://via.placeholder.com/150" alt="" />
    </div>
  )
}

export default TestPage