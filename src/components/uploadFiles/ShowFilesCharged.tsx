import React, { useEffect, useState } from "react";
import { findTypeFilesCharded } from "./controllerUpload";
import {
  BsFillFileEarmarkPdfFill,
  BsFileEarmarkWordFill,
} from "react-icons/bs";
import { HiPhotograph } from "react-icons/hi";
import { AiFillFile } from "react-icons/ai";
import { ITypesFiles } from "./types";

function ShowFilesCharged({ files }: any) {
  const [typeFiles, settypeFiles] = useState<string[]>([]);

  useEffect(() => {
    const res = findTypeFilesCharded(files);
    settypeFiles(res);
    console.log("files", files);
  }, [files]);
  return (
    <div>
      <label>fchiers</label>
      <div className="flex  flex-wrap justify-center ">
        {typeFiles.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:border-main-color duration-100  text-6xl flex-auto h-[100px] min-w-[90px] max-w-[100px] flex justify-center items-center m-1 border p-1"
          >
            {ITypesFiles.EPUB.includes(item) ? (
              <BsFillFileEarmarkPdfFill />
            ) : ITypesFiles.PDF.includes(item) ? (
              <BsFileEarmarkWordFill />
            ) : ITypesFiles.IMG.includes(item) ? (
              <img
                src={files[index].uri}
                className="object-cover w-[100%]"
                alt="..."
              />
            ) : (
              <AiFillFile />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowFilesCharged;
