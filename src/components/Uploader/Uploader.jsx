import { FileUploader } from "react-drag-drop-files";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bulkUpload } from "../../api/api";

function Uploader({ open, setIsUploader }) {
  const [jsonArray, setJsonArray] = useState([]);
  const [message, setMessage] = useState("");
  const [isToast, setIsToast] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  //   when user upload csv file then it function will be execute
  const handleChange = async (e) => {
    console.log("File", e);
    if (e) {
      Papa.parse(e, {
        complete: async function (results) {
          console.log("Finish", results.data);
          setJsonArray(results.data);
          await axios
            .post(bulkUpload, { data: results.data })
            .then((res) => {
              console.log("bulkUploadResponse", res);
              setIsError(false);
              setIsToast(true);
              setTimeout(() => {
                setIsToast(false);
              }, 2000);
              setMessage(res.data.message);
            })
            .catch((err) => {
              setIsToast(true);
              setIsError(true);
              setTimeout(() => {
                setIsToast(false);
              }, 2000);
              setMessage("please try again!");
              console.log("bulkUploadResponse", err);
            });
        },
      });
    }
  };

  return (
    <>
      <div className="uploader__body">
        <FileUploader handleChange={handleChange} name="file" />
      </div>
    </>
  );
}

export default Uploader;
