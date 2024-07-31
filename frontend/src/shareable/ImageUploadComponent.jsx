import { Camera } from "lucide-react";
import React from "react";

const ImageUploadComponent = ({ form, setForm, field }) => {
  const handleImageUpload = async (e) => {
    //if file size is larger
    if (e.target.files[0]?.size > 10485760) {
      return;
    }
    const imageURL = e.target.files[0];
    setForm({ ...form, [field]: imageURL });
  };
  return (
    <>
      <div className="h-20 w-20 rounded-full object-contain relative flex items-center justify-center p-1 bg-muted-foreground self-center">
        <img
          src={form[field] ? URL.createObjectURL(form[field]) : form[field]}
          alt="Avatar"
          className="h-full w-full rounded-full align-middle text-center"
        />
        <label className="absolute bottom-3 bg-muted right-0 cursor-pointer text-sm  p-1 rounded-full text-black font-semibold shadow-md">
          <input
            type="file"
            className="hidden"
            accept=".jpg, .jpeg, .png,.avif"
            onChange={(e) => handleImageUpload(e)}
          />
          <Camera className=" text-lg w-2 h-2 md:w-4 md:h-4  object-cover" />
        </label>
      </div>
    </>
  );
};

export default ImageUploadComponent;
