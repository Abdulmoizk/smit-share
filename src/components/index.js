// React Hooks
import { useEffect, useState } from "react";
// Firebase
import { db, ref, set, onValue, remove } from "../db/index.js";
// Helper Functions
import downloadAll from "../helper/downloadAll.js";
import uploadFile from "../firebase/uploadFile.js";
import useScreenWidth from "../helper/screenWidth.js";
import TextArea from "../components/TextArea";
import ThemeButton from "../components/Button";
import DropZone from "../components/DropZone";
import FilesList from "../components/FilesList";
// Assets
import LOGO from "../assets/logo.svg";
import TEXT_GREY from "../assets/text-grey.svg";
import TEXT_COLOR from "../assets/text-color.svg";
import FILE_GREY from "../assets/files-grey.svg";
import FILE_COLOR from "../assets/files-color.svg";
// Icons
import { FaDownload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
// Export
export {
    downloadAll,
    uploadFile,
    useScreenWidth,
    TextArea,
    ThemeButton,
    DropZone,
    FilesList,
    useEffect,
    useState,
    db,
    ref,
    set,
    onValue,
    remove,
    LOGO,
    FILE_COLOR,
    FILE_GREY,
    TEXT_COLOR,
    TEXT_GREY,
    FaDownload,
    MdDelete,
    FiMenu,
};
