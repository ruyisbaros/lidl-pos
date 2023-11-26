import React, { useRef } from "react";
import { toast } from "react-toastify";

const Picture = ({ blobPicture, setBlobPicture }) => {
  const inputRef = useRef(null);
  const handlePicture = (e) => {
    let pic = e.target.files[0];
    if (pic) {
      if (
        pic.type !== "image/jpeg" &&
        pic.type !== "image/png" &&
        pic.type !== "image/gif" &&
        pic.type !== "image/webp"
      ) {
        toast.error("You can upload jpeg, png or webp types!");
        return;
      } else if (pic.size > 1024 * 1024 * 5) {
        toast.error("Max 5mb size allowed!");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload = (e) => {
        setBlobPicture(e.target.result);
      };
    }
  };
  const handleChangePic = () => {
    setBlobPicture("");
    inputRef.current.click();
  };
  return (
    <div className="pictureContainer ">
      <label htmlFor="picture" className="pictureTitle ">
        Picture (optional)
      </label>
      {blobPicture ? (
        <div>
          <img className="blobImg " src={blobPicture} alt="profile" />
          <div className="changePicture" onClick={handleChangePic}>
            Remove
          </div>
        </div>
      ) : (
        <div className="changeInput" onClick={() => inputRef.current.click()}>
          Upload Picture
        </div>
      )}
      <input
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/webp"
        onChange={handlePicture}
      />
    </div>
  );
};

export default Picture;
