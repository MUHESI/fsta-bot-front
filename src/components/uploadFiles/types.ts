export const MODEL_FILE_INIT: {
    uri: null | string | any,
    file: null | any
} = {
    uri: null,
    file: null
};
export interface IResUploadFiles {
    success: boolean;
    tabFiles?: string[];
}
// export interface IResUploadFiles {
//   success: boolean;
//   tabFiles?: [string] | any;
// }

export interface IModelLoadingUpload {
    file: boolean;
    activeChargeBtn: boolean;
    global: boolean;
}

export const modelLoadingUpload: IModelLoadingUpload = {
    file: false,
    activeChargeBtn: false,
    global: false
};


export const ITypesFiles = {
    PDF: ["pdf", "PDF"],
    IMG: ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"],
    WORD: ["doc"],
    EPUB: ["epub+zip", 'epub'],
    ZIP: ["zip"],

}